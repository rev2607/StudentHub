// src/lib/supabaseClient.ts
import { createClient } from "@supabase/supabase-js";

const url = import.meta.env.VITE_SUPABASE_URL;
const key = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!url || !key) {
  console.error("Missing VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY in environment. Restart dev server after setting .env");
}

export const supabase = createClient(url, key);

// Database types
export interface Paper {
  id: number;
  exam: string;
  year: number;
  title: string;
  created_at?: string;
}

export interface Question {
  id: number;
  paper_id: number;
  qnum: number;
  type: 'single' | 'multi' | 'numeric';
  subject: string;
  topic: string;
  question_text: string;
  marks: number;
  created_at?: string;
}

export interface Choice {
  id: number;
  question_id: number;
  choice_label: string;
  choice_text: string;
  is_correct: boolean;
}

export interface Answer {
  id: number;
  question_id: number;
  correct_answer: string;
  explanation: string;
}

export interface Topic {
  id: number;
  name: string;
  subject: string;
  exam: string;
}

export interface Profile {
  id: string;
  user_id: string;
  full_name: string;
  phone: string;
  city: string;
  target_exam: string;
  created_at?: string;
}