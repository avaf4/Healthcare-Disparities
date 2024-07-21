/* .js files add interaction to your website */

var factList = [
  "1/3 of U.S. adults go without recommended healthcare due to costs.",
  "41% of low-income U.S. adults have a chronic illness as opposed to only 25% of other adults in the U.S.",
  "About half of U.S. adults struggle to access healthcare without going to an emergency facility.",
  "Only 39 of the 51 states (including D.C.) have expanded Medicaid access."];


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