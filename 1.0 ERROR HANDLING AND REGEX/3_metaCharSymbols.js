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

// Brackets [] - Character Sets

re = /gr[ae]y/;  // Must be an a or e
re = /[GF]ray/;  // Must start with a G or F
re = /[^GF]ray/;  // Matches anything except a G or F
re = /[A-Z]ray/;  // Matches any uppercase letter
re = /[A-z]ray/;  // Matches any letter of any case
re = /[0-9][0-2]ray/;  // Matches any any number


// Curly Braces {} - Quantifiers
re = /hel{2}o/i;  // 'l' must occur exactly {m} amount of times
re = /hel{2,4}o/i;  // 'l' must occur between {m and n} amount of times
re = /hel{2,}o/i;  // 'l' must occur atleast {m} amount of times
re = /[0-9]x{3}$/;  // only 'x' must occur exactly {m} times
re = /[0-9]t{3}/;  // must have at least {m} amount of 't' after a number


// Brackets () - Grouping
re = /([0-9]x){3}/; // must End with {m} amount of "'any num'x"
re = /^([0-9]x){4}$/; // must be exactly {m} amount of "'any num'x"

// Short Hand Character
re = /\w/;  // Word Character - Alphanumeric or _
re = /\w+/;  // + = One or more word character
re = /\W/;  // Non-word Character
re = /\d/;  // match any digit [a digit must be included]
re = /\d+/;  // match any digit appearing 1 or more times [a digit must be included]
re = /\D/;  // match any non-digit [a non-digit must be included]
re = /\s/;  // match any whitespace char
re = /\S/;  // match any non-whitespace char
re = /Hi\b/i;  // word boundary - word must be exact with the regex
re = /Hi\B/i;  // word non-boundary - word must not be exact with the regex

// Assertions - Like conditionals
re = /x(?=y)/;  // Match x only if followed by y
re = /x(?!y)/;  // Match x only if not followed by y

// String to match
const str = 'hi, my name is x';

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