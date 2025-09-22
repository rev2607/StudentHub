-- Create profiles table for user profile information
create table if not exists public.profiles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade,
  full_name text not null,
  phone text not null unique,
  city text not null,
  target_exam text not null,
  created_at timestamptz default now()
);

-- Create index for faster lookups by user_id
create index if not exists idx_profiles_user_id on public.profiles (user_id);

-- Enable Row Level Security (RLS)
alter table public.profiles enable row level security;

-- Create policies for profiles table
-- Users can view their own profile
create policy "Users can view own profile" on public.profiles
  for select using (auth.uid() = user_id);

-- Users can insert their own profile
create policy "Users can insert own profile" on public.profiles
  for insert with check (auth.uid() = user_id);

-- Users can update their own profile
create policy "Users can update own profile" on public.profiles
  for update using (auth.uid() = user_id);
