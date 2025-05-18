"use strict";
/*    JavaScript 7th Edition
      Chapter 7
      Project 07-01

      Project to validate a form used for setting up a new account
      Author: Ben Hilarides
      Date:   3.18.25

      Filename: project07-01.js
*/

let signupForm = document.getElementById("signup");

signupForm.addEventListener("submit", function(e) {
   e.preventDefault();
   let pwd = document.getElementById("pwd").value;
   let feedback = document.getElementById("feedback");
   let regex1 = /[A-Z]/;
   let regex2 = /\d/;
   let regex3 = /[!\$#%]/;
   if (pwd.length < 8) {
      feedback.innerHTML = "Password must be at least 8 characters long.";
   }
    else if (!regex1.test(pwd)) {
        feedback.innerHTML = "Password must include an uppercase letter.";
    }
    else if (!regex2.test(pwd)) {
        feedback.innerHTML = "Password must include a number.";
    }
    else if (!regex3.test(pwd)) {
        feedback.innerHTML = "Password must include one of the following: !$#%.";
    }
    else {
        feedback.submit();
    }
}
);