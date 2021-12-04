// ASSESSMENT 1: Coding conceptual questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Echo 2021"
console.log(cohort.length)

// a) Your answer: 9
// b) Verify and explain: Correct. The length is an inbuilt method in javascript that provides the length of the string.


// --------------------2) What will this log?

var greeting = "Hello World!"
console.log(greeting[3])

// a) Your answer: l
// b) Verify and explain: Correct. The variable greeting is an array and by using "[3]" we are accessing the instance value that is stored in index 3 of the array.
//                          An array has a start index of 0, therefore, greeting at index 3 the value is "l".


// --------------------3) What will this log?

var languages = ["JavaScript", "Ruby", "Python", "C++"]
var index = 1
console.log(languages[index])

// a) Your answer: "Ruby"
// b) Verify and explain: Correct. The variable languages is an array and by using "[index]" we are accessing the instance value that is stored in index 1 of the array.
//                          An array has a start index of 0, therefore, languages at index 1 the value is "Ruby".


// --------------------4) What will this log?

var weekendDays = ["saturday", "sunday"]
//console.log(weekendDays.toUpperCase())

// a) Your answer: Error
// b) Verify and explain: TypeError: weekendDays.toUpperCase is not a function. The method toUpperCase() is an inbuilt method in javascript that works only with strings and not arrays.
//                        The variable weekendDay is an array, therefore, the method toUpperCase does't work. In order for the method to work we would need to access the element itsel


// --------------------5) What will this log?

var dataTypes = ["number", "string", "Boolean"]
console.log(typeof dataTypes.length)

// a) Your answer: number
// b) Verify and explain: Correct. The inbuilt method "length" provides the length of the array dataTypes and returns as a number.
//                          The 
