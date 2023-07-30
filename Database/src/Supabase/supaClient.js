import { createClient } from "@supabase/supabase-js";
// const supaKey = process.env.REACT_NATIVE_SUPABASE_ANON_KEY;
// const supaUrl = process.env.REACT_NATIVE_SUPABASE_URL;
export const supabase = createClient(
  "https://guiiohpombmpozgrrlmt.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd1aWlvaHBvbWJtcG96Z3JybG10Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTA0NDg2ODEsImV4cCI6MjAwNjAyNDY4MX0.C90BKtvdHk8kKPfVu35BTd5T44FlaEFBY5q7Df9uWr4",
  {}
);
