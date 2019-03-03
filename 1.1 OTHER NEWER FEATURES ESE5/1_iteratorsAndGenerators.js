// Iterators
    //OOP/ CONSTRUCTIOR METHOD

// function nameIterator(names){
//     this.nameIndex = 0;
    
//     this.next = ()=>{
//         return this.nameIndex < names.length ? 
//         {value:names[this.nameIndex++], done:false}:
//         {done:true}
//     }


// }
//  // Names Array
//  const namesArray = ['John', 'Mike', 'Phil'];
// // Initialise nameIterator
// const Iterator = new nameIterator(namesArray);
//  console.log(Iterator.next().value);
//  console.log(Iterator.next());
//  console.log(Iterator.next());
//  console.log(Iterator.next());   

    // NORMAL FUNCTION METHOD
function nameIterator(names){
    let nameIndex = 0;

    return {
        next: ()=>{
            return nameIndex < names.length ?
            {value: names[nameIndex++], done:false}:
            {done:true};
        }
    }
}

 const namesArray = ['John', 'Mike', 'Phil'];
     // a variable must be created to hold the functions
 const names = nameIterator(namesArray);
 console.log(names.next());
 console.log(names.next());
 console.log(names.next());
 console.log(names.next());

    // GENERATORS*
function* sayName(){
    yield 'John';
    yield 'Adams';
    yield 'Fred';
}
    // a variable must be created to hold the functions
    const name = sayName();
console.log(name.next().value)
console.log(name.next().value)
console.log(name.next().value)

// GENERATE ID
function* createIds(){
    let index = 1;

    while (true) {
        yield index++;
    }
}

    const gen = createIds()
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
