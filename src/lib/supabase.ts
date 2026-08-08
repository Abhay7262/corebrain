import { createClient, type SupabaseClient } from "@supabase/supabase-js";

/**
 * Supabase is wired up but optional. When the project has the two public
 * environment variables set (VITE_SUPABASE_URL + VITE_SUPABASE_ANON_KEY),
 * real Supabase Auth is used. Otherwise the app falls back to a local demo
 * session so the login -> dashboard flow keeps working without breaking.
 *
 * To enable real auth, add these to the project environment:
 *   VITE_SUPABASE_URL=<your-project-url>
 *   VITE_SUPABASE_ANON_KEY=<your-anon-key>
 */
const url = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

export const isSupabaseConfigured = Boolean(url && anonKey);

let client: SupabaseClient | null = null;

export function getSupabaseClient(): SupabaseClient | null {
  if (!isSupabaseConfigured) return null;
  if (!client) {
    client = createClient(url as string, anonKey as string, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true,
      },
    });
  }
  return client;
}
