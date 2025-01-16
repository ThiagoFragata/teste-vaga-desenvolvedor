"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
function reverseString(input) {
    var reversed = '';
    for (var i = input.length - 1; i >= 0; i--) {
        reversed += input[i];
    }
    return reversed;
}
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Digite uma string: ', function (input) {
    var reversedString = reverseString(input);
    console.log('String invertida:', reversedString);
    rl.close();
});
