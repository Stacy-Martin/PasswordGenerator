// Required:
// *lowercase, uppercase, numeric and/or special characters
// *between 8 to 128 characters
// *in lines 20-25 on readme will be HTML
// after line 25 it will be in JavaScript
// Given a new password --> our application purpose, need button on doc
// use window.prompt
// then designate which criteria to use in the pw - this is another series of prompts, asking the user what they want
// what length?  store that 
// what characters?  store that too in a series of if statements


  // Assignment Code, grabbing "generate" from HTML
var generateBtn = document.querySelector("#generate");

var specialChars = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.',
];

var uppercase = [
"A", 
"B", 
"C", 
"D", 
"E", 
"F", 
"G", 
"H", 
"I", 
"J", 
"K", 
"L", 
"M", 
"N", 
"O", 
"P", 
"Q", 
"R", 
"S", 
"T", 
"U", 
"V", 
"W", 
"X", 
"Y", 
"Z",
];

var lowercase = [
"a", 
"b", 
"c", 
"d", 
"e", 
"f", 
"g", 
"h", 
"i", 
"j", 
"k", 
"l", 
"m", 
"n", 
"o", 
"p", 
"q", 
"r", 
"s", 
"t", 
"u", 
"v", 
"w", 
"x", 
"y", 
"z",
];

var numbers = [
'0',
'1',
'2',
'3',
'4',
'5',
'6',
'7',
'8',
'9',
];

// write password to the #password input 
function writePassword() {
  var validated=false;
  while(!validated) {
      //  parseInt turns strings into numbers
      // prompts get in quotes, semicolon after each function
    var getPasswordLength = parseInt(prompt("How many characters would you like your password to be? Please choose between 8 to 128"));
    if (getPasswordLength == "" ) {
      validated=false
          // random selection for number of characters
              // 1. NAN - not a number
              // 2. Validation bt 8 and 128
    } else if (getPasswordLength < 8 || getPasswordLength > 128 || isNaN(getPasswordLength)) {
      alert("Your password must be between 8 to 128 numeric characters, please try again")  
      validated=false
    } else {
        validated=true
    }
  }

alert("Your password will have " + getPasswordLength + " characters.")

  // set empty array to concat user choices into
  var passwordCharacters = ""

  // user must choose if they want lowercase
  var confirmLowercase = confirm("Would you like lowercase letters in your password? Click OK for Yes or Cancel for No")
  // user must choose if they want uppercase
  var confirmUppercase = confirm("Would you like uppercase letters in your password? Click OK for Yes or Cancel for No")
  // user must choose if they want numbers
  var confirmNumbers = confirm("Would you like numbers letters in your password? Click OK for Yes or Cancel for No")
  // user must choose if they want special characters
  var confirmSpecialChars = confirm("Would you like special characters in your password? Click OK for Yes or Cancel for No")

  // check to make sure that a selection was made 
  if (!confirmLowercase && !confirmUppercase && !confirmNumbers && !confirmSpecialChars) {
    alert("Kindly select at least one character type and try again.");
    return;
}

// concat selected (true) variables into one array
  var characterPool = []
  //if lowercase was selected it will be added to the character pool
  if (confirmLowercase) characterPool = characterPool.concat(lowercase)
  //if uppercase was selected it will be added to the character pool plus if lowercase was selected
  if (confirmUppercase) characterPool = characterPool.concat(uppercase)
  // if numbers were selected they will be added to the pool along with the others that were selected
  if (confirmNumbers) characterPool = characterPool.concat(numbers)
  //if special characters were selected they will add to the pool along with any others that were selected 
  if (confirmSpecialChars) characterPool = characterPool.concat(specialChars)
  // confirmed console log does show pool of available characters 

  var generatePassword = []
  for ( var i=0 ; i < getPasswordLength ; i++)
    // because we dont want it to delete what is already there, we have =generatePassword, then we randomize and round 
    // times the number of characters selected by the user
    generatePassword = generatePassword + characterPool[Math.floor(Math.random() * characterPool.length)]

  // Write password to the #password input, naming the function, empty parenthesis because it is an immediate function
  // as opposed to a callback function, the action occurs immediately, can be called as many times as needed
  // "password" coming from HTML is assigned to a variable called password text
  // removed parenthesis
  var password = generatePassword;
  var passwordText = document.querySelector("#password");


    // the password text has a .value bc the value of "passwordText" is being assigned to password
    // any variable that is assigned in the function is read by the function, outside the function will still 
    // read but as a global variable 
  passwordText.value = password;

  }

  // Add event listener to generate button - variable has already been assigned, here it is called, the event listener
  // is the click action and what it is going to do is the second argument "writePassword"
  // event listener always takes in two parameters, what is the action and what is the action going to do 
generateBtn.addEventListener("click", writePassword);
  // BUTTON SHOULD HAVE EVENT LISTENER WITH CALLBACK FUNCTION
