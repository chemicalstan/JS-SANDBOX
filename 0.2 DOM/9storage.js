// Adding to Local Storage.
    // localStorage.setItem('name', 'Sabastine');
    // localStorage.setItem('age', '21');

// Display local Storage Datas.
    // const name = localStorage.getItem('name');
    // const age = localStorage.getItem('age');
    

// Adding temporarily to Session Storage.
    // sessionStorage.setItem('name', 'Gloria');


// Clear local Storage.
    // localStorage.removeItem('name');
    // localStorage.clear(); //This deletes everything.


    // ADD TASK TO LOCAL STORAGE.
const form = document.getElementById('task-form');
form.addEventListener('submit', runEvent);
    function runEvent(e){
        const task = document.querySelector('#task').value;
        let tasks;
        if(localStorage.getItem('tasks') === null){
            tasks = [task];
        }else{
            tasks = JSON.parse(localStorage.getItem('tasks'));
            tasks.push(task);
        }

        localStorage.setItem('tasks', JSON.stringify(tasks));
        alert('Saved Succesfully');
        // e.preventDefault();

    }
    // const tasks = JSON.parse(localStorage.getItem('tasks'));
    // tasks.forEach(function(task){
    //     console.log(task);
    // });
    console.log(localStorage.getItem('tasks'));