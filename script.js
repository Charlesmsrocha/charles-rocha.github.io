// script.js
    // // const questionEl = document.getElementById('question1');
    // const optionsEl = document.querySelectorAll('.option');
    // const resultEl = document.getElementById('result');

    // const correctAnswer = 'Communication between microservices is carried out through fixed and predefined routes, simplifying the network topology in static environments.'; // The right answer

    // optionsEl.forEach(option => {
    //     option.addEventListener('click', () => {
    //         if (option.textContent === correctAnswer) {
    //             resultEl.textContent = "Correct!";
    //             resultEl.className = 'correct'; // Add class to green
    //         } else {
    //             resultEl.textContent = "Incorrect!";
    //             resultEl.className = 'incorrect'; // Add class to red
    //         }
    //     });
    // });

    // const optionsEl2 = document.querySelectorAll('.option2');
    // const resultEl2 = document.getElementById('result2');

    // const correctAnswer2 = 'POP3.'; // The right answer

    // optionsEl2.forEach(option => {
    //     option.addEventListener('click', () => {
    //         if (option.textContent === correctAnswer2) {
    //             resultEl2.textContent = "Correct!";
    //             resultEl2.className = 'correct'; // Add class to green
    //         } else {
    //             resultEl2.textContent = "Incorrect!";
    //             resultEl2.className = 'incorrect'; // Add class to red
    //         }
    //     });
    // });

let questions = [];
let currentQuestionIndex = 0;
let score = 0;

async function loadQuestions() {
  const response = await fetch("questions.json");
  questions = await response.json();
  showQuestion();
}

function showQuestion() {
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const currentQuestion = questions[currentQuestionIndex];

  questionElement.textContent = currentQuestion.question;
  optionsElement.innerHTML = "";

  currentQuestion.options.forEach((option, index) => {
    const li = document.createElement("li");
    li.textContent = option;
    li.addEventListener("click", () => selectAnswer(index));
    optionsElement.appendChild(li);
  });

  document.getElementById("next-btn").disabled = true;
}

function selectAnswer(selectedIndex) {
  const currentQuestion = questions[currentQuestionIndex];
  const options = document.querySelectorAll("#options li");

  options.forEach((option, index) => {
    if (index === currentQuestion.answer) {
      option.style.backgroundColor = "lightgreen";
    } else if (index === selectedIndex) {
      option.style.backgroundColor = "salmon";
    }
    option.style.pointerEvents = "none";
  });

  if (selectedIndex === currentQuestion.answer) {
    score++;
  }

  document.getElementById("next-btn").disabled = false;
}

document.getElementById("next-btn").addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    document.getElementById("quiz-container").innerHTML =
      `<h1>Quiz Finished!</h1>
       <p>Your score: ${score} / ${questions.length}</p>`;
  }
});

loadQuestions();

