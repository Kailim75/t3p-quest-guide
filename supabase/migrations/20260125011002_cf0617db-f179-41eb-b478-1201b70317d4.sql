-- Change correct_answer from single char to array of chars
ALTER TABLE public.questions 
DROP CONSTRAINT questions_correct_answer_check;

ALTER TABLE public.questions 
ALTER COLUMN correct_answer TYPE TEXT;

-- Add check constraint for valid answers format (comma-separated A,B,C,D values)
ALTER TABLE public.questions
ADD CONSTRAINT questions_correct_answer_check 
CHECK (correct_answer ~ '^[A-D](,[A-D])?$');