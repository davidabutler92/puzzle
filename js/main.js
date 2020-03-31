//User Interface 
$(document).ready(function() {
  $("#puzzle").submit(function(event) {
    event.preventDefault();

    var inputSentence = $("input#sentence").val();
    var userInputArr = inputSentence.split("");
    // console.log("userInputArr: ", userInputArr)
    var vowel = ["a", "e", "i", "o", "u"];
    var outPutArr = [];

    for(var i= 0; i < userInputArr.length; i++) {
      for(var j=0; j < vowel.length; j++) {
        // console.log("inputSentence[i]: ", inputSentence[i])
        if(inputSentence[i] === vowel[j]) {
          outPutArr.push("-");     
        } else {
          outPutArr.push(userInputArr[i]);
        }
      }
    }


    // var fruits = ["Banana", "Orange", "Apple", "Mango"];
    // var energy = fruits.join("");





      // outPutArr.append
      // var newOutput = outPutArr.join("");
      // document.write(newOutput);
      console.log(outPutArr);
      //  console.log("outPutArr: ", outPutArr);
               
  });
});

// var userInput = "12344445";
// var userInputArr = userInput.split("")
// var nums = [4,5,6];
// ouputArr = [];

// for(var i=0; i < userInputArr.length; i++){
//   for(var j=0; i < nums.length){
//     if(userInput[i] === nums[j]){
//       // do something
//     } else {
      // do something else
//     }
//   }
// }


// i would start by changing this line:
//  if (inputSentence === vowel) {
// to this:
//  if (vowel.includes(inputSentence[i])) {
// this is a good resource as well: https://www.w3schools.com/jsref/jsref_includes_array.asp
// basically you need to tell it to look through the array of vowels.
// if you get stuck still, pop a question into the question channel 





    
