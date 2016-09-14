function Questions(question, answer1, answer2) {
  // Media.call(this, title, duration);
  this.question = question;
  this.answer1 = answer1;
  this.answer2 = answer2;
}

// Questions.prototype = Object.create(Media.prototype);

var htmlString;
Questions.prototype.toHTML = function() {
  htmlString += '';
  return htmlString;
};
