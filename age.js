(function() {
  const numberInput = document.getElementById("input3");
  const answerText = document.getElementById("answer3");

  numberInput.addEventListener('input', function(e) {
    const age = numberInput.value;
    let response;
    if (age <=20) {
    response='You need to study hard';}
    else if (age<=30){ 
    response='Study more';}
    else if (age<=40) {response='Make a lot of money';} 
    else if (age<=50) {response='Be successful';} 
    else response='Travel a lot'
    
    answerText.innerHTML=response
  })
})();