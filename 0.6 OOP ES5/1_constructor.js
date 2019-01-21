// javascript constructor
function Person (name, dob){
    this.name = name;
    this.birthday = new Date(dob);
    // ES 5 METHOD
    this.calculateAge = function(){
        //  current time  // converts bday to time format
        const diff = Date.now() - this.birthday.getTime();
        // converts the diff to a date which is a sum of the diff and 1970
        const ageDate = new Date(diff);
        // gets the fullyear of the above Date, and removes 1970 to get the actual diff
        const age = ageDate.getUTCFullYear() - 1970;
        return Math.abs(age);
    }
    // console.log(this);
}
// CONSTRUCTOR OBJECTS
const stanley = new Person('Stanley', '12/15/1997');
const john = new Person('John', '12/24/1996');
console.log(stanley.calculateAge());
console.log(john.calculateAge());

// TESTING
// const origin = new Date('1/1/1970'),
//       dex = new Date(origin.getTime());
// // console.log(dex);

