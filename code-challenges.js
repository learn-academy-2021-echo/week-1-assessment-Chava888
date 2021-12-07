// ASSESSMENT 1: Coding practical questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Please read all questions thoroughly!
// If you get stuck, please leave comments to help us understand your thought process.

// --------------------1) Create a statement that determines if a temperature is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit.

// Create the code and test each of the variables provided. Expected output: "42 is below boiling point", "350 is above boiling point", "212 is at boiling point"

var temp1 = 42
var temp2 = 350
var temp3 = 212

var temp = [temp1, temp2, temp3]//Created an array for the three variables for temperature


//Create a iteration of the array and output a statement based on the temp[index] value.
for (let i = 0; i < temp.length; i++) {

    if (temp[i] > 212) {
        console.log(`${temp[i]} is above boiling point`)
    }
    else if (temp[i] < 212) {
        console.log(`${temp[i]} is below boiling point`)
    }
    else { console.log(`${temp[i]} is at boiling point`) }
}




// --------------------2) Create the code that will combine the two arrays and return the length using the variables provided below. Expected output: 10

var myNumbers1 = [3, 7, 0, 36, -9]
var myNumbers2 = [8, -7, 42, 9, 13]

var newNumSet = [] //Create an empty new array


//Iterate to copy values of myNumbers1 to the new array
for (let i = 0; i < myNumbers1.length; i++) {
    newNumSet.push(myNumbers1[i]);
}

//Iterate to copy values of myNumbers2 to the new array
for (let i = 0; i < myNumbers2.length; i++) {
    newNumSet.push(myNumbers2[i]);
}


console.log(newNumSet.length); //Output the length of the new array


// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below. Expected output: "1202 ohcE"

var currentCohort = "Echo 2021"

var arrayNewCohort = []; //Create an empty array to store the characters for currentCohort String

//Iterate to extract the characters from currentCohort String and store them in the new array
for (let i = 0; i < currentCohort.length; i++) {
    arrayNewCohort.push(currentCohort[i]);
}

//Prints the new array by first reversing the instances in the array and then join the instances in the array to a string by join().
console.log(arrayNewCohort.reverse().join(""));


// --------------------4) Create a statement that will evaluate whether each number in an array is even or odd. Use the test variable provided below. Expected output: "odd" "even" "odd" "even" "odd" "even"

var myArray = [13, 34, 5, 10, 27, 42]

for (let i = 0; i < myArray.length; i++) {

    if (myArray[i] % 2 === 0) {
        console.log("even")
    }
    else { console.log("odd") }

};


// --------------------5) Create a statement that evaluates two numbers and subtracts the smaller number from the larger number using the two sets of test variables provided below. Expected output: 42, 3

var number1 = 58
var number2 = 100

//Compare num1 to num 2 
if (number1 > number2) {
    console.log(number1 - number2)
}
else { console.log(number2 - number1) }

var number1 = 27
var number2 = 24


if (number1 > number2) {
    console.log(number1 - number2)
}
else { console.log(number2 - number1) }