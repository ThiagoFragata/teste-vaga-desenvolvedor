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
var numberToCheck = 21;
var result = isFibonacci(numberToCheck);
console.log(result
    ? "".concat(numberToCheck, " pertence \u00E0 sequ\u00EAncia de Fibonacci.")
    : "".concat(numberToCheck, " n\u00E3o pertence \u00E0 sequ\u00EAncia de Fibonacci."));
