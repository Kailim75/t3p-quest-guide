-- Allow admins to view all quiz results
CREATE POLICY "Admins can view all quiz results"
ON public.quiz_results
FOR SELECT
USING (has_role(auth.uid(), 'admin'::app_role));

-- Allow admins to view all user badges
CREATE POLICY "Admins can view all user badges"
ON public.user_badges
FOR SELECT
USING (has_role(auth.uid(), 'admin'::app_role));

-- Allow admins to view all user streaks
CREATE POLICY "Admins can view all user streaks"
ON public.user_streaks
FOR SELECT
USING (has_role(auth.uid(), 'admin'::app_role));