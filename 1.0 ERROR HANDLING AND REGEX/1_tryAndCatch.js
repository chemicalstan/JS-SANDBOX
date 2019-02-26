// The advantage of this method is that; an error is handles without
// stoping the entire application


// Different Types of Errors
// 1. ReferenceError
// 2. TypeError
// 3. SyntaxError
// 4. URIError

const user = {email:'chemicalstan@gmail.com'};
try {
    // This returns a ReferenceError
        // myFunction(); 
    // This returns a TypeError
        // null.myFunction();
    // This returns a SyntaxError
        // console.log(eval('Hello World'));  // This evaluates js that are within a string
    // This returns a URIError
        // decodeURIComponent('%');   
        
    // Creating/Throwing a new Error
        if (!user.name) {
            // throw 'User Has No Name';
        // Format the error to be thrown
            throw new SyntaxError('user has no name');
        }
} catch (err) {
        // This returns the entire Error
    console.log(err);
        // This returns the error Message
    // console.log(err.message)
        // This returns the error Name
    // console.log(err.name);
        // This validates a particular type of Error
    // console.log(err instanceof ReferenceError) // Returns boolean
} finally {
    console.log('finally runs regardless of the outcome.');
}

console.log('application continues')