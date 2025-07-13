import { createInterface } from 'readline';

const read = createInterface ({
    input: process.stdin,
    output: process.stdout,
})

// type todoItem = {
//     text: string;
//     completed : boolean;
// }

interface todoItem {
    taskText: string,
    done: boolean,
}

const tasksList: todoItem[] = [];


function displayMenu(): void{
    console.log("___ToDo App Menu___");
    console.log("0, Exit");
    console.log("1, Add Task");
    console.log("2, Edit Task");
    console.log("3, Delete Task");
    console.log("4, List Tasks");
    read.question("Enter you choice: ", menuSelection);
}

function menuSelection(choice: string): void {
    choice = choice.trim();
    switch (choice) {
    case '0':
        console.log("See you later :)");
        read.close();
        break;
    case '1':
        read.question("Enter new task: ", addTask)
        break;
    case '2':
        console.log("Enter the task number you wish to Edit.")
        read.question("Number: ", editTask);
        break;
    case '3':
        console.log("Enter the task number you wish to Delete.")
        read.question("Number: ", deleteTask);
        break;
    case '4':
        displayTasks();
        break
    default:
        console.log("Invalid input.")
        displayMenu();
    }
}

function addTask(task: string) {
    task = task.trim();
    if (task !== ''){
        const newTask: todoItem = {
            taskText: task,
            done: false,
        };
        tasksList.push(newTask);
    }
    displayMenu();
}

function editTask(num: string) {
    num = num.trim()

    const index = parseInt(num) - 1;
    if (!isNaN(index) || index < tasksList.length || index >= 0) {
        const oldTaskStr: string = tasksList[index].taskText;

        read.question("Enter new task: ", (newTaskStr: string) => {
            newTaskStr = newTaskStr.trim()
            if (newTaskStr !== '') {
                console.log("Updated Task, From -> " + oldTaskStr + " |To -> " + newTaskStr);
                tasksList[index].taskText = newTaskStr;
            }
            displayMenu();
        })
    }
    else {
        displayMenu();
    }
    
}

function deleteTask(num: string) {
    num = num.trim();
    const row = parseInt(num) - 1;

    if (!isNaN(row) || row < tasksList.length || row >= 0) {
        tasksList.splice(row - 1, 1);
        console.log("Task deleted Successfully.")
    }
    displayMenu();
}

function displayTasks() {
    if (tasksList.length == 0) {
        console.log("Empty :)")
    }
    else {
        console.log("===___Task List___===")
        for (let i = 0; i < tasksList.length; i++) {
            console.log(`${(i + 1)}, ` + tasksList[i].taskText);
        }
    }
    displayMenu();
}

displayMenu();

// =================_Web Version_======================//

// // 1st Grab the html tags we need 
// const addBtn = document.querySelector('button') as HTMLButtonElement;
// const taskList = document.querySelector('ul') as HTMLUListElement;
// const inputField = document.querySelector('input') as HTMLInputElement;

// addBtn.addEventListener('click', addTaskToList);

// function addTaskToList(): void {

//     const task : string = inputField.value.trim();
//     if (!task) {
//         return;
//     }

//     addTask(task);
//     inputField.value = '';
//     inputField.focus();
// }

// function addTask(task : string) : void {
//     // create all list items 
//     const li            = document.createElement('li')
//     const checkbox      = document.createElement('input');
//     const span          = document.createElement('span');
//     const editBtn       = document.createElement('button');
//     const deleteBtn     = document.createElement('button');

//     // specify the type 
//     checkbox.type           = 'checkbox';
//     span.textContent        = task;
//     editBtn.textContent     = 'Edit';
//     deleteBtn.textContent   = 'Delete';

//     // put together
//     li.append(checkbox, span, editBtn, deleteBtn);

//     // add to unordered list 
//     taskList.appendChild(li);

//     // add an event listener to each buttons of the task added 
//     checkbox.addEventListener('change', () => {
//         // on and off the mark and strickThrough 
//         // if the checkbox is chekced add the class completed to li class 
//         li.classList.toggle('completed', checkbox.checked);
//     });

//     editBtn.addEventListener('click', () => {
//         // first check if the task is in edit mode or not 
//         const editing = li.querySelector('input[type="text"]') as HTMLInputElement;
//         if (!editing) {
//             // go in to editing mode 
//             const input = document.createElement('input') as HTMLInputElement;
//             input.type = 'text';
//             input.value = span.textContent as string;
//             li.replaceChild(input, span);
//             input.focus();
//             editBtn.textContent = 'Save';
//         }
//         else {
//             // exit editing mode if save btn is clicked 
//             const newText: string = editing.value.trim();
//             if (newText) {
//                 span.textContent = newText;
//                 li.replaceChild(span, editing);
//                 editBtn.textContent = 'Edit';
//             }

//         }
//     });

//     deleteBtn.addEventListener('click', () => {
//         li.remove();
//     });

// }
