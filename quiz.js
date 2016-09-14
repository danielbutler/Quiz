function Quiz() {
  this.questions = [];
  this.nowPlayingIndex = 0;
}

Quiz.prototype.add = function(question) {
  this.questions.push(question);
};

Quiz.prototype.renderInElement = function(list) {
  list.innerHTML = "'<h1>Awesome Quiz</h1>";
  for (var i = 0; i < this.questions.length; i++) {
    list.innerHTML += this.questions[i].toHTML();
  }
};
