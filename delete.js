async function deleteQuizResult(resultId) {
  const { error } = await supabase
    .from('quiz_results')
    .delete()
    .eq('id', resultId)

  if (error) {
    console.error("Error deleting result:", error)
    return false
  }
  return true
}
