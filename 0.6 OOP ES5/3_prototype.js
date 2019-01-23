    // When dealing with objects literal, it's prototype is inherited from
// Object.prototype
            // while
    // When dealing with objects created through a constructor, it's prototype is
// inherited from TheConstructorName.prototype


// PROTOTYPE CHAIN

// Person constructor
function Person (firstname, lastname, dob){
    this.firstname = firstname;
    this.lastname = lastname;
    this.birthday = new Date(dob);
    // ES 5 METHOD
    // this.calculateAge = function(){
    //     //  current time  // converts bday to time format
    //     const diff = Date.now() - this.birthday.getTime();
    //     // converts the diff to a date which is a sum of the diff and 1970
    //     const ageDate = new Date(diff);
    //     // gets the fullyear of the above Date, and removes 1970 to get the actual diff
    //     const age = ageDate.getUTCFullYear() - 1970;
    //     return Math.abs(age);
    // }
}

// Calculate Age
    // This pushes the calculate age method to the person constructor
    // Thus attaching it directly to the constructor in stead of the individual
    // methods
    Person.prototype.calculateAge = function(){
        //  current time  // converts bday to time format
        const diff = Date.now() - this.birthday.getTime();
        // converts the diff to a date which is a sum of the diff and 1970
        const ageDate = new Date(diff);
        // gets the fullyear of the above Date, and removes 1970 to get the actual diff
        const age = ageDate.getUTCFullYear() - 1970;
        return Math.abs(age);
    }
// Get Full name
    Person.prototype.getFullName = function(){
        return `${this.firstname} ${this.lastname}`;
    }
// Gets Married
    Person.prototype.getsMarried = function(newName){
        this.lastname = newName;
    }

    Person.prototype.alive = 'Yes';

    const Stanley = new Person('Stanley', 'Okonkwo', '12-15-97');
    const Rejoice = new Person('Rejoice', 'Chika', 'March 23, 2000');
    Rejoice.getsMarried('Okonkwo');
    console.log(Stanley.alive);