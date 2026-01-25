import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.3'
import { correctAnswers, validQuizIds } from './correctAnswers.ts'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

// Quiz answer data structure - supports single or multiple answers
interface QuizAnswer {
  questionId: string;
  answer: string; // Single: 'A' or Multiple: 'A,B' (comma-separated, sorted)
}

// Helper function to normalize and compare answers
function normalizeAnswer(answer: string): string[] {
  return answer.split(',').map(a => a.trim().toUpperCase()).sort();
}

function areAnswersEqual(userAnswer: string, correctAnswer: string): boolean {
  const userNormalized = normalizeAnswer(userAnswer);
  const correctNormalized = normalizeAnswer(correctAnswer);
  
  if (userNormalized.length !== correctNormalized.length) {
    return false;
  }
  
  return userNormalized.every((ans, idx) => ans === correctNormalized[idx]);
}

interface ValidateQuizRequest {
  quiz_type: 'module' | 'exam';
  quiz_id: string;
  answers: QuizAnswer[];
  time_spent: number | null;
}

Deno.serve(async (req) => {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Get auth token from request
    const authHeader = req.headers.get('Authorization');
    if (!authHeader) {
      return new Response(
        JSON.stringify({ error: 'Authorization header required' }),
        { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Initialize Supabase client
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Verify user token
    const token = authHeader.replace('Bearer ', '');
    const { data: { user }, error: authError } = await supabase.auth.getUser(token);
    
    if (authError || !user) {
      return new Response(
        JSON.stringify({ error: 'Invalid or expired token' }),
        { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Parse and validate request body
    const body: ValidateQuizRequest = await req.json();
    
    // Validate quiz_type
    if (!body.quiz_type || !['module', 'exam'].includes(body.quiz_type)) {
      return new Response(
        JSON.stringify({ error: 'Invalid quiz_type. Must be "module" or "exam".' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Validate quiz_id
    if (!body.quiz_id || !validQuizIds.includes(body.quiz_id)) {
      return new Response(
        JSON.stringify({ error: 'Invalid quiz_id' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Validate answers array
    if (!Array.isArray(body.answers) || body.answers.length === 0) {
      return new Response(
        JSON.stringify({ error: 'Answers array is required and must not be empty' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Limit answers array size to prevent abuse
    if (body.answers.length > 200) {
      return new Response(
        JSON.stringify({ error: 'Too many answers submitted' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Validate time_spent (if provided)
    if (body.time_spent !== null && body.time_spent !== undefined) {
      if (typeof body.time_spent !== 'number' || body.time_spent < 0 || body.time_spent > 14400) {
        // Max 4 hours (14400 seconds)
        return new Response(
          JSON.stringify({ error: 'Invalid time_spent value' }),
          { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
    }

    // Validate each answer and calculate score
    const validAnswerLetters = ['A', 'B', 'C', 'D'];
    const questionsFailed: string[] = [];
    let correctCount = 0;
    const totalQuestions = body.answers.length;
    const seenQuestionIds = new Set<string>();

    for (const answer of body.answers) {
      // Validate answer structure
      if (!answer.questionId || typeof answer.questionId !== 'string') {
        return new Response(
          JSON.stringify({ error: 'Invalid answer structure: questionId is required' }),
          { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      // Check for duplicate question IDs
      if (seenQuestionIds.has(answer.questionId)) {
        return new Response(
          JSON.stringify({ error: `Duplicate question ID: ${answer.questionId}` }),
          { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      seenQuestionIds.add(answer.questionId);

      // Validate answer format (single or multiple, comma-separated)
      if (!answer.answer || typeof answer.answer !== 'string') {
        return new Response(
          JSON.stringify({ error: `Invalid answer for question ${answer.questionId}` }),
          { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      // Parse and validate each answer letter
      const answerLetters = normalizeAnswer(answer.answer);
      const invalidLetters = answerLetters.filter(letter => !validAnswerLetters.includes(letter));
      if (invalidLetters.length > 0 || answerLetters.length === 0) {
        return new Response(
          JSON.stringify({ error: `Invalid answer letters for question ${answer.questionId}: ${invalidLetters.join(', ')}` }),
          { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      // Verify question exists in our database
      const correctAnswer = correctAnswers[answer.questionId];
      if (!correctAnswer) {
        return new Response(
          JSON.stringify({ error: `Unknown question ID: ${answer.questionId}` }),
          { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      // Check if answer is correct (SERVER-SIDE VALIDATION)
      // Supports both single answers ('A') and multiple answers ('A,B')
      if (areAnswersEqual(answer.answer, correctAnswer)) {
        correctCount++;
      } else {
        questionsFailed.push(answer.questionId);
      }
    }

    // Calculate score and percentage (SERVER-SIDE CALCULATION)
    const percentage = Math.round((correctCount / totalQuestions) * 100);
    const passed = percentage >= 70;

    // Save result to database using service role key (bypasses RLS)
    const { data: result, error: insertError } = await supabase
      .from('quiz_results')
      .insert({
        user_id: user.id,
        quiz_type: body.quiz_type,
        quiz_id: body.quiz_id,
        score: correctCount,
        total_questions: totalQuestions,
        percentage: percentage,
        passed: passed,
        time_spent: body.time_spent ?? null,
        questions_failed: questionsFailed,
      })
      .select()
      .single();

    if (insertError) {
      console.error('Database insert error:', insertError);
      return new Response(
        JSON.stringify({ error: 'Failed to save quiz result' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Return validated result with server-calculated values
    return new Response(
      JSON.stringify({
        success: true,
        result: {
          id: result.id,
          score: correctCount,
          total_questions: totalQuestions,
          percentage: percentage,
          passed: passed,
          questions_failed: questionsFailed,
        }
      }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Unexpected error:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
