// Prototypal inheritance is when an object inherits properties
// or methods of another object

// Person constructor
function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

// Greeting
Person.prototype.greeting = function(){
    return `Hello there, ${this.firstName} ${this.lastName}`;
}

const person1 = new Person('John', 'Doe');
console.log(person1);

// Customer constructor
function Customer(firstName, lastName, phone, membership){
    // Person prototypal inheritance
    Person.call(this, firstName, lastName);
    this.phone = phone;
    this.membership = membership;
}

// Person constructor method inheritance
Customer.prototype = Object.create(Person.prototype);
// Make customer prototype return custormer()
Customer.prototype.constructor = Customer;
// Overwrite custormer greeting
Customer.prototype.greeting = function(){
    return `Hello there ${this.firstName} ${this.lastName}, welcome to our store.`;
}
// customer object
const customer1 = new Customer('Steve', 'Smith', '555-555-5555', 'Standard');
console.log(customer1);
console.log(customer1.greeting());