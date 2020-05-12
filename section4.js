
    (function() {
      const number1 = document.getElementById("input41");
      const number2 = document.getElementById("input42");
      const answerText = document.getElementById("answer4");

      number2.addEventListener('input', function(e) {
        answerText.innerHTML = getSum(parseInt(number1.value) ,parseInt(e.target.value));
      })
    
      function getSum(number1 , number2) {
        let sum=0;
        let number=0;
        if (number2<number1) { number=number1; number1=number2; number2=number;}
        for (let index = number1; index <= number2 ; index++) {
           sum +=index ;    
        }
        return 'Sum between ' + number1 + ' and ' + number2 + ' is : ' + sum
      }
    })();

  /*
let number1,number2;

do {
number1=parseInt(prompt("please enter the first number :"));
} while (isNaN(number1))

do {
   number2=parseInt(prompt("please enter the second number :"));
   }
  while (isNaN(number2))



let sum=0;
let number=0;
if (number2<number1) { number=number1; number1=number2; number2=number;}
for (let index = number1; index <= number2 ; index++) {
   sum +=index ;    
}

document.getElementById("sum1").innerHTML='The sum of the digits between '+number1+ ' and '+ number2 +' is: '+ sum;*/
