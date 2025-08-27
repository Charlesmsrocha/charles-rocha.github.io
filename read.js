// async function getUserResults(userId) {
//   const { data, error } = await supabase
//     .from('quiz_results')
//     .select(`
//       id,
//       score,
//       answered,
//       created_at,
//       quizzes (title)
//     `)
//     .eq('user_id', userId)

//   if (error) {
//     console.error("Error fetching results:", error)
//     return []
//   }
//   return data
// }

import { supabase } from './supabaseClient.js'

export async function readResults() {
  return await supabase
    .from('results')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(10)
}

