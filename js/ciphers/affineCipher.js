//Affine Cipher
//Accepted Plain Text Characters: Letters
//Accepted Encrypted Text Characters: Letters
export function affineCipher(text, mode) {
  //Variables that will be used in the formulas
  let a = 5;
  let b = 8;
  let m = 26;
  //Arrays for upper and lowercase, each letter's index will be its corresponding number
  let upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P",
                 "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  let lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
                 "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  //Letter test that will be used for both encryption and decryption to verify input
  let letterTest = /^[a-zA-Z ]+$/
  //----------------Encryption mode----------------
  //For encryption mode, we convert each letter and convert it to a number equivalent, then perform a simple
  //math operation: (ax + b) mod m, on that number. We then convert that number back to it's letter equivalent
  //In this case, we'll use the values a = 5, b = 8, and m = 26. 
  //May add the ability for the user to change these values the future
  if (mode == "encrypt") {
    //Make sure user entered letters in plain text
    if (letterTest.test(text)) {
      //Declare shiftedLetter at the start
      let shiftedLetter = "";
      //Loop through each character in the string
      let translatedText = text.split("").map((letter) => {
        //Leave spaces
        if (letter == " ") {
          shiftedLetter = " ";
        }
        else {
          //Check which list we need to use (uppercase or lowercase)
          //Uppercase
          if (letter == letter.toUpperCase()) {
            //Convert the letter to corresponding number
            let letterNum = upperCase.indexOf(letter);
            //Use the formula to calculate the new number
            let calculatedNum = ((a * letterNum) + b) % m;
            //Use the calculated number to convert back to the new shifted letter
            shiftedLetter = upperCase[calculatedNum];
          }
          //Lowercase
          else {
            //Convert the letter to corresponding number
            let letterNum = lowerCase.indexOf(letter);
            //Use the formula to calculate the new number
            let calculatedNum = ((a * letterNum) + b) % m;
            //Use the calculated number to convert back to the new shifted letter
            shiftedLetter = lowerCase[calculatedNum];
          }
        };
        return shiftedLetter;
      });
      //Return final translated string
      return translatedText.join("");
    }
    //If the user enters characters other than letters, let them know
    else {
      return "Error: Affine Cipher only accepts letters for encryption";
    };
  } //End of encryption mode

  //----------------Decryption mode----------------
  //To decrypt, we just do the inverse of the encryption function with the shifted letter value
  //Inverse operation: inverse(a) * (x - b) mod m
  else if (mode == "decrypt") {
    //Make sure user entered letters
    if (letterTest.test(text)) {
      let shiftedLetter = "";
      //Loop through each character in the string
      let translatedText = text.split("").map((letter) => {
        //Leave spaces
        if (letter == " ") {
          shiftedLetter = " ";
        }
        else {
          //Check if letter is uppercase or lowercase
          //Uppercase
          if (letter == letter.toUpperCase()) {
            //Convert the letter to corresponding number
            let letterNum = upperCase.indexOf(letter);
            let calculatedNum = (m - a) * (letterNum - b) % m;
            //Use the calculated number to convert to the corresponding shifted letter 
            shiftedLetter = upperCase.at(calculatedNum);
          }
          //Lowercase
          else {
            //Convert the letter to corresponding number
            let letterNum = lowerCase.indexOf(letter);
            let calculatedNum = (m - a) * (letterNum - b) % m;
            //Use the calculated number to convert to the corresponding shifted letter
            shiftedLetter = lowerCase.at(calculatedNum);
          }
        };
        return shiftedLetter;
      });
      //Return final translated string
      return translatedText.join("");
    }
    //If the user enters characters other than letters, let them know
    else {
      return "Error: Affine Cipher only accepts letters for decryption";
    }
  } //End of decryption mode
};