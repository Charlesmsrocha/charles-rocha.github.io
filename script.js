// script.js
    // const questionEl = document.getElementById('question1');
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

    const optionsEl2 = document.querySelectorAll('.option2');
    const resultEl2 = document.getElementById('result2');

    const correctAnswer2 = 'POP3.'; // The right answer

    optionsEl2.forEach(option => {
        option.addEventListener('click', () => {
            if (option.textContent === correctAnswer2) {
                resultEl2.textContent = "Correct!";
                resultEl2.className = 'correct'; // Add class to green
            } else {
                resultEl2.textContent = "Incorrect!";
                resultEl2.className = 'incorrect'; // Add class to red
            }
        });
    });
