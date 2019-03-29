class EventObserver{
    constructor (){
        this.observers = [];
    }

    subscribe(fn){
        this.observers.push(fn);
        console.log(`Succesfully Subscribed to ${fn.name}`);
    }

    unsubscribe(fn){
        // this.observers is looped through and any item that
        // matched the function passed in (The function Unsubscribed
        // to), is not returned(not resaved). Hence only the ones that 
        // doesn't match the fn are resaved into the this.observers array
        this.observers = this.observers.filter(function(item){
            if(item !== fn){
                return item;
            }
        });
        console.log(`Succesfully Unsubscribed to ${fn.name}`);
    }

    fire(){
        this.observers.forEach(item=>{
            item.call();
        });
    }
}

const observers = new EventObserver();

// Event Listeners
document.querySelector('.sub-ms').addEventListener('click', function(){
    observers.subscribe(getCurrMilliseconds);
});
document.querySelector('.unsub-ms').addEventListener('click', function(){
    observers.unsubscribe(getCurrMilliseconds);
});
document.querySelector('.sub-s').addEventListener('click', function(){
    observers.subscribe(getCurrSeconds);
});
document.querySelector('.unsub-s').addEventListener('click', function(){
    observers.unsubscribe(getCurrSeconds);
});
document.querySelector('.fire').addEventListener('click', function(){
    observers.fire();
});

// Event functions

const getCurrMilliseconds = ()=>{
    console.log(`Current Milliseconds: ${new Date().getMilliseconds()}`);
}

const getCurrSeconds =()=>{
    console.log(`Current Seconds: ${new Date().getSeconds()}`);
}

