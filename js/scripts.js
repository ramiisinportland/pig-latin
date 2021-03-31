function pigLatin(userText) {

  const userTextArray = userText.split("");
  const vowelArray = ["A", "E", "I", "O", "U"];

  for(let i =0; i < vowelArray.length; i++) {
    if (vowelArray[i].toLowerCase() === userTextArray[0].toLowerCase()) { // This is how cases do not matter
      console.log("Found a vowel!");
      return userText + "way";
    };
  }
  let firstLetter = userTextArray.shift();
  userTextArray.push(firstLetter + "ay");
  return userTextArray.join("");
}

$(document).ready(function() {
  $("form#form").submit(function(event) {
    const userInputText = $("#userInput").val();
    // alert(pigLatin(userInputText));
    $(".result").text(pigLatin(userInputText));
    console.log(pigLatin(userInputText))
    event.preventDefault();
  })
})