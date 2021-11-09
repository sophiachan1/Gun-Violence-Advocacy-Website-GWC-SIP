/* .js files add interaction to your website */

/* fact generator */
var factList = [
  "There are about 316 people who get shot a day",/*0*/
  "About 115,000 people get shot a year",/*1*/
  "In the US, the rate of people getting killed by guns compared to other places is 25%",/*2*/
  "A women is shot by a partner or ex-partner every 16 hours",/*3*/
  "Only 5% of 90% do the guns used in a crime is purchased illegally",/*4*/
  "Access to a gun at home increases the risk of suicide by 300%"]; /*5*/

var fact = document.getElementById("fact");
var myButton = document.getElementById("myButton");
var count = 0;

myButton.addEventListener("click", displayFact);

function displayFact(){
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length){
    count = 0; 
  }
}
