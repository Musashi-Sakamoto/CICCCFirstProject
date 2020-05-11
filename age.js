let age= prompt("please enter your age: ");
let response;
if (age <=20) {
response='You need to study hard';}
else if (age<=30){ 
response='Study more';}
else if (age<=40) {response='Make a lot of money';} 
else if (age<=50) {response='Be successful';} 
else response='Travel a lot'

document.getElementById("age").innerHTML=response