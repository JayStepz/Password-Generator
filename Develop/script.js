// Assignment code here

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

//For establishing acceptable password character length. Also easier to come back to change in the future, should I wish or need to do so.
const minLength = 8;
const maxLength = 128;

//Data sets for password creation
const lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz" 
const uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" 
const numericCharacters = "1234567890" 
const specialCharacters = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~" 

//Password generation begins here
function generatePassword() {
  //Number() lets the prompt recognize that a number/integer was put in
  let lengthInput = Number(window.prompt("Please input the desired password length of 8 to 128 characters."));
  //if statement is checking for any or all of those inputs to be true (but a bad true). Input number < 8, number > 128, or not a number at all is rejected with an alert.
  if (lengthInput <= minLength || lengthInput >= maxLength || typeof(lengthInput) !== "number") {
    window.alert("Your value, " + lengthInput + ", is invalid. Please enter a number from " + minLength + " to " + maxLength + ".");
    return "Please try again.";
  }
//Something neat my programming buddy showed me: do/while loop. Will run through all variables in order (do). Checks for any variable to be different from the rest or for all
//to be the same (while). While will break the Do loop when status is met.
  var i = 0;
  do {
    if (i > 0) {
      window.confirm("Please select one or more character sets.");
    }
    var useLowercase = window.confirm("Would you like to use lowercase characters in your password?");
    var useUppercase = window.confirm("Would you like to use uppercase characters in your password?");
    var useNumeric = window.confirm("Would you like to use numbers in your password?");
    var useSpecial = window.confirm("Would you like to use special characters in your password?");
    i++;
  } while (!useLowercase && !useUppercase && !useNumeric && !useSpecial);

// TODO: Look up string methods, array methods, math.random() to finish password creation 
}