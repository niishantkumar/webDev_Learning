let num = Math.floor(Math.random() * 100) + 1;
let userInput = 0;

while (true) {
    if (userInput == 'exit') {
        break;
    }

    userInput = prompt("Guess the number between 1-100");
    if (userInput == num) {
        console.log("You won");
        break;
    } else if (userInput < num) {
        console.log("Your guess is less");
    } else if (userInput > num) {
        console.log("Your guess is greater");
    }
}