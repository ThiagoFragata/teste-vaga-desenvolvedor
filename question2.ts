function isFibonacci(num: number): boolean {
    let a = 0; 
    let b = 1; 

    while (a <= num) {
        if (a === num) return true; 
        const temp = a + b; 
        a = b;
        b = temp;
    }

    return false; 
}

const numberToCheck = 21; // Para não precisar instalar um pacote, optei por definir no código o número
const result = isFibonacci(numberToCheck);

console.log(
    result
        ? `${numberToCheck} pertence à sequência de Fibonacci.`
        : `${numberToCheck} não pertence à sequência de Fibonacci.`
);
