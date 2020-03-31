$(document).ready(function() {

  $("#puzzle").submit(function(event) {
    event.preventDefault();
    var inputSentence = $("input#sentence").val();
    
    var newSentence = [];
    var vowel = ["a", "e", "i", "o", "u"];
    for (i=0; i = inputSentence.length; i +=1)
      if (inputSentence === vowel) {
        newSentence = inputSentence.replace(vowel[i], "-");
        

      }

    console.log(newSentence);
    

  });
});








    
