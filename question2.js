"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
function isFibonacci(num) {
    var a = 0;
    var b = 1;
    while (a <= num) {
        if (a === num)
            return true;
        var temp = a + b;
        a = b;
        b = temp;
    }
    return false;
}
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Digite um número para verificar se pertence à sequência de Fibonacci: ', function (input) {
    var numberToCheck = parseInt(input);
    var result = isFibonacci(numberToCheck);
    console.log(result
        ? "".concat(numberToCheck, " pertence \u00E0 sequ\u00EAncia de Fibonacci.")
        : "".concat(numberToCheck, " n\u00E3o pertence \u00E0 sequ\u00EAncia de Fibonacci."));
    rl.close();
});
