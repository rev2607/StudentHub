import { createClient } from "@supabase/supabase-js";

const url = import.meta.env.VITE_SUPABASE_URL;
const key = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!url || !key) console.error("Missing VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY");

export const supabase = createClient(url, key);

// Export types for use in other components
export type Paper = {
  id: number;
  name: string;
  duration_minutes: number;
  total_questions: number;
};

export type Question = {
  id: number;
  qnum: number;
  type: string;
  subject: string;
  topic: string;
  question_text: string;
  choices?: Choice[];
  correct_answer?: string;
};

export type Choice = {
  id: number;
  question_id: number;
  choice_label: string;
  choice_text: string;
};

export type Answer = {
  id: number;
  user_id: string;
  question_id: number;
  answer_text: string;
  is_correct: boolean;
  created_at: string;
};