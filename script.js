// Assignment Code
var generateBtn = document.querySelector("#generate");

// list of numbers,lowercase letters,uppercase letters,symbols
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
var uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];
var symbols = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

var passwordLength;
var confirmNumber;
var confirmSymbol;
var confirmUppercase;
var confirmLowercase;
var securePassword = "";

function generatePassword() {
  //prompt user for password length
  passwordLength = parseInt(prompt("How many characters would you like in your password? Choose between 8 and 128"));

  //if user doesnt provide valid number
  if (!passwordLength || passwordLength < 8 || passwordLength > 128) {
    alert("You need to enter a value between 8 an 128");
    return;
  } else {
    //confirm if user wants number,symbol, lowercase or uppercase letter
    confirmNumber = confirm("Will your password contain NUMBERS?");
    confirmSymbol = confirm("Will your password  contain SYMBOLS?");
    confirmUppercase = confirm("Will your password  contain UPPERCASE LETTERS?");
    confirmLowercase = confirm("Will your password  contain LOWERCASE LETTERS?");
  }

  while (securePassword.length < passwordLength) {
    // if no criteria is selected
    if (!confirmNumber && !confirmSymbol && !confirmUppercase && !confirmLowercase) {
      alert("You must choose at least one criteria")
      return;
    }
    if (confirmNumber) {//if user confirmNumber randomly picked one and added to the securePassword
      var randomNumberIndex = Math.floor(Math.random() * numbers.length);
      var randomNumber = numbers[randomNumberIndex];
      securePassword = securePassword + randomNumber;
    }
    if (confirmSymbol) {//if user confirmSymbol randomly picked one and added to the securePassword
      var randomSymbolIndex = Math.floor(Math.random() * symbols.length);
      var randomSymbol = symbols[randomSymbolIndex];
      securePassword = securePassword + randomSymbol;
    }
    if (confirmUppercase) {//if user confirmUpperCase randomly picked one and added to the securePassword
      var randomUppercaseIndex = Math.floor(Math.random() * uppercaseLetters.length);
      var randomUppercase = uppercaseLetters[randomUppercaseIndex];
      securePassword = securePassword + randomUppercase;
    }
    if (confirmLowercase) {//if user confirmLowerCase randomly picked one and added to the securePassword
      var randomLowercaseIndex = Math.floor(Math.random() * lowercaseLetters.length);
      var randomLowercase = lowercaseLetters[randomLowercaseIndex];
      securePassword = securePassword + randomLowercase;
    }
  }
  return securePassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



















