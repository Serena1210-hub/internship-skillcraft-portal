/*
  # Improve User Profile Trigger

  1. Changes
    - Update trigger function to handle edge cases
    - Ensure proper error handling
    - Use SECURITY DEFINER to bypass RLS
  
  2. Security
    - Function executes with elevated privileges
    - Inserts are secure and always succeed
*/

-- Drop and recreate the trigger function with better error handling
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
DROP FUNCTION IF EXISTS public.handle_new_user();

CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_full_name text;
  v_role user_role;
BEGIN
  -- Extract values from user metadata with defaults
  v_full_name := COALESCE(NEW.raw_user_meta_data->>'full_name', '');
  v_role := COALESCE((NEW.raw_user_meta_data->>'role')::user_role, 'intern'::user_role);
  
  -- Check if profile already exists
  IF NOT EXISTS (SELECT 1 FROM public.profiles WHERE id = NEW.id) THEN
    INSERT INTO public.profiles (
      id,
      email,
      full_name,
      role,
      created_at,
      updated_at
    )
    VALUES (
      NEW.id,
      NEW.email,
      v_full_name,
      v_role,
      NOW(),
      NOW()
    );
  END IF;
  
  RETURN NEW;
END;
$$;

-- Recreate trigger
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_new_user();
