import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://bdhqbjrjazdfkoulwduo.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJkaHFianJqYXpkZmtvdWx3ZHVvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgzNDgzODgsImV4cCI6MjA3MzkyNDM4OH0.yCm-nqKFNR1n8H0tC6T3rPb1K3d-cR8CA4oZ9nL_KSQ'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types
export interface UserProfile {
  id: string
  user_id: string
  name: string
  phone_number: string
  email: string
  target_exam: string
  pincode: string
  city_area: string
  created_at: string
  updated_at: string
}
