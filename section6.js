const number6Input = document.getElementById("input6");
const answer6Text = document.getElementById("answer6");

number6Input.addEventListener('input', function(e) {
  answer6Text.innerHTML = fibonacciNums(parseInt(e.target.value));
})

function fibonacciNums(idx) {
  const returnedArray = [];
  for (let i = 1; i < idx; i++) {
    returnedArray.push(fib(i));
  }
  return returnedArray;
}

function fib(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fib(n - 1) + fib(n - 2);
};