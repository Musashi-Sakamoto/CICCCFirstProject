(function() {
    const numberInputFirst = document.getElementById("num2first");
    const numberInputSecond = document.getElementById("num2second");
    const plusButton = document.getElementById("button2plus");
    const minusButton = document.getElementById("button2minus");
    const timesButton = document.getElementById("button2times");
    const divideButton = document.getElementById("button2divide");
    const answerText = document.getElementById("answer2");

    plusButton.addEventListener('click', function() {
        const value1 = parseInt(numberInputFirst.value);
        const value2 = parseInt(numberInputSecond.value);
        answerText.innerHTML = value1 + value2;
    });

    minusButton.addEventListener('click', function() {
        const value1 = parseInt(numberInputFirst.value);
        const value2 = parseInt(numberInputSecond.value);
        answerText.innerHTML = value1 - value2;
    });

    timesButton.addEventListener('click', function() {
        const value1 = parseInt(numberInputFirst.value);
        const value2 = parseInt(numberInputSecond.value);
        answerText.innerHTML = value1 * value2;
    });

    divideButton.addEventListener('click', function() {
        const value1 = parseInt(numberInputFirst.value);
        const value2 = parseInt(numberInputSecond.value);
        answerText.innerHTML = value2 !== 0 ? value1 / value2 : 'divided should no be 0';
    });
  
})();
