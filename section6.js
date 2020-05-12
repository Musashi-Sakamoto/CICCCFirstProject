(function() {
  const numberInput = document.getElementById("input6");
  const answerText = document.getElementById("answer6");
  
  numberInput.addEventListener('input', function(e) {
    answerText.innerHTML = fibonacciNumbers(parseInt(e.target.value));
  })
  
  function fibonacciNumbers(idx) {
    let pre = 1;
    let cur = 1;
    const returnedArray = [];
    for (let i = 0; i < idx; i++) {
      if (i === 0 || i === 1) {
        returnedArray.push(1);
      } else {
        const current = pre + cur;
        returnedArray.push(current);
        pre = cur;
        cur = current;
      }
    }
    return returnedArray;
  }
})();