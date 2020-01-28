// select all elements
const start = document.getElementById("start");
// create our questions
// create some variables
// render a question
function renderQuestion() {
    let q = questions[runningQuestion];

    question.innerHTML = "<p>" + q.question + "</p>";
    qImg.innerHTML = "<img src=" + q.imgSrc + ">";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
}
start.addEventListener("click", startQuiz);
// start quiz
function startQuiz() {
    start.style.display = "none";
    renderQuestion
}
// render progress
// counter render
// checkAnwer
// answer is correct
// answer is Wrong
// score render
// calculate the right answers