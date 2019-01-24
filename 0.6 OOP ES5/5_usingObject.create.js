// FATHER OF ALL. THIS BELOW DENOTES CREATING A PROTOTYPE (TO SERVE as
// SUBSEQUENT OBJECTS PARENT)
const personPrototypes = {
    // a prototype method
    greeting: function (){
        return `Hello there ${this.firstname} ${this.lastname}`;
    },

    getsMarried: function(newLastname){
        this.lastname = newLastname;
    }
}
// new objects inheriting prototypal properties and 
// methods from a parent prototype
const mary = Object.create(personPrototypes);

// Method1: Adding attributes/properties to the new object [Mary]
mary.firstname = 'Mary';
mary.lastname = 'Smith';
mary.age = 23;
mary.getsMarried('Thompson');
console.log(mary.greeting());

// Method2: creation amd assignment of attributes/properties
// to the new object [Stanley]
const stanley = Object.create(personPrototypes, {
    firstname: {value: 'Stanley'},
    lastname: {value: 'Okonkwo'},
    age: {value: 21}
});

console.log(stanley.greeting());