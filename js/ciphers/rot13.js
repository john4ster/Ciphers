//ROT13 Cipher
//Accepted Plain Text Characters: Letters
//Accepted Encrypted Text Characters: Letters
export function rot13(text) {
  //Variable to verify user input is letters
  let letterTest = /^[a-zA-Z ]+$/
  //Declare lists for upper and lowercase alphabet
  let upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P",
                 "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  let lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
                 "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  //----------------Encryption & Decryption Mode----------------
  //For encryption mode, we add 13 to the letter's index, and use that new index to get the new letter
  //If the new index ends up being over 25, we just subtract it from 25 to get the new index
  //For decryption mode, the same algorithm applies
  //Make sure user has only entered letters
  if (letterTest.test(text)) {
    //Declare shiftedLetter, this will be overwritten
    let shiftedLetter = "";
    //Loop through each letter in the string
    let translatedText = text.split("").map((letter) => {
      //Leave spaces alone
      if (letter == " ") {
        shiftedLetter = "";
      }
      else {
        //Check whether letter is upper or lowercase
        //Uppercase
        if (letter == letter.toUpperCase()) {
          //Get the letter's index
          let letterNum = upperCase.indexOf(letter);
          //Rotate by 13 letters to get the new letter's index
          let newLetterNum = letterNum + 13;
          //If the new letter index is greater than 25, subtract it from 25 for the new index
          if (newLetterNum >= 26) {
            newLetterNum = newLetterNum - 26;
          } 
          shiftedLetter = upperCase[newLetterNum];
        }
        //Lowercase
        else {
          //Get the letter's index
          let letterNum = lowerCase.indexOf(letter);
          //Rotate by 13 letters to get the new letter's index
          let newLetterNum = letterNum + 13;
          //If the new letter index is greater than 25, subtract it from 25 for the new index
          if (newLetterNum >= 26) {
            newLetterNum = newLetterNum - 26;
            console.log(newLetterNum)
          } 
          shiftedLetter = lowerCase[newLetterNum];
        }
      }
      return shiftedLetter;
    });
    return translatedText.join("");
  }
  else {
    return "Error: ROT13 only accepts letters for encryption";
  }
};