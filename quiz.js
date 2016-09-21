function Quiz() {
  this.questions = [];
  this.nowPlayingIndex = 0;
}

Quiz.prototype.add = function(question) {
  this.questions.push(question);
};

Quiz.prototype.renderInElement = function(list) {

      // <h1>Awesome Quiz</h1>
      //
      // <h2 id="question" class="headline-secondary--grouped"></h2>
      // <h3 id="score"></h3>
      //
      // <p id="choice0"></p>
      // <button id="guess0" class="btn--default">Select Answer</button>
      //
      // <p id="choice1"></p>
      // <button id="guess1" class="btn--default">Select Answer</button>
      //
      // <footer>
      //     <p id="progress">Question x of y</p>
      // </footer>

  // list.innerHTML = "'<h1>Awesome Quiz</h1>";
  for (var i = 0; i < this.questions.length; i++) {
    questionElement.innerHTML += this.questions[i].toHTML();
  }
};
