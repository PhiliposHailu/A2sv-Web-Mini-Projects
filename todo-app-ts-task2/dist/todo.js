"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline_1 = require("readline");
const read = (0, readline_1.createInterface)({
    input: process.stdin,
    output: process.stdout,
});
const tasksList = [];
function displayMenu() {
    console.log("___ToDo App Menu___");
    console.log("0, Exit");
    console.log("1, Add Task");
    console.log("2, Edit Task");
    console.log("3, Delete Task");
    console.log("4, List Tasks");
    read.question("Enter you choice: ", menuSelection);
}
function menuSelection(choice) {
    choice = choice.trim();
    switch (choice) {
        case '0':
            console.log("See you later :)");
            read.close();
            break;
        case '1':
            read.question("Enter new task: ", addTask);
            break;
        case '2':
            console.log("Enter the task number you wish to Edit.");
            read.question("Number: ", editTask);
            break;
        case '3':
            console.log("Enter the task number you wish to Delete.");
            read.question("Number: ", deleteTask);
            break;
        case '4':
            displayTasks();
            break;
        default:
            console.log("Invalid input.");
            displayMenu();
    }
}
function addTask(task) {
    task = task.trim();
    if (task !== '') {
        const newTask = {
            taskText: task,
            done: false,
        };
        tasksList.push(newTask);
    }
    displayMenu();
}
function editTask(num) {
    num = num.trim();
    const index = parseInt(num) - 1;
    if (!isNaN(index) || index < tasksList.length || index >= 0) {
        const oldTaskStr = tasksList[index].taskText;
        read.question("Enter new task: ", (newTaskStr) => {
            newTaskStr = newTaskStr.trim();
            if (newTaskStr !== '') {
                console.log("Updated Task, From -> " + oldTaskStr + " |To -> " + newTaskStr);
                tasksList[index].taskText = newTaskStr;
            }
            displayMenu();
        });
    }
    else {
        displayMenu();
    }
}
function deleteTask(num) {
    num = num.trim();
    const row = parseInt(num) - 1;
    if (!isNaN(row) || row < tasksList.length || row >= 0) {
        tasksList.splice(row - 1, 1);
        console.log("Task deleted Successfully.");
    }
    displayMenu();
}
function displayTasks() {
    if (tasksList.length == 0) {
        console.log("Empty :)");
    }
    else {
        console.log("===___Task List___===");
        for (let i = 0; i < tasksList.length; i++) {
            console.log(`${(i + 1)}, ` + tasksList[i].taskText);
        }
    }
    displayMenu();
}
displayMenu();
//# sourceMappingURL=todo.js.map