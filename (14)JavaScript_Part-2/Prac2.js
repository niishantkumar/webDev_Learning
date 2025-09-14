let tasks = [];
let choice;

while (true) {

    choice = ((prompt("Enter your choice")).trim()).toLowerCase();

    if (choice === "exit") {
        console.log("Exited")
        break;
    }

    if (choice === 'add') {
        let task = prompt("Enter task");
        tasks.push(task);
        console.log("Your task is added")
    }

    else if (choice === "delete") {
        console.log("-----------------------")
        console.log(`${tasks.pop()} removed`);
        console.log("-----------------------")
    }
    else if (choice === "print") {
        console.log("Your tasks :")
        for (task of tasks) {
            console.log(task);
            console.log("-----------------------")
        }
    }
    else {
        console.log("Invalid choice")
    }
}