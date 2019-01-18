const clearBtn = document.querySelector('a.clear-tasks');
const card = document.querySelector('div.card');
const header = document.querySelector('h5.task-title');

// Click
// clearBtn.addEventListener('click', runEvent);
// Double Click
// clearBtn.addEventListener('dblclick', runEvent);
//mouseup
// clearBtn.addEventListener('mouseup', runEvent);
// mousedown
// clearBtn.addEventListener('mousedown', runEvent);
// mouseenter
card.addEventListener('mouseenter', runEvent);
// mouseleave
card.addEventListener('mouseleave', runEvent);
// mousemove 
card.addEventListener('mousemove', runEvent);


function runEvent (e){
    console.log(`Event type: ${e.type}`);
    // e.preventDefault;
}
