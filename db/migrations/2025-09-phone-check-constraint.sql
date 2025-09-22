-- Ensure phone is exactly 10 digits in public.profiles
ALTER TABLE public.profiles
  DROP CONSTRAINT IF EXISTS profiles_phone_10_digits;

ALTER TABLE public.profiles
  ADD CONSTRAINT profiles_phone_10_digits
  CHECK (phone ~ '^[0-9]{10}$');


