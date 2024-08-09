const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

const quizQuestions = [
    {
        question: "What does HTML stand for?",
        answers: {
            a: "Hyper Text Markup Language",
            b: "Home Tool Markup Language",
            c: "Hyperlinks and Text Markup Language"
        },
        correctAnswer: "a"
    },
    {
        question: "What does CSS stand for?",
        answers: {
            a: "Creative Style Sheets",
            b: "Cascading Style Sheets",
            c: "Computer Style Sheets"
        },
        correctAnswer: "b"
    },
    {
        question: "What does JS stand for in web development?",
        answers: {
            a: "JavaScript",
            b: "JavaSource",
            c: "JustScript"
        },
        correctAnswer: "b"
    }
];

/**
 * Builds the quiz by generating HTML for each question and its answers.
 */
function buildQuiz() {
    let output = '';

    for (let questionNumber = 0; questionNumber < quizQuestions.length; questionNumber++) {
        let currentQuestion = quizQuestions[questionNumber];
        let answers = '';

        for (let letter in currentQuestion.answers) {
            answers = `
                <label>
                    <input type="radio" name="question#${questionNumber}" value="${letter}">
                    ${letter} : ${currentQuestion.answers[letter]}
                </label><br>
            `;
        }

        output += '<h2 class="h5 mt-4">' + currentQuestion.question + '</h2>';
        output += '<div class="answers">' + answers + '</div>';
    }

    quizContainer.innerHTML = output;
}

/**
 * Shows the results of the quiz by checking the user's answers and displaying the score.
 */
function showResults() {
    const answerContainers = quizContainer.querySelectorAll('.answers');

    let numCorrect = 0;

    for (let questionNumber = 0; questionNumber < quizQuestions.length; questionNumber++) {
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        if (userAnswer === quizQuestions[questionNumber].correctAnswer) {
            numCorrect + 1;
            answerContainers[questionNumber].style.color = 'lightgreen';
        } else {
            answerContainers[questionNumber].style.color = 'red';
        }
    }

    resultsContainer.innerHTML = `${numCorrect} out of ${quizQuestions.length}`;
}

buildQuiz();

submitButton.addEventListener('click', showResults);