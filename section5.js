const number5Input = document.getElementById("input5");
const answer5Text = document.getElementById("answer5");

number5Input.addEventListener('input', function(e) {
  answer5Text.innerHTML = isPrime(parseInt(e.target.value)) ? 'It is a prime number' : 'It is not a prime number';
})

function isPrime(numInput) {
  if (numInput === 1) return false;
  if (numInput === 2) return true;
  for (let i = 2; i < numInput; i++) {
    if (numInput % i === 0) return false;
  }
  return true;
}