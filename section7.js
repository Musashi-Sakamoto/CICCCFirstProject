(function() {
    const textinput = document.getElementById("input7");
    const answerText = document.getElementById("answer7");
  
    textinput.addEventListener('input', function(e) {
      answerText.innerHTML = date_diff_indays(e.target.value);
    })
  
    var date_diff_indays = function(birthDate) {
        if (birthDate.length == 10) {
        dt1 = new Date(birthDate);
        dt2 = new Date.now();
        alert(typeof(dt2));
          return 'You have lived for ' +  Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) ) /(1000 * 60 * 60 * 24)) + ' Days';
        }
        else {return 'Input Invalid'}
        
        }
  })();