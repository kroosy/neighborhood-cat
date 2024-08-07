import { createBrowserClient } from "@supabase/ssr";

export const createClient = () =>
  createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL_DEV!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY_DEV!
  );
