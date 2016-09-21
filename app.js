var questions = new Quiz();

var firstQuestion = new Questions("Question 1", "Answer 1", "Answer 2");
var secondQuestion = new Questions("Question 2", "Answer 1", "Answer 2");

questions.add(firstQuestion);
questions.add(secondQuestion);

var quizElement = document.getElementById("quiz");
var questionElement = document.getElementById("question");
var score = document.getElementById("score");
var choice0 = document.getElementById("choice0");
var choice1 = document.getElementById("choice1");
var guess0 = document.getElementById("guess0");
var guess1 = document.getElementById("guess1");
var progress = document.getElementById("progress");

questions.renderInElement(quizElement);
