import { supabase } from "./supabaseClient.js";

// test reading quizzes
async function testRead() {
  const { data, error } = await supabase.from("quizzes").select("*");
  if (error) {
    console.error("Error:", error.message);
  } else {
    console.log("Quizzes:", data);
  }
}

// test inserting a quiz result (replace with real quiz_id + user_id)
async function testInsert() {
  const { data, error } = await supabase.from("quiz_results").insert([
    {
      user_id: "replace-with-valid-user-uuid",
      quiz_id: "replace-with-valid-quiz-uuid",
      questions_answered: 5,
      score: 3
    }
  ]);
  if (error) {
    console.error("Insert error:", error.message);
  } else {
    console.log("Inserted result:", data);
  }
}

testRead();
testInsert();
