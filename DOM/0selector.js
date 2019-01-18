// DOM Query Selector


// SINGLE ELEMENT SELECTOR
    //This query selector grabs just one item.

//1. document.getElementById()

let val;
val = document.getElementById('task-title');

// Get things from the element
val.style.color = '#fff';
val.style.background = '#333';
val.style.padding = '4px';
// val.style.display = 'none';

// Change The Content
val.textContent = 'Task List';
val.innerText = 'My Tasks';
val.innerHTML= "<span style='color: red;'>Task Lists</span>";
console.log(val);

// document.querySelector() 
    // This is the most powerful single element selector
    // this is because element can be selected using their ids 
    // classes, tag names etc 

console.log(document.querySelector('#task-title').style.background = 'yellow');
console.log(document.querySelector('.card-title').style.background = 'yellow');
console.log(document.querySelector('li:nth-child(even)').style.background = 'gray');
console.log(document.querySelector('li:first-child').style.background = 'pink');

