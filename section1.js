(function() {
  const numberInput = document.getElementById("input1");
  const answerText = document.getElementById("answer1");

  numberInput.addEventListener('input', function(e) {
    answerText.innerHTML = `Hi ${e.target.value}, Welcome to this page`
  })
})();
