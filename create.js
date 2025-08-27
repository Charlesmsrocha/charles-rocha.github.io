// async function createQuizResult(userId, quizId, score, answered) {
//   const { data, error } = await supabase
//     .from('quiz_results')
//     .insert([
//       { user_id: userId, quiz_id: quizId, score, answered }
//     ])
//     .select()

//   if (error) {
//     console.error("Error inserting result:", error)
//     return null
//   }
//   return data
// }

import { supabase } from './supabaseClient.js' 

export async function createResult(userId, score, total) {
  return await supabase.from('results').insert({
    user_id: userId,
    score,
    total
  })
}

