// This pattern helps us create a single instance irrespective of
// The number of Object instances we call

const Singleton = (function(){
    let instance;

    const createInstance = function(){
        const object = new Object({name:'Stanley'});
        return object;
    }

    return {
        newInstance: function (){
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    }
})();

const instance = Singleton.newInstance();
console.log(instance);
