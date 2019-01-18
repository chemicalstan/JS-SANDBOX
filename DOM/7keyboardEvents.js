const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');
const select = document.querySelector('select');
  //   TO CLEAR FORM INPUT
//   taskInput.value = '';
// SUBMIT
// form.addEventListener('submit', runEvent);

// KEYDOWN
// taskInput.addEventListener('keydown', runEvent);

// KEYUP
// taskInput.addEventListener('keyup', runEvent);

// KEYPRESS
// taskInput.addEventListener('keypress', runEvent);

// FOCUS
// taskInput.addEventListener('focus', runEvent)

// BLUR 
// taskInput.addEventListener('blur', runEvent);

// CUT
// taskInput.addEventListener('cut', runEvent);

// PASTE
// taskInput.addEventListener('paste', runEvent);

// INPUT
// taskInput.addEventListener('input', runEvent);

// CHANGE
select.addEventListener('change', runEvent);

function runEvent(e){
    console.log(`Event Type: ${e.type}`);

    console.log(e.target.value);
    heading.innerText = e.target.value;
    // Echo input value
    // console.log(taskInput.value);
    // e.preventDefault();
}