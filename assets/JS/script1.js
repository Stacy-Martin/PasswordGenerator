// Required:
// *lowercase, uppercase, numeric and/or special characters
// *between 8 to 128 characters
// *in lines 20-25 on readme will be HTML
// after line 25 it will be in JavaScript
// Given a new password --> our application purpose, need button on doc
// use window.prompt
// then designate which criteria to use in the pw - this is another series of prompts, asking the user what they want
// what length?  we store that 
// what characters?  we store that too in a series of if statements


// var allCharactersPossible;
// must be stored somewhere 
// var dog = ["d", "o", "g"]
// var cat = ["c", "a", "t"]
// var allAnimanlCharacters = ?

// think about random selection for 8-128 n number of characters the user wanted 

// a prompt would be how many characters the user wants, but then needs to be validated against the requirements (like if it were 7)

// random selection for number of characters
// 1. NAN - not a number
// 2. Validation bt 8 and 128


// if(lowercase)
// (
//     add lowercase to potential password characters
// )
// if uppercase
// ( 
//     add uppercase to potential password characters
// )

// BREAK DOWN CRITERIA ONE BY ONE AND LOOK FOR SPECIAL STATEMENTS LIKE AND/OR
// 1. button
// 2. series OF PROMPTS 
// MORE.....  
// ITS ALL ABOUT HANDLING AND MANIPULATING ARRAYS
 
// USE  A TEXT AREA WITH VALUE PROPERTY ???  FOR LINE 14 STRONG PW REQUIREMENT, 

// BUTTON SGHOULD HAVE EVENT LISTENER WITH CALLBACK FUNCTION

// STORE BUTTON WITHIN THE LOCAL SCOPE

// ESTABLISH VARIABLES LOCALLY SO THEY ARE IN THE FUNCTION TO BEGIN WITH

// ALL CHANGES IN JS, DO NOT NEED TO CHANGE HTML OR CSS

//use a break statement to terminate the current loop / switch or label statement

// 1st thing to do is to create 4 different arrays for all kind of characters ( Upper cases, Lower cases, Numbers and Special characters ), then use those to create a randomly generated password based on users selections.
// The array of special characters for reference:

// these arrays can stay at the top, define variables first at the top 
// special characters display red as strings, while numbers are green as numbers

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
    '.'
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
  "Z"
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
  "z"
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
  
  
  
  //  parseInt turns strings into numbers
  // prompts get in quotes, semicolon after each function
  function generatePassword() {
    var passwordLength = parseInt(
      prompt("How many characters would you like in your password?")
  };
  
  
  
  // all different prompts and confirm dialogues, at the beginning of your function, 
  // and you store the values in variables so you can refer to them later
  
  // Have you started with your variables yet? Do that for your character types, 
  // then start a while loop to create the prompt for the question about how many characters. 
  // Within that loop do your validation to make sure it meets the criteria (is a number, is between 8-128, etc)
  
  // Assignment Code, grabbing "generate" from HTML
  var generateBtn = document.querySelector("#generate");
  
  // Write password to the #password input, naming the function, empty parenthesis because it is an immediate function
  // as opposed to a callback function, the action occurs immediately, can be called as many times as needed
  // "password" coming from HTML is assigned to a variable called password text
  function writePassword() {
    var password = generatePassword();
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
  
  // for (let step = 0; number.length; step++) {
  //   // Runs 5 times, with values of step 0 through 4.
  //   console.log('Walking east one step');
  // }