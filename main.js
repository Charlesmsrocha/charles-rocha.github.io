import { signUp, logIn, logOut, getUser } from './auth.js'
import { createResult } from './create.js'
import { readResults } from './read.js'
import { updateResult } from './update.js'
import { deleteResult } from './delete.js'
import { loadQuestions, renderQuestions, calculateScore } from './quiz.js'

const $ = (s) => document.querySelector(s)

async function refreshUI() {
  const user = await getUser()
  if (user) {
    $('#userEmail').textContent = user.email
    $('#authCard').classList.add('hidden')
    $('#quizCard').classList.remove('hidden')
    $('#resultsCard').classList.remove('hidden')
    const qs = await loadQuestions()
    renderQuestions(qs)
    renderResults()
  } else {
    $('#authCard').classList.remove('hidden')
    $('#quizCard').classList.add('hidden')
    $('#resultsCard').classList.add('hidden')
  }
}

async function renderResults() {
  const { data, error } = await readResults()
  const list = $('#resultsList')
  list.innerHTML = ''
  if (error) return list.innerHTML = `<li>${error.message}</li>`
  data.forEach(r => {
    const li = document.createElement('li')
    li.innerHTML = `${new Date(r.created_at).toLocaleString()} — <strong>${r.score}/${r.total}</strong>`
    list.appendChild(li)
  })
}

// Event listeners
$('#signupBtn').addEventListener('click', async () => {
  const { error } = await signUp($('#email').value, $('#password').value)
  if (error) alert(error.message)
  else refreshUI()
})

$('#loginBtn').addEventListener('click', async () => {
  const { error } = await logIn($('#email').value, $('#password').value)
  if (error) alert(error.message)
  else refreshUI()
})

$('#signOutBtn').addEventListener('click', async () => {
  await logOut()
  refreshUI()
})

$('#submitQuizBtn').addEventListener('click', async (e) => {
  e.preventDefault()
  const qs = await loadQuestions()
  const score = calculateScore(qs)
  const user = await getUser()
  const { error } = await createResult(user.id, score, qs.length)
  if (error) alert(error.message)
  else refreshUI()
})

// Init
refreshUI()
