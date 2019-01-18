// Event Listener

// various types of events
// click
// dblclick
// mouseover
// mousedown
// mouseup
// mouseout
// mousein
// mouseenter


const event = document.querySelector('a.clear-tasks');
// Using an unnamed function
// event.addEventListener('click', function(e){
//     console.log('Hello World');
//     e.preventDefault();
// });

// using named function
event.addEventListener('click', onClick);

function onClick(e){
    let val;
    val = e;
    val = e.target;
    // val.textContent = 'Hello';
    val = e.type;
    val = e.timeStamp;

    // Event Coordinates
    val = e.clientY; //Y axis relative to com screen
    val = e.clientX; //X axis relative to com screen

    val = e.offsetY; //y axis relative to button
    val = e.offsetX; //x axis relative to button
    // console.log('clicked');
    e.preventDefault();
    console.log(val);
}

// console.log(event);