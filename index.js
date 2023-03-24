
var readlineSync = require('readline-sync');


var score = 0;
function welcome() {
  var username = readlineSync.question('What is your name? ');
  console.log();
  console.log("Welcome " + username + " to DO YOU KNOW Omkar???");
  console.log();
}

function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("You are right! ");
    score = score + 1;
  }
  else {
    console.log("You are wrong! ");
  }
  console.log();
}

var questions = [
  {
    question: "What is his favourite food item? ",
    answer: "Mutton"
  },
  {
    question: "Where does he stay?",
    answer: "Kurla"
  },
  {
    question: "Does he loves driving? (yes/no)",
    answer: "Yes"
  },
  {
    question: "What is his favourite colour?",
    answer: "Black"
  },
  {
    question: "What is his dream riding destination?",
    answer: "NorthEast"
  }

];

function gameon() {
  for (var i = 0; i < questions.length; i++) {
    var que = questions[i];
    play(que.question, que.answer);
  }
}

function points() {
  console.log("YAY!!! Your Score is: " + score);
  console.log("Ping me and I'll a keep note of it")
}

welcome();
gameon();
points();




