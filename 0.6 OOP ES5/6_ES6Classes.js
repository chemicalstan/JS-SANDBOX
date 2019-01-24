// SYTACTIC SUGAR
    // This denotes a change in the sytax of something with out
    // changing how it works under the hood
class Person{
    constructor(firstname, lastname, dob){
        this.firstname = firstname;
        this.lastname = lastname;
        this.birthday = new Date(dob);
    }

    greeting(){
        return `Hello there ${this.firstname} ${this.lastname}`;
    }

    calculateAge(){
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    getsMarried(newLastname){
        this.lastname = newLastname;
    }
    // STATIC METHODS
    static addNumbers(x, y){
        return x + y;
    }
}

const Stanley = new Person('Stanley', 'Okonkwo', '12-15-97');
console.log(Stanley.greeting());
// HOW TO USE STATIC NUMBERS
console.log(Person.addNumbers(2,5))