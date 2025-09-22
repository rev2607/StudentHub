-- Fix RLS policies for profiles table
-- This migration ensures users can only manage their own profiles

-- Enable RLS on profiles table
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Users can insert their own profile" ON public.profiles;
DROP POLICY IF EXISTS "Users can view their own profile" ON public.profiles;
DROP POLICY IF EXISTS "Users can update their own profile" ON public.profiles;

-- Create safe policies for profiles table
CREATE POLICY "Users can insert their own profile"
  ON public.profiles
  FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can view their own profile"
  ON public.profiles
  FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can update their own profile"
  ON public.profiles
  FOR UPDATE
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Optional: For development/testing only - remove phone unique constraint
-- Uncomment the following lines ONLY if you want to avoid duplicate phone errors during local tests
-- Do not run in production unless intended
-- ALTER TABLE public.profiles DROP CONSTRAINT IF EXISTS profiles_phone_key;
-- DROP INDEX IF EXISTS idx_profiles_phone;
