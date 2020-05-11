let number1=parseInt(prompt("please enter the first number :"));
let number2=parseInt(prompt("please enter the second number :"));

if (isNaN(number1) || isNaN(number2)) {
    ///document.getElementById("sum1").innerHTML= "Input not valid";
    document.alert("Input not valid");
  }
let sum=0;
let number=0;
if (number2<number1) { number=number1; number1=number2; number2=number;}
for (let index = number1; index <= number2 ; index++) {
   sum +=index ;    
}

document.getElementById("sum1").innerHTML=sum;
console.log(sum);