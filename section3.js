
    (function() {
        const numberInput = document.getElementById("input3");
        const answerText = document.getElementById("answer3");
      
        numberInput.addEventListener('input', function(e) {
          answerText.innerHTML = ageResponse(parseInt(e.target.value));
        })
      
        function ageResponse(age) {
            if (age>200){ return 'Input is invalid'}
            if(isNaN(age)) return 'waiting for inputing '
            else{
                if (age <=20 && age>=0) {
                    return 'You need to study hard';}
                    else if (age<=30 && age >20){ 
                    return 'Study more';}
                    else if (age<=40 && age>30) {return 'Make a lot of money';} 
                    else if (age<=50 && age>40) {return 'Be successful';} 
                    else {return 'Travel a lot'}        
                }
        }
      })();
  /*
(function() {
    const numberInput = document.getElementById("input3");
    const answerText = document.getElementById("answer3");
    
    numberInput.addEventListener('input', function(e) {
      answerText.innerHTML = agecomment();
    })
document.getElementById("input3").answerText.innerHTML='jksdhefjg'
function agecomment(age){
    let response;
if (age>200){ response='Input is invalid'}
else{
    if (age <=20) {
        response='You need to study hard';}
        else if (age<=30){ 
        response='Study more';}
        else if (age<=40) {response='Make a lot of money';} 
        else if (age<=50) {response='Be successful';} 
        else {response='Travel a lot'}        
    }
    return response;
}
*/