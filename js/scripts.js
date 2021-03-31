function pigLatin(userText) {

  const userTextArray = userText.split("");
  const vowelArray = ["A", "E", "I", "O", "U"];

  for(let i =0; i < vowelArray.length; i++) {
    if (vowelArray[i].toLowerCase() === userTextArray[0].toLowerCase()) { // This is how cases do not matter
      console.log("Found a vowel!");
      return userText + "way";
    };
  }
  console.log("Found a consonant!");
}





//take input string from user (#input)
//split the string into letters (inputArray[])
//grab the first letter inputArray[0]
//compare that input against vowelArray (foreach vowell in vowelArray === inputArray[0])
