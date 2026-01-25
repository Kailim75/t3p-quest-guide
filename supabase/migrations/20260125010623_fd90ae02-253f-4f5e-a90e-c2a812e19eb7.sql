-- Create difficulty enum
CREATE TYPE public.question_difficulty AS ENUM ('facile', 'moyen', 'difficile');

-- Create questions table
CREATE TABLE public.questions (
    id TEXT PRIMARY KEY,
    module_id TEXT NOT NULL,
    sub_module_id TEXT NOT NULL,
    text TEXT NOT NULL,
    option_a TEXT NOT NULL,
    option_b TEXT NOT NULL,
    option_c TEXT NOT NULL,
    option_d TEXT NOT NULL,
    correct_answer CHAR(1) NOT NULL CHECK (correct_answer IN ('A', 'B', 'C', 'D')),
    explanation TEXT NOT NULL DEFAULT '',
    reference TEXT NOT NULL DEFAULT '',
    difficulty question_difficulty NOT NULL DEFAULT 'moyen',
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.questions ENABLE ROW LEVEL SECURITY;

-- Everyone can read questions (needed for quiz)
CREATE POLICY "Anyone can view questions"
ON public.questions
FOR SELECT
USING (true);

-- Only admins can insert questions
CREATE POLICY "Admins can insert questions"
ON public.questions
FOR INSERT
WITH CHECK (has_role(auth.uid(), 'admin'));

-- Only admins can update questions
CREATE POLICY "Admins can update questions"
ON public.questions
FOR UPDATE
USING (has_role(auth.uid(), 'admin'));

-- Only admins can delete questions
CREATE POLICY "Admins can delete questions"
ON public.questions
FOR DELETE
USING (has_role(auth.uid(), 'admin'));

-- Create trigger for updated_at
CREATE TRIGGER update_questions_updated_at
BEFORE UPDATE ON public.questions
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();