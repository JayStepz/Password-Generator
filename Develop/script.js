// Assignment code here
var writePassword = function() {
  //Asking for password length
  var userInput = window.prompt("Please input the desired password length of 8 to 128 characters.");
  
  //Click Cancel, end function
  if (!userInput) {
    return;
  }
}
//lengthCharacters.prompt("Please choose a password length of 8 to 128 characters.")
  //Mandatory response, only valid if a number 8 to 128 is selected.
//Generates array for character length 8-128
var lengthCharacters = [];
for (var i = 8; i <= 128; i++) {
  lengthCharacters.push(i);
}
console.log(lengthCharacters);


var lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz" //yes or no
var uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" //yes or no
var numericCharacters = "1234567890" //yes or no
var specialCharacters = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~" //yes or no //Opting to excludes spaces and quotations
//Each of the above need a prompt and a response. Must have one yes, minimum.
//Generated password must display in an alert or written in the box.
//Use math.floor and math.random from the mini-project?


//lowercaseCharacters.prompt("Would you like lowercase characters in your password?")
//uppercaseCharacters.prompt("Would you like uppercase characters in your password?")
//numericCharacters.prompt("Would you like numbers in your password?")
//specialCharacters.prompt("Would you like special characters in your password?")


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
