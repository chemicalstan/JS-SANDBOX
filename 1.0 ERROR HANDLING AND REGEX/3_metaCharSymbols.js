let re;
// Literal Characters
re = /hello/;
re = /hello/i;  // case insensitivity

// Metacharacter symbols  

re = /^h/i;  // Must start with h
re = /world$/i;  // Must end with world
re = /h.llo/i; // Can have at most one random character to replace d fullstop
re = /^h*llo/i;  // zero or any char to replace the asterics and anything before
re = /gra?e?y/i;  // a and e are optional 
re = /gra?e?y\?/i;  // Escapes the question mark


const str = 'gray?';

// Log results
const result = re.exec(str);
console.log(result);

function reTest(re, str){
    if(re.test(str)){
        console.log(`${str} matches ${re}`);
    }else{
        console.log(`${str} doesn't match ${re}`);
    }
}

reTest(re, str);