import { createClient } from "https://esm.sh/@supabase/supabase-js";

// Initializing Supabase
const supabaseUrl = "https://tyncdrzfuayzkuyhfbfp.supabase.co";
const supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR5bmNkcnpmdWF5emt1eWhmYmZwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYxNTQwNDcsImV4cCI6MjA3MTczMDA0N30.Ap5hXVujv0L3EWt2rDAUw1fktj_mE5OBQHdRbdldfXk"; // from Supabase dashboard
const supabase = createClient(supabaseUrl, supabaseKey);

// Example: fetch posts
const { data, error } = await supabase.from("posts").select("*");

console.log(data);