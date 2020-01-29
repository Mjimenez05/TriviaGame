const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')
const shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
    // start quiz
function startGame() {
    console.log('Started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

// next question
function setNextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {}

function selectAnswer(params) {

}

const questions = [{
    question: 'What color is Darth Vaders Light Saber?',
    answers: [
        { text: 'Red', correct: true } { text: 'Green', correct: false } { text: 'Yellow', correct: false } { text: 'Blue', correct: false }
    ]
}]

// answer is correct
// changecolor to green

// answer is wrong
// changecolor to red

// end the quiz and show the score


// git addanswer is correct

// answer is Wrong


// score render


// calculate the amount of questions answered correctly by the user


// choose the image based on the scorePerCent