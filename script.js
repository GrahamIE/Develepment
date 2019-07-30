// Assume Monday 7th January 2019 - starting date to be overwritten 
var myYear = 2019;
var myMonth = 1;
var myDate = 7;
var myDay = 1;
var myDebug = 0; // Switch off console.log() Debug
var myTrace = 1; // switch on function trace call to the console.log()

var myMonths = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var mySpams = ["one"];

// need to use this to start at the correct month ... count across the boundary and give correct index to myMonths ... saves on testing :) 
var myNumberMonths = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

var myDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

// Lets try query by class need period . to signify class name ... 
var myH2 = document.querySelector("h2");
var myDYear = document.querySelector(".Year");
var myDMonths = document.querySelectorAll(".Month");

var myDebugText = document.querySelector(".Debug");

function testFunction() {
  // Test function call
  if (myTrace) {
    console.log("Hello World-Test function");
  }

  // Test Data
  if (myDebug) {
    console.log(myYear);
    console.log(myMonths);
    console.log(myDays);
    console.log(myDYear);
    console.log(myDMonths);
    console.log(myDMonths[0]);
    console.log(myMonths[0]);
  }

  let myDate = new Date()
  //
  // Now test for actual day, date, month and year
  // myDay, myDate,, myMonth, myYear
  //
  getDayMonthYear(myDate);

  // Start at current month
  // Change to order months 
  orderMonths();

  // Test year change 
  myH2.innerHTML = "Year:" + myYear;

  // Debug Text 
  myDebugText.innerHTML = myDate;
}

// New Function getDayMonthYear
//
// Using globals at the moment ... need to define a return variable myDateData == > { myDay, myMonth, myDate, myYear} to use local data
// 
function getDayMonthYear(myDate) {
  if (myTrace) {
    console.log("getDayMonthYear");
  }

  let myToday = myDate;
  // Returns 0-6 (0) assume 0 is Sunday
  myDay = myToday.getDay();
  // Returns 0-11 assume 0 is January 
  myMonth = myToday.getMonth();
  // My date - returns 1 -31 - need to test for leap year 
  myDate = myToday.getDate();
  // Returns number for YYYY
  myYear = myToday.getFullYear();

  if (myDebug) {

    console.log(myDay);
    console.log(myMonth);
    console.log(myDate);
    console.log(myYear);
  }
}
//
// New Function orderMonths() and set text in Calendar
//
function orderMonths() {

  if (myTrace) {
    console.log("orderMonths");
  }

  let mySpamID = "." + mySpams[0];

  console.log(mySpamID);

  let mySpamText = document.querySelector(mySpamID);
  mySpamText.innerHTML = "Test";

  console.log("Spam Text should read: 'Test'");
  console.log(mySpamID);
  console.log(mySpamText);

  let j = myMonth;
  for (i = 0; i < 12; i++) {

    // Test month change
    if (myDebug) {
      console.log(j);
    }
    myDMonths[i].innerHTML = myMonths[myNumberMonths[j]]; // Index across the year boundary if necessary


    j++;
  }

  mySpamText.innerHTML = "My Text goes here";

  console.log(mySpamID);
  console.log(mySpamText);


}

testFunction();
