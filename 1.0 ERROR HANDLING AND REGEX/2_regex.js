// Regular Expression is used to specify a particular patern
// To be followed

// Regex flags::::::
// 1. i // This is used to make a regular expression case insensitive. This is used after the closing slash
// 2. g // This is a global search flag used to search throughout the prgrph for every instance of the regex
let re;
re = /hello/;
re = /hello/i;
// re = /hello/g;s

// console.log(re);
// Some Regular Expression Methods and Properties

    // .source - This omits the slashes and returns the content only
// console.log(re.source);
    
    // exec() - This returns a array with the index at which the regex's 
    // source matches or null when the source is not found within the
// const result = re.exec('Okay, hello mister Stanley');
// console.log(result); // This returns the array
// console.log(result[0]); // This returns the regex source in the result
// console.log(result.index); // This returns the index at which the key word is found
// console.log(result.input); // This returns the entire input within the exec method

    // test() - This method returns true or false if there is a match
// const result = re.test('Hello');
// console.log(result)

    // match() - This does thesame thing as exec but just inside out
// const str = 'hello fams';
// const result = str.match(re);
// console.log(result)

    // search() - This returns the index of the regex in a string and returns
    // -1 when not found
// const str = 'Jide, Hello dear',
// result = str.search(re);
// console.log(result)

    // replace() - This replaces the regex with a new string
const str = 'Hello world';
const newStr = 'hi';
result = str.replace(re, newStr);
console.log(result)