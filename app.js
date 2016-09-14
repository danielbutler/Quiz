var questions = new Quiz();

var firstQuestion = new Questions("Question 1", "Answer 1", "Answer 2");
var secondQuestion = new Questions("Question 2", "Answer 1", "Answer 2");

questions.add(firstQuestion);
questions.add(secondQuestion);

var quizElement = document.getElementById("quiz");

questions.renderInElement(quizElement);
