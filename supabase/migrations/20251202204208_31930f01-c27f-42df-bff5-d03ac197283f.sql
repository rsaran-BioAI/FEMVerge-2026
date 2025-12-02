-- Allow authenticated users to insert their own admin role ONLY if no admin exists yet
CREATE POLICY "Allow first admin setup"
ON public.user_roles
FOR INSERT
TO authenticated
WITH CHECK (
  role = 'admin' 
  AND auth.uid() = user_id 
  AND NOT EXISTS (SELECT 1 FROM public.user_roles WHERE role = 'admin')
);