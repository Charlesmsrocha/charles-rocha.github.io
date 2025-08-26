async function updateQuizResult(resultId, newScore, newAnswered) {
  const { data, error } = await supabase
    .from('quiz_results')
    .update({ score: newScore, answered: newAnswered })
    .eq('id', resultId)
    .select()

  if (error) {
    console.error("Error updating result:", error)
    return null
  }
  return data
}
