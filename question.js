function Quiz(question, answer1, answer2) {
  // Media.call(this, title, duration);
  this.question = question;
  this.answer1 = answer1;
  this.answer2 = answer2;
}

//IDK what this does??
var questions = new Quiz();

var firstQuestion = new Quiz("Question 1", "Answer 1", "Answer 2");
var secondQuestion = new Quiz("Question 2", "Answer 1", "Answer 2");

var quizElement = document.getElementById("quiz");

// quizElement.renderInElement(quizElement);


// Playlist.prototype.renderInElement = function(list) {
//   list.innerHTML = "";
//   for (var i = 0; i < this.songs.length; i++) {
//     list.innerHTML += this.songs[i].toHTML();
//   }
// };

Quiz.prototype.toHTML = function() {
  var htmlString = "<h1>Awesome Quiz</h1>";
  htmlString += "<h2 id=\"question\" class=\"headline-secondary--grouped\"></h2>";
  htmlString += "<h3 id=\"score\"></h3>";
  htmlString += "<p id=\"choice0\"></p>";
  htmlString += "<button id=\"guess0\" class=\"btn--default\">Select Answer</button>";
  htmlString += "<p id=\"choice1\"></p>";
  htmlString += "<button id=\"guess1\" class=\"btn--default\">Select Answer</button>";
  htmlString += "<footer><p id=\"progress\">Question x of y</p></footer>";
  return htmlString;
}
