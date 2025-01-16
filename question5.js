"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
// Function to manually reverse a string
function reverseString(input) {
    var reversed = '';
    // Loop through the string in reverse order and build the reversed string
    for (var i = input.length - 1; i >= 0; i--) {
        reversed += input[i];
    }
    return reversed;
}
// Create readline interface to read input from terminal
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// Prompt the user for input
rl.question('Digite uma string: ', function (input) {
    // Reverse the string and display the result
    var reversedString = reverseString(input);
    console.log('String invertida:', reversedString);
    // Close the readline interface
    rl.close();
});
