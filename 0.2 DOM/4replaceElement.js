// REPLACING ELEMENTS
const newHeading = document.createElement('h2');
// adding id
newHeading.id = 'task-title';
// creating text node
newHeading.appendChild(document.createTextNode('Task Lists'));
// creating parent
const parent = document.querySelector('div.card-action');
// catching the old heading
const oldHeading = document.getElementById('task-title');
//replacing the old heading
parent.replaceChild(newHeading, oldHeading);

// removing and element
    // catching the Element
const lis = document.querySelectorAll('li');
const lists = document.querySelector('ul');
// Removing element
// lis[0].remove();

// removing using remove child
// lists.removeChild(lis[4]);

// LINKS AND ATTRIBUTES
const firstLi = document.querySelector('li:first-child');
let val;
    // get link
link = firstLi.children[0];
val = link.className;
val = link.classList.add('test-class');
// remove class
link.classList.remove('test-class');

// ATTRIBUTES
val = link.getAttribute('href');
link.setAttribute('href', 'http://google.com');
link.setAttribute('test', 'titleName');
link.removeAttribute('test');

val = link;


console.log(val);