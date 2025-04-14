/*    JavaScript 7th Edition
      Chapter 3
      Project 03-01

      Application to calculate total order cost
      Author: Ben Hilarides
      Date:   3.13.25

      Filename: project03-01.js
*/

// Declaring menuItems variables
let menuItems = document.getElementsByClassName("menuItem");

// Counter Variable, event listener
for (let i = 0; i < menuItem.length; i++) {
  menuItems[i].addEventListener("click", calcTotal);
}

//function for calculating total
function calcTotal() {
  let orderTotal = 0;
  let menuItems = document.getElementsByClassName("menuItem");

  for (let i = 0; i < menuItems.length; i++) {
    if (menuItems[i].checked) {
      orderTotal += Number(menuItems[i].value);
    }
  }
  document.getElementById("billTotal").innerHTML = formatCurrency(orderTotal);
}

 // Function to display a numeric value as a text string in the format $##.##
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }
