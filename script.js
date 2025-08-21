// script.js
    const questionEl = document.getElementById('question');
    const optionsEl = document.querySelectorAll('.option');
    const resultEl = document.getElementById('result');

    const correctAnswer = 'Communication between microservices is carried out through fixed and predefined routes, simplifying the network topology in static environments.'; // The right answer

    optionsEl.forEach(option => {
        option.addEventListener('click', () => {
            if (option.textContent === correctAnswer) {
                resultEl.textContent = "Correct!";
                resultEl.className = 'correct'; // Add class to green
            } else {
                resultEl.textContent = "Incorrect!";
                resultEl.className = 'incorrect'; // Add class to red
            }
        });
    });
    