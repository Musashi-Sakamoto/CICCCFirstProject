
(function() {
  const numberInput1 = document.getElementById("input4first");
  const numberInput2 = document.getElementById("input4second");
  const button = document.getElementById("button4");
  const answerText = document.getElementById("answer4");

  button.addEventListener('click', function(e) {
    const number1 = parseInt(numberInput1.value);
    const number2 = parseInt(numberInput2.value);
    console.log(number1, number2);

    if (isNaN(number1) || isNaN(number2)) {
      ///document.getElementById("sum1").innerHTML= "Input not valid";
      alert("Input not valid");
    }
    let sum=0;
    let number=0;
    if (number2<number1) { number=number1; number1=number2; number2=number;}
    for (let index = number1; index <= number2 ; index++) {
      console.log('index: ', index);
      sum +=index ;    
    }

    answerText.innerHTML=sum;
  });
})();
