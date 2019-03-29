// Symbol datatypes are  mainly known for their uniqueness
// I.E, no two symbols can be thesame in an application

// New symbol
    const sym1 = Symbol();
    const sym2 = Symbol('sym2'); // Symbol with an identifier.
    // console.log(typeof sym2)

// Unique object key
    const KEY1 = Symbol();
    const KEY2 = Symbol('sym2');

    const obj = {}
//to transfer the symbol nature thats already declared globally in variable
// into an object, we use [] instead of dots (.)
    obj[KEY1] = 'prop1';  
    obj[KEY2] = 'prop2';
    obj.key3 = 'prop3';
    obj.key4 = 'prop4';
    
    // Symbols does not enumarable (looped) in for...in loops
    for (let i in obj) {
        console.log(`${i}: ${obj[i]}`);
    }

// Symbols are ignored by JSON.stringify

    console.log(JSON.stringify({name: 'sam'}))
    console.log(JSON.stringify({[Symbol('sam')]: 'sam'}))

