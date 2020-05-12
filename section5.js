(function() {
  const numberInput = document.getElementById("input5");
  const answerText = document.getElementById("answer5");

  numberInput.addEventListener('input', function(e) {
    answerText.innerHTML = isPrime(parseInt(e.target.value)) ? 'It is a prime number' : 'It is not a prime number';
  })

  function isPrime(numInput) {
    if (numInput === 1) return false;
    if (numInput === 2) return true;
    for (let i = 2; i < numInput; i++) {
      if (numInput % i === 0) return false;
    }
    return true;
  }
})();
