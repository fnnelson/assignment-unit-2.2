// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// we make a variable called name and set it to a string 'Dane'
// we use a conditional that says if a defined variable name is exactly the same as (===) 'Mary' then we console.log 'Hi, Mary!'
// if our previously defined variable for name is anything but 'Mary' we console.log 'How do you do?'
//

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// we make a variable secret using let with no initial value (it is not a constant and can be updated)
// we make a variable code and give it an initial value of (the number) 123

// to summarize the conditional: 
// we make a conditional that says if the variable code exactly matches 123 (=== meaning it has to be a number too), the imbedded code will run where the variable secret is now defined as the string 'super' and the variable code is updated to 2 * its initial value (in this case code will then be 246)
// THEN another conditional is made where if our variable code's value is greater than the number 250 (regardless of whether the previous conditional was applicable), then our variable secret is updated to the string 'duper'
// Then after both conditionals are run, we console.log the current value of the variable secret.  If code < 250 AND not exactly 123 to start, the secret variable will remain unchanged.

// In this case the code variable starts with value 123 then becomes 246 (because of the first conditional) and it will console.log 'super' since 246 is less than or equal to 250 (so the second conditional didn't apply any change to secret)

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// we define the variable isStudent the value of true, the variable age the value of 34, and the variable zip the value of 55407

// to summarize each step of the conditional: 
// -- the conditional starts with if isStudent equals the boolean true AND zip is a value greater than 80000, then we console.log 'You're on the West Coast!' and the code in this conditional stops there
// -- if the above if/then statement wasn't true, then if EITHER isStudent equals the boolean false OR the age variable is a value less than 30, then we console.log 'What are your hobbies?'
// -- if the above statement didn't apply, if the isStudent variable equals the boolean true, then we console.log 'Welcome to Prime!'
// -- if every one of the above if/else if scenarios in this conditional did not apply, then we console.log 'How about the weather?'

// in this case, step by step of the code: 
// -- isStudent is true, however since the zip is not greater than 8000, we move down to the next statement.
// -- isStudent is not false AND age is not less than 30 so the || EITHER/OR statement doesn't apply, so we go to the next statement.
// -- isStudent is true, so we console.log 'Welcome to Prime!' and the code stops there in this conditional

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment.
// Should be number++.
number--;

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

