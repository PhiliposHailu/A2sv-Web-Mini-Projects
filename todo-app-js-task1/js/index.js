// 1st Grab html elements/tags from the page 
const btn = document.querySelector('button');
const inputField = document.querySelector('input');
const taskList = document.querySelector('ul');

function addTask() {
    // read the text on the input field 
    const inputText = inputField.value.trim();

    if (inputText === '') {
        // if no input text don't add an empty task
        return;
    }

    // initialize a task list
    const task = document.createElement('li');
    task.textContent = inputText;

    // add to the list 
    taskList.appendChild(task);

    // Todo list Removal Logic 
    function removeTask() {
        taskList.removeChild(task);
    }
    task.addEventListener('click', removeTask);

    // clear the text field 
    inputField.value = '';
    inputField.focus();
}

btn.addEventListener('click', addTask);