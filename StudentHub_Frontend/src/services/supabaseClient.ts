import { createClient, SupabaseClient } from "@supabase/supabase-js";

// Use Supabase credentials from environment (with fallback to direct values)
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || "https://bdhqbjrjazdfkoulwduo.supabase.co";
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJkaHFianJqYXpkZmtvdWx3ZHVvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgzNDgzODgsImV4cCI6MjA3MzkyNDM4OH0.yCm-nqKFNR1n8H0tC6T3rPb1K3d-cR8CA4oZ9nL_KSQ";

let supabase: SupabaseClient | null = null;

export function getSupabaseClient(): SupabaseClient | null {
  if (supabase) return supabase;

  console.log("🔧 Supabase config:", {
    url: supabaseUrl,
    keyLength: supabaseAnonKey?.length || 0,
    envUrl: import.meta.env.VITE_SUPABASE_URL,
    envKeyLength: import.meta.env.VITE_SUPABASE_ANON_KEY?.length || 0
  });

  supabase = createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
  return supabase;
}

export async function fetchNewsFromSupabase(limit = 10) {
  const client = getSupabaseClient();
  if (!client) {
    console.error("❌ Supabase client not available");
    return { data: null, error: new Error("Supabase client not available") };
  }
  
  console.log("🔄 Attempting to fetch news from Supabase...");
  const { data, error } = await client
    .from("news_articles")
    .select("title,date,snippet,link,image_url")
    .order("date", { ascending: false })
    .limit(limit);

  if (error) {
    console.error("❌ Supabase fetch error:", error);
  } else {
    console.log("✅ Supabase fetch successful:", data?.length || 0, "articles");
  }

  return { data, error } as const;
}