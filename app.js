var quiz = new Quiz();

var questionZero = new Question("What is your name?", "Daniel", "Alfred");
var questionOne = new Question("What is your state?", "Kentucky", "Not Kentucky");

quiz.add(questionZero);
quiz.add(questionOne);

var quizElement = document.getElementById("question");

quiz.renderInElement(quizElement);

var answerZeroButton = document.getElementById("guess0")
answerZeroButton.onclick = function() {

};

var answerOneButton = document.getElementById("guess1")
answerOneButton.onclick = function() {

};
