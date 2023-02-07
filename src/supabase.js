import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://rrsnlwazuuxfiiiugwjr.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJyc25sd2F6dXV4ZmlpaXVnd2pyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzU0MzIxNTAsImV4cCI6MTk5MTAwODE1MH0.QjCR1HVRkL1b2RkzCZnadfhkQtK1vt-PkTrvhBdwMso";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
