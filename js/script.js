//Import cipher functions from external files
import { caesarCipher } from "./ciphers/caeserCipher.js";
import { rot13 } from "./ciphers/rot13.js";
import { affineCipher } from "./ciphers/affineCipher.js";

let plainTextBox = document.getElementById("plainTextBox");
let encryptedTextBox = document.getElementById("encryptedTextBox");
let encryptButton = document.getElementById("encryptButton");
let decryptButton = document.getElementById("decryptButton");
let clearButton = document.getElementById("clearButton");

clearButton.addEventListener("click", event => {
  plainTextBox.value = "";
  encryptedTextBox.value = "";
  event.preventDefault();
})

//Determine whether the user clicked encrypt or decrypt
encryptButton.addEventListener("click", event => {
  let plainText = plainTextBox.value;
  let selectedCipher = document.getElementById("cipherDropdown").value;
  //Determine which cipher algorithm to use and populate the encrypted text box with the encrypted result
  if (selectedCipher == "Caesar") {
    encryptedTextBox.value = caesarCipher(plainText, "encrypt");
  }
  else if (selectedCipher == "Rot13") {
    //Rot13 works the same way for both encryption and decryption
    encryptedTextBox.value = rot13(plainText);
  }
  else if (selectedCipher == "Affine") {
    encryptedTextBox.value = affineCipher(plainText, "encrypt");
  }
  event.preventDefault();
});

decryptButton.addEventListener("click", event => {
  let encryptedText = encryptedTextBox.value;
  let selectedCipher = document.getElementById("cipherDropdown").value;
  //Determine which cipher algorithm to use and populate the plain text box with the decrypted result
  if (selectedCipher == "Caesar") {
    plainTextBox.value = caesarCipher(encryptedText, "decrypt")
  }
  else if (selectedCipher == "Rot13") {
    //Rot13 works the same way for both encryption and decryption
    plainTextBox.value = rot13(encryptedText)
  }
  else if (selectedCipher == "Affine") {
    plainTextBox.value = affineCipher(encryptedText, "decrypt")
  }
  event.preventDefault();
});