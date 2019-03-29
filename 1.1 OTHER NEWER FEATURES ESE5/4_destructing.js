// JavaScript destructuring is a method of assigning and retrieving
// data from a group of data, methods or arrays

let a, b;
[a,b] = [100, 200];

// The rest pattern
// [a,b,c, ... rest] = [100, 200, 300, 400, 500, 600];

// Object literals within expression
({a, b, e, ...rest} = {a:100, b:200, c:300, d:400, e:500});

console.log(a,b,e, rest);

// Array Destructuring
const people = ['sam', 'phil', 'ruth'];
const [person1, person2, person3] = people;

// Parse array returned from function
const returnName = ()=>{
    return ['samuel', 'philip', 'stanley', 'eldrick'];
}

let [vp, pro, ...soap] = returnName();

console.log(vp, pro, soap);
console.log(typeof returnName);


// Object Destructuring
const person = {
    name: 'paul',
    age: 21,
    city: 'Boston',
    gender: 'male', 
    sayHello: ()=>'hello'
}

// OLD ES5
    // const name = person.name,
    //       age = person.age,
    //       gender = person.gender;

// NEW ES6 DESTRUCTURING
    const {name, age, gender, ...remaining} = person;

    // console.log(remaining[1])
    console.log(remaining.sayHello());

// Json Destructuring