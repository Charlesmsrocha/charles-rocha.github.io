// async function deleteQuizResult(resultId) {
//   const { error } = await supabase
//     .from('quiz_results')
//     .delete()
//     .eq('id', resultId)

//   if (error) {
//     console.error("Error deleting result:", error)
//     return false
//   }
//   return true
// }

import { supabase } from './supabaseClient.js'

export async function deleteResult(id) {
  return await supabase.from('results').delete().eq('id', id)
}
