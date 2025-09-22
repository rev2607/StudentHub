import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables. Please check your .env file.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

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
