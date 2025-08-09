let todo = [];

let req = prompt("Please enter your request[Either: list or add or delete or quit] ");

while (true) {
    if (req === "quit") {
        console.log("quitting the app");
        break;
    }

    if(req === "list") {
        console.log("------------------------------------");
        for(let i = 0; i < todo.length; i++) {
            console.log(`${i}: ${todo[i]}`);
        }
        console.log("------------------------------------");
    } else if(req === "add") {
        let task = prompt("Please enter the task you want to add: ");
        todo.push(task);
        console.log("Task added successfully!");
    } else if(req === "delete") {
        let index = prompt("Please enter the index of the task you want to delete: ");
        if (index >= 0 && index < todo.length) {
            todo.splice(index, 1);
            console.log("Task deleted successfully!");
        } else {
            console.log("Invalid index. Please try again.");}
    } else {
        console.log("Invalid request. Please enter either: list, add, delete, or quit.");
    }

    req = prompt("Please enter your request[Either: list or add or delete or quit] ");

}