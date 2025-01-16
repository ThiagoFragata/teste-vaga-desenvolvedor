import * as readline from 'readline';

function reverseString(input: string): string {
    let reversed = '';

  for (let i = input.length - 1; i >= 0; i--) {
        reversed += input[i];
    }
    return reversed;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question('Digite uma string: ', (input: string) => {

    const reversedString = reverseString(input);
    console.log('String invertida:', reversedString);


    rl.close();
});
