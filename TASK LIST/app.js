// Define UI vars 
const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');
// localStorage.clear();


// run all Even listeners
loadEventListeners();

function loadEventListeners(){
    // Auto Load Tasks From localStorage
    document.addEventListener("DOMContentLoaded", loadTasks());
    // Create Task and Add to tasks list
    form.addEventListener('submit', addTask);
    // Delete Task
    taskList.addEventListener('click', deleteTask);
    // Clear All Task
    clearBtn.addEventListener('click', clearTask);
    // Filter Task
    filter.addEventListener('keyup', filterTask);
}

// Auto load tasks from localStorage
function loadTasks(){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(item){
        // Create Task
        const task = document.createElement('li');
        // Add class to task
        task.className = 'collection-item';
        // Add Text node to task
        task.appendChild(document.createTextNode(item));
        // create link
        const link = document.createElement('a');
        // add link class
        link.className = 'delete-item secondary-content';
        // create Delete Icon
        const icon = document.createElement('i');
        // Add icon class 
        icon.className = 'fa fa-remove';
        // Append icon link
        link.appendChild(icon);
        // Append Link to task
        task.appendChild(link);
        // Add task input to task list
        taskList.appendChild(task);

    });
}

// Create Task Event 
function addTask(e){

    // Make sure input field is not empty
    if(taskInput.value === ''){
        alert('Input Is Empty');
    }else{
        e.preventDefault();

        // Create Task
        const task = document.createElement('li');
        // Add class to task
        task.className = 'collection-item';
        // Add Text node to task
        task.appendChild(document.createTextNode(taskInput.value));
        // create link
        const link = document.createElement('a');
        // add link class
        link.className = 'delete-item secondary-content';
        // create Delete Icon
        const icon = document.createElement('i');
        // Add icon class 
        icon.className = 'fa fa-remove';
        // Append icon link
        link.appendChild(icon);
        // Append Link to task
        task.appendChild(link);
        // Add task input to task list
        taskList.appendChild(task);
        // Save Task to Local Storage
        saveTask(taskInput.value);

        // Reset Input Value
        taskInput.value = '';
    } //  Else End
}  //  addTask End

// Save Task To Local Storage
function saveTask(task){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [task];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
        tasks.push(task);
    }
    
    localStorage.setItem('tasks', JSON.stringify(tasks));
    
}

// Delete task Event
function deleteTask(e){
    if(e.target.parentElement.classList.contains('delete-item')){

        if(confirm('Delete Task?')){
            e.target.parentElement.parentElement.remove();
            deleteFromLocalStorage(e.target.parentElement.parentElement);
        }
    }  //End if
}  //End Delete task Event

// Delete Task From Local Storage
function deleteFromLocalStorage(item){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else{
    // fetch from localStorage
    tasks = JSON.parse(localStorage.getItem('tasks'));
    }  //else End
    tasks.forEach(function(task, index){
        if(task === item.textContent){
            // Delete specified task
            tasks.splice(index, 1);
            // Save Tasks to localStorage
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }  //if End
    });  // forEach End
}  //deleteFromLocalStorage End

//  Clear All Tasks Event
function clearTask(e){
    e.preventDefault();
    if(e.target.classList.contains('clear-tasks') && confirm('Clear All Tasks?')){
        // confirm('Clear All Tasks?')?taskList.innerHTML = '':'';
        while(taskList.firstChild){
            // taskList.firstChild.remove();
            taskList.removeChild(taskList.firstChild);
        }  // while End
        localStorage.clear();
    }
}  // End clearTask

function filterTask(e){
    // Save filter input to text variable
    const text = e.target.value.toLowerCase();
    // Fetch Existing Tasks
    const tasks = document.querySelectorAll('.collection-item');
    tasks.forEach(function(task){

        if(task.firstChild.textContent.toLowerCase().indexOf(text) != -1){
            task.style.display = 'block';
        }else{
            task.style.display = 'none';
        }  // Else End
    }); // forEach End
    
}  // filterTask Event End