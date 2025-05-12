"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-03

      Script to complete a form containing billing and shipping address information
      Author: Ben Hilarides
      Date:   5.11.25

      Filename: project06-03.js
*/

let useShip = document.getElementById("useShip");

document.getElementById("useShip").addEventListener("click", copyShippingToBilling)

function copyShippingToBilling() {
  if (useShip.checked) {
    document.getElementById("firstnameBill").value = document.getElementById("firstnameShip").value;
    document.getElementById("lastnameBill").value = document.getElementById("lastnameShip").value;
    document.getElementById("adress1Bill").value = document.getElementById("adress1Ship").value;
    document.getElementById("adress2Bill").value = document.getElementById("adress2Ship").value;
    document.getElementById("cityBill").value = document.getElementById("cityShip").value;
    document.getElementById("countryBill").value = document.getElementById("countryShip").value;
    document.getElementById("codeBill").value = document.getElementById("codeShip").value;
    document.getElementById("stateBill").selectedIndex = document.getElementById("stateShip").selectedIndex;
  }
}

let formElements = document.querySelectorAll("input[type='text']");
let fieldCount = formElements.length;
let errorBox = document.getElementById("errorBox");

for (let i = 0; i < fieldCount; i++) {
  formElements[i].addEventListener("invalid", showValidationError);
}

function showValidationError(evt) {
  evt.preventDefault();
  errorBox.textContent = "Complete all highlighted Fields";
}