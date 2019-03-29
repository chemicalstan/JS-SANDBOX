// This javascript pattern Enable subcription and 
// unsubscription to certain events - Angular js 
// relies heavily on this pattern for event management
// within the scope

function EventObserver() {
    this.observers = [];
}

EventObserver.prototype = {
    subscribe: function (fn){
        this.observers.push(fn);
        console.log(`You have succesfully subscribed to ${fn.name}`);
    },
    unsubscribe: function(fn) {
        this.observers = this.observers.filter(function(item){
            // this.observers is looped through and any item that
            // matched the function passed in (The function Unsubscribed
            // to), is not returned(not resaved). Hence only the ones that 
            // doesn't match the fn are resaved into the this.observers array 
            if(item !== fn){
                return item;
            }
        });
        console.log(`You have Unsubscribed from ${fn.name}`);
    },
    fire: function (){
        this.observers.forEach(item=>{
            item.call();
        })
    }
}

const click = new EventObserver();

// Get buttons and add event listeners
document.querySelector('.sub-ms').addEventListener('click', function(){
    click.subscribe(getCurMilliseconds);
});
document.querySelector('.unsub-ms').addEventListener('click', function(){
    click.unsubscribe(getCurMilliseconds);
});
document.querySelector('.sub-s').addEventListener('click', function(){
    click.subscribe(getCurSeconds);
});
document.querySelector('.unsub-s').addEventListener('click', function(){
    click.unsubscribe(getCurSeconds);
});
document.querySelector('.fire').addEventListener('click', function(){
    click.fire();
});

// Prototype Handler - Milliseconds
const getCurMilliseconds = function(){
    console.log(`Current Milliseconds: ${new Date().getMilliseconds()}`);
}

// Prototype Handler - Seconds
const getCurSeconds = function(){
    console.log(`Current Seconds: ${new Date().getSeconds()}`);
}