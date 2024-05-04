import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://cuqoqexrugtkgrxrhlac.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN1cW9xZXhydWd0a2dyeHJobGFjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ2MTMyNDIsImV4cCI6MjAzMDE4OTI0Mn0.Fpr7dG3ZY29pIpE9oH_8p06qPvk4WOM0NiFnGjH5ZwQ";
// Create a single supabase client for interacting with your database

const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
