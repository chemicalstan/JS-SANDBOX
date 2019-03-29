// SETS - Stores unique values of any type

const set1 = new Set();
// Add values to set.
set1.add(100);
set1.add('this is america');
set1.add({name:'Stanley'});
set1.add(true);
set1.add(true); // This doesn't add 

// Another method of adding to sets
    // const set2 = new Set([200, true, 'this is nigeria']);
    // console.log(set2)
// Get Count
console.log(set1.size);

// Check for values
console.log(set1.has(100)); // Returns boolean
console.log(set1.has(50 + 20 + 30)); // Returns boolean
console.log(set1.has({name:'Stanley'})); // Returns false cause obj is not a primitive value

// Delete from Set
set1.delete(100);
// console.log(set1)

// Looping through sets
    // Using for...of
    // .values() or .keys() works cause sets are not key value pairs
    for (const item of set1) {
        console.log(item);
    }
    // Using for...each loops
    set1.forEach((value)=>{
        console.log(value)
    });

// Creating arrays from sets
    const setArr = Array.from(set1);
    console.log(setArr);
