// 1st Grab the html tags we need 
const addBtn = document.querySelector('button');
const taskList = document.querySelector('ul');
const inputField = document.querySelector('input')

addBtn.addEventListener('click', addTaskToList);

function addTaskToList() {

    const task          = inputField.value.trim();
    if (!task) {
        return;
    }

    addTask(task);
    inputField.value = '';
    inputField.focus();
}

function addTask(task) {
    // create all list items 
    const li            = document.createElement('li')
    const checkbox      = document.createElement('input');
    const span          = document.createElement('span');
    const editBtn       = document.createElement('button');
    const deleteBtn     = document.createElement('button');

    // specify the type 
    checkbox.type           = 'checkbox';
    span.textContent        = task;
    editBtn.textContent     = 'Edit';
    deleteBtn.textContent   = 'Delete';

    // put together
    li.append(checkbox, span, editBtn, deleteBtn);

    // add to unordered list 
    taskList.appendChild(li);

    // add an event listener to each buttons of the task added 
    checkbox.addEventListener('change', () => {
        // on and off the mark and strickThrough 
        // if the checkbox is chekced add the class completed to li class 
        li.classList.toggle('completed', checkbox.checked);
    });

    editBtn.addEventListener('click', () => {
        // first check if the task is in edit mode or not 
        const editing = li.querySelector('input[type="text"]');
        if (!editing) {
            // go in to editing mode 
            const input = document.createElement('input')
            input.type = 'text';
            input.value = span.textContent;
            li.replaceChild(input, span);
            input.focus();
            editBtn.textContent = 'Save';
        }
        else {
            // exit editing mode if save btn is clicked 
            const newText = editing.value.trim();
            if (newText) {
                span.textContent = newText;
                li.replaceChild(span, editing);
                editBtn.textContent = 'Edit';
            }

        }
    });

    deleteBtn.addEventListener('click', () => {
        li.remove();
    });

}
