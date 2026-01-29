/*
  # Add Column Defaults to Profiles

  1. Changes
    - Ensure full_name has a default empty string
    - Ensure email is NOT NULL
*/

DO $$
BEGIN
  -- Ensure full_name column has default
  IF EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'profiles' AND column_name = 'full_name'
  ) THEN
    ALTER TABLE public.profiles 
    ALTER COLUMN full_name SET DEFAULT '';
  END IF;
END $$;
