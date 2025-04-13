/*    JavaScript 7th Edition
     Chapter 3
     Chapter case

     Tipton Turbines
     Program to display games results in a web table
     Author: Ben Hilarides
     Date:   3.13.25

     Filename: js03.js
 */

// Days of the week
let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

window.addEventListener("load", addWeekDays);

// Function to write weekday names into the calendar
function addWeekDays() {
  let i = 0; // initial counter value

  // reference the collection of heading cells
  let headingCells = document.getElementByTagName("th");

  // write each of the seven days into a heading cell
  while (i < 7) {
    headingCells[i].innerHTML = weekDays[i];

    //increase the counter by 1
    i++;
  }
}