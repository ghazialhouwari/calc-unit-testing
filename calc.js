const Operations = require('./operations');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log(`
    Calc.js

    Welcome to the Node.js Calculator app
    Version 1.0.0

    Usage: The user will be prompted for two numbers,
    then asked to select their operation of choice.
`);

rl.question('Enter your first number: ', x => {
    rl.question('Enter your second number: ', y => {
        rl.question(
            `Please select from the following options:

            [1] Addition (+)
            [2] Subtraction (-)
            [3] Multiplicaiton (*)
            [4] Division (/)

            Enter your choice: `, choice => {
            [x, y] = [+x, +y];
            if (Operations.validateNumbers(x, y)) {
                switch (choice) {
                    case '1':
                        console.log(`The sum of ${x} and ${y} is ${Operations.add(x, y)}`);
                        break;
                    case '2':
                        console.log(`The subtract of ${x} and ${y} is ${Operations.subtract(x, y)}`);
                        break;
                    case '3':
                        console.log(`The product of ${x} and ${y} is ${Operations.multiply(x, y)}`);
                        break;
                    case '4':
                        console.log(`The quotient of ${x} and ${y} is ${Operations.divide(x, y)}`);
                        break;
                    default: 
                        console.log('Please restart the program and select a number between 1 and 4');
                        break;
                }
            } else {
                console.log('Only numbers are allowed! Please restart the program.');
            }

            rl.close();
        });
    })
});