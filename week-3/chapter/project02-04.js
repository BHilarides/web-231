/*    JavaScript 9th Edition
      Chapter 2
      Project 02-04

      Application to calculate the cost of a restaurant order plus tax
      Author: Ben Hilarides
      Date:   3.6.25

      Filename: project02-04.js
 */

// declare global costs for the application
const CHICKEN_PRICE = 10.95; // price of chicken
const HALIBUT_PRICE = 13.95; // price of halibut
const BURGER_PRICE = 9.95;   // price of a burger
const SALMON_PRICE = 18.95;  // price of salmon
const SALAD_PRICE = 7.95;    // price of salad
const SALES_TAX = 0.07;      // sales tax rate (7%)

// Function to display a numeric value as a text string in the format $##.##
function formatCurrency(value) {
  return "$" + value.toFixed(2);
}

// event handlers
window.onload = function() {
  document.getElementById("chicken").addEventListener("click", calcTotal);
  document.getElementById("halibut").addEventListener("click", calcTotal);
  document.getElementById("burger").addEventListener("click", calcTotal);
  document.getElementById("salmon").addEventListener("click", calcTotal);
  document.getElementById("salad").addEventListener("click", calcTotal);
}

// estimate cost of the meal based on the selected items
function calcTotal() {
  let cost = 0; // initialize the total cost

  let buyChicken = document.getElementById("chicken").checked;
  let buyHalibut = document.getElementById("halibut").checked;
  let buyBurger = document.getElementById("burger").checked;
  let buySalmon = document.getElementById("salmon").checked;
  let buySalad = document.getElementById("salad").checked;

  // add the cost of chicken if purchased
  cost += buyChicken ? CHICKEN_PRICE : 0;
  // add the cost of halibut if purchased
  cost += buyHalibut ? HALIBUT_PRICE : 0;
  // add the cost of burger if purchased
  cost += buyBurger ? BURGER_PRICE : 0;
  // add the cost of salmon if purchased
  cost += buySalmon ? SALMON_PRICE : 0;
  // add the cost of salad if purchased
  cost += buySalad ? SALAD_PRICE : 0;
  // initialize sales tax based on the current cost
  tax = cost * SALES_TAX;
  // declare total cost value
  totalCost = cost + tax;

  // adding the food total
  document.getElementById("foodTotal").innerHTML = formatCurrency(cost);
  // adding food tax
  document.getElementById("foodTax").innerHTML = formatCurrency(tax);
  // adding the total cost to the display
  document.getElementById("totalBill").innerHTML = formatCurrency(totalCost);
}
