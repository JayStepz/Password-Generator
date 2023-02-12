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

// For establishing acceptable password character length. Also easier to come back to change in the future, should I wish or need to do so.
const minLength = 8;
const maxLength = 128;

// Data sets for password creation
const lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz" 
const uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" 
const numericCharacters = "1234567890" 
const specialCharacters = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~" //Opted to not use double quotes and space. I'll wind up changing this again later for personal use.

// Password generation begins here
function generatePassword() {
  // Number() lets the prompt recognize that a number/integer was put in
  let lengthInput = Number(window.prompt("Please input the desired password length of 8 to 128 characters."));
  // if statement is checking for any or all of those inputs to be true (but a bad true). Input number < 8, number > 128, or not a number at all is rejected with an alert.
  if (lengthInput < minLength || lengthInput > maxLength || typeof(lengthInput) !== "number") {
    window.alert("Your value, " + lengthInput + ", is invalid. Please enter a number from " + minLength + " to " + maxLength + ".");
    return "Please try again.";
  }
// Something neat my programming buddy showed me: do/while loop. Will run through all variables in order (do). Checks for any variable to be different from the rest or for all
// to be the same (while). While will break the Do loop when status is met. The status requires at least one out of four to be false (true in do, turned false in while).
// Later note:
// Read up on the do while loop. The reason for making a true outcome false is to be able to end the loop. Otherwise, the true outcome(s) would result in an infinite loop.
  var i = 0;
  do {
    if (i > 0) {
      window.confirm("Please select one or more character sets.");
    }
    // The folowwing 4 lines will produce either true or false
    var useLowercase = window.confirm("Would you like to use lowercase characters in your password?"); 
    var useUppercase = window.confirm("Would you like to use uppercase characters in your password?");
    var useNumeric = window.confirm("Would you like to use numbers in your password?");
    var useSpecial = window.confirm("Would you like to use special characters in your password?");
    i++;
    // True(s) become false to end the loop. If all falses (all subsequently becoming true), the loop cycles again.
  } while (!useLowercase && !useUppercase && !useNumeric && !useSpecial); 

 // True statements from the do loop will add their strings to prePass, my staging area for characters to be pulled for the password.
  var prePass = "";
    // Nothing fancy here. Four if statements for the do while loop true result(s).
    if (useLowercase) {
      prePass += lowercaseCharacters;
    }
    if (useUppercase) {
      prePass += uppercaseCharacters;
    }
    if (useNumeric) {
      prePass += numericCharacters;
    }
    if (useSpecial) {
      prePass += specialCharacters;
    }

    // Establishing a lenth variable because the amount of characters to pull from have possible outcomes from the loop.
    var n = prePass.length;
    
    // bird is the final landing for characters to be pulled from for the password.
    // Why "bird"? Because bird is the word!
    var bird = "";
    
    // for loop that runs to length input from prompt, 8-128 characters.
    // Math.random() grabs from a random position in a string. Math.random doesn't always grab a whole number, so...
    // Math.floor() will round that number down to the nearest whole number.
    // charAt() brings the character at that position to bird.
    // This will loop until lengthInput has been satisfied.
    for (var i = 0; i < lengthInput; i++) {
    bird += prePass.charAt(Math.floor(Math.random() * n));
    };
    return bird;
}