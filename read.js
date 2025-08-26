async function getUserResults(userId) {
  const { data, error } = await supabase
    .from('quiz_results')
    .select(`
      id,
      score,
      answered,
      created_at,
      quizzes (title)
    `)
    .eq('user_id', userId)

  if (error) {
    console.error("Error fetching results:", error)
    return []
  }
  return data
}
