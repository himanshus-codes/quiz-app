import { quizData } from "./data.js";

let qsn = document.querySelector("p");
let submit = document.querySelector("#subbtn");

let optA = document.querySelector("#a");
let optB = document.querySelector("#b");
let optC = document.querySelector("#c");
let optD = document.querySelector("#d");
let options = [optA, optB, optC, optD];

let counter = 0;
let loadQuiz = false;

// 1️⃣ Before start
function beforeStart() {
  qsn.innerText = "Click 'Start' to begin the Quiz";
  submit.innerText = "Start";
  options.forEach(opt => {
    opt.style.listStyleType = "none";
    opt.innerText = "";
  });
}

// 2️⃣ Load one question
function loadQuestion() {
  let current = quizData[counter];
  qsn.innerText = current.question;
  optA.innerText = current.a;
  optB.innerText = current.b;
  optC.innerText = current.c;
  optD.innerText = current.d;
  submit.innerText = counter === quizData.length - 1 ? "Finish" : "Next";
}

// 3️⃣ One listener only
submit.addEventListener("click", () => {
  if (!loadQuiz) {
    loadQuiz = true;
    loadQuestion();
  } else {
    if (counter < quizData.length - 1) {
      counter++;
      loadQuestion();
    } else {
      qsn.innerText = "Quiz Over 🎉";
      options.forEach(opt => (opt.innerText = ""));
      submit.disabled = true; // end quiz
    }
  }
});

// Init
beforeStart();
