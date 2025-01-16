import * as readline from 'readline';

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

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite um número para verificar se pertence à sequência de Fibonacci: ', (input: string) => {
    const numberToCheck = parseInt(input); 
    const result = isFibonacci(numberToCheck);

    console.log(
        result
            ? `${numberToCheck} pertence à sequência de Fibonacci.`
            : `${numberToCheck} não pertence à sequência de Fibonacci.`
    );

    rl.close();
});
