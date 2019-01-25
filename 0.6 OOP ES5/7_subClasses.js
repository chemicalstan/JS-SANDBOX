// Sub classes is to ES6 what inheritance is to ES5

// Main Class
class Person {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greeting(){
        return `Hello there ${this.firstName} ${this.lastName}`;
    }
}

// Sub Class
class Customer extends Person {
    constructor(firstName, lastName, phone, membership){
        // The function below calls the constructor of the
        // parent class.
        super(firstName, lastName);

        // Extra things that are not in the Parent class
        // are defined below
        this.phone = phone;
        this.membership = membership;
    }

    static getMembershipCost(){
        return 'NGN 500';
    }
}

const john = new Customer('John', 'Doe', '555-555-5555', 'Standard');
console.log(john.greeting());
console.log(Customer.getMembershipCost());