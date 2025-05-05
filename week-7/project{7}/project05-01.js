"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-01

      Project to present an online quiz with a countdown clock
      Author: Ben Hilarides
      Date:   5.4.25

      Filename: project05-01.js
*/

// Constants to set the time given for the quiz in seconds
// and the correct answers to each quiz question
const quizTime = 20;
const correctAnswers = ["10", "4", "-6", "5", "-7"];

// Declare variable timeID
let timeID;

// Add the onclick event handler to the startQuiz object
document.getElementById("startQuiz").onclick = function() {
  document.getElementById("overlay").className = "showquiz";
  timeID = setInterval(countown, 1000);
}

// Elements in the quiz page
let startQuiz = document.getElementById("startquiz");
let quizClock = document.getElementById("quizclock");
let overlay = document.getElementById("overlay");

// Initialize the quiz time
quizClock.value = quizTime;
let timeLeft = quizTime;

// Declare questionList variable
let questionList = document.querySelectorAll("div#quiz input");

// Countdown function to update the quiz clock
function countdown () {
  timeLeft--;

  // Update the quiz clock display
  document.getElementById("quizClock").textContent = timeLeft;

  if (timeLeft === 0) {
    clearInterval(timeID);
    let totalCorrect = checkAnswers();
    if (totalCorrect === correctAnswers.length) {
      alert("Congratulations! You answered all questions correctly.");
    } else {
      let incorrectCount = correctAnswers.length - totalCorrect;
      alert("You have" + incorrectCount + "incorrect answers out of" + correctAnswers.length + "questions.");
      timeLeft = quizTime;
      document.getElementById("quizClock").value = timeLeft;
      document.getElementById("overlay").className = "hidequiz";
    }
  } else {
    timeLeft--;
    document.getElementById("quizClock").value = timeLeft;
  }
}

// Declare the ID for timed commands
// and the node list for questions





















/*------------- Function to check the student answers ----------------*/
function checkAnswers() {
   let correctCount = 0;

   for (let i = 0; i < questionList.length; i++) {
      if (questionList[i].value === correctAnswers[i]) {
         correctCount++;
         questionList[i].className = "";
      } else {
         questionList[i].className = "wronganswer";
      }
   }
   return correctCount;
}

