//Caeser Cipher
//Accepted Plain Text Characters: Letters
//Accepted Encrypted Text Characters: Letters
export function caesarCipher(text, mode) {
  //Variable to verify input from user is in letters
  let letterTest = /^[a-zA-Z ]+$/
  //----------------Encryption mode----------------
  //For encrypted mode, we just shift each letter down by 3
  if (mode == "encrypt") {
    //Verify that the user has only entered letters
    if (letterTest.test(text)) {
      //Loop through each letter in the string
      let translatedText = text.split("").map((letter) => {
        //Start by declaring shiftedLetter in one place
        let shiftedLetter = "";
        //If the letter is a space we can leave it alone
        if (letter == " ") {
          shiftedLetter = " ";
        }
        else {
          //For each letter in the string, we shift the letter down by 3
          shiftedLetter = String.fromCharCode(letter.charCodeAt(0) - 3);

          //Since fromCharCode uses ascii, sometimes we'll get special characters instead of letters
          //If this is the case, just shift that special character by 26 to get the correct letter
          if (!letterTest.test(shiftedLetter)) {
            shiftedLetter = String.fromCharCode(shiftedLetter.charCodeAt(0) + 26);
          }
        }
        return shiftedLetter;
      })
      //Return translated result
      return translatedText.join("");
    }
    //If the user enters characters other than letters, let them know
    else {
      return "Error: Caesar Cipher only accepts letters for encryption";
    }
  } //End of encryption mode

  //----------------Decryption mode----------------
  //For decrypted mode, we just shift each character down by 3
  else if (mode == "decrypt") {
    //Verify that the user has only entered letters
    if (letterTest.test(text)) {
      //Declare shiftedLetter in one place
      let shiftedLetter = "";
      //Loop through each letter in the string
      let translatedText = text.split("").map((letter) => {
        //If the letter is a space we can leave it alone
        if (letter == " ") {
          shiftedLetter = " ";
        }
        else {
          //For each letter in the string, we shift the letter up by 3
          shiftedLetter = String.fromCharCode(letter.charCodeAt(0) + 3);

          //Since fromCharCode uses ascii, sometimes we'll get special characters instead of letters
          //If this is the case, just shift that special character by 26 to get the correct letter
          if (!letterTest.test(shiftedLetter)) {
            shiftedLetter = String.fromCharCode(shiftedLetter.charCodeAt(0) - 26);
          }
        }
        return shiftedLetter;
      })
      //Return translated result
      return translatedText.join("");
    }
    //If the user enters characters other than letters, let them know
    else {
      return "Error: Caesar Cipher only accepts letters for decryption";
    }
  } //End of decryption mode
};