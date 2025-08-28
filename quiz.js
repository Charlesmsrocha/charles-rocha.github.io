// export async function loadQuestions() {
//   const res = await fetch('./questions.json')
//   return await res.json()
// }

// export function renderQuestions(questions) {
//   const form = document.getElementById('quizForm')
//   form.innerHTML = ''
//   questions.forEach((q, i) => {
//     const fs = document.createElement('fieldset')
//     fs.innerHTML = `<h4>${q.question}</h4>`
//     q.options.forEach((opt, idx) => {
//       const label = document.createElement('label')
//       label.innerHTML = `<input type="radio" name="q${i}" value="${idx}"> ${opt}`
//       fs.appendChild(label)
//     })
//     form.appendChild(fs)
//   })
// }

// export function calculateScore(questions) {
//   let score = 0
//   questions.forEach((q, i) => {
//     const chosen = document.querySelector(`input[name="q${i}"]:checked`)
//     if (chosen && Number(chosen.value) === q.answer) score++
//   })
//   return score
// }
