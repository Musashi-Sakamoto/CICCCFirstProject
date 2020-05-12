const number6Input = document.getElementById("input6");
const answer6Text = document.getElementById("answer6");

number6Input.addEventListener('input', function(e) {
  answer6Text.innerHTML = fibonacciNums(parseInt(e.target.value));
})

function fibonacciNums(idx) {
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