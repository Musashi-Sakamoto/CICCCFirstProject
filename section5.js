(function() {
  const numberInput = document.getElementById("input5");
  const answerText = document.getElementById("answer5");

  numberInput.addEventListener('input', function(e) {
    answerText.innerHTML = isPrime(parseInt(e.target.value));
  })
let prime='It is a prime number';
let notPrime='It is not a prime number';
  function isPrime(numInput) {
    if (numInput <0) return'it is invalid number';
    if (numInput === 1) return notPrime;
    if (numInput === 2) return prime;
    for (let i = 2; i < numInput; i++) {
      if (numInput % i === 0) return notPrime;
    }
    return prime;
  }
})();
