// Basic Structure - Module Blue Print
    // IIFEs - Immediately Invoked Functions Expressions
// (function() {
//     // Private Declarations Are Made Here
//     return{
//         // Public Declarations are Made Here
//     }
// })();

    // Module Example One: UI Controller
// const UICtrl = (()=>{
//     text = "Hello World";

//     // Function That changes the page Heading
//     const changeHeading = function(){
//         document.querySelector('h1').innerHTML = text;
//     }
//     // publication site
//     return {
//         callChangeHeading: function(){
//             changeHeading();
//             console.log(text)
//         }
//     }
// })()

// UICtrl.callChangeHeading();

    // REVEALING THE MODULE PATTERN - this method reveals the initially private ppties and methods
const ItemCtrl = (()=>{
    let data = [];

    const addItem = (item)=>{
        data.push(item);
    }

    const getItem = (id)=>{
        return data.find(item=>{
            if(item.id === id){
                return item;
            }
        });
    }

    return {
        addItem,
        getItem,
        data
    }

})();

ItemCtrl.addItem({id:1, name:'Salman'});
ItemCtrl.addItem({id:2, name:'Oge'});
console.log(ItemCtrl.getItem(2));

console.log(ItemCtrl.data);

