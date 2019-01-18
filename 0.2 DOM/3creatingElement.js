const ul = document.querySelector('ul.collection');
// create Element
const li = document.createElement('li');   
// add class   
li.className = 'collection-item';
// add id
li.id = 'test id';
// add attribute
li.setAttribute('name', 'links')
// append li and create text node
const textNode = document.createTextNode('This shit worked');
li.appendChild(textNode);

// create link
link = document.createElement('a');
// add class to link
link.className = 'delete-item secondary-content';
// add href attribute
link.setAttribute('href', '#');
// create i
const i = document.createElement('i');
// Add class to i
i.className = 'fa fa-remove';
// Add i to link
link.appendChild(i);

// add link to li
li.appendChild(link);

// Append li to parent node
ul.appendChild(li);


console.log(li);