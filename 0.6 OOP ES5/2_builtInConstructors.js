// IN built Constructors
    //String
const name1 = 'Stanley';
const name2 = new String('Stanley');
      name2.firstName = 'Chukwuebuka';

// if (name2 === 'Stanley') {
//     console.log('Yea');
// }else{
//     console.log('Nah');
// }

    //   Numbers
const num1 = 4,
      num2 = new Number(444);
// console.log(typeof num2);

    // Boolean
const bool1 = false,
      bool2 = new Boolean(false);
    // if (bool2) {
    // console.log('Yea');
    // }else{
    // console.log('Nah');
    // }

    // FUNCTION
// primitive
const getSum1 = function(x, y){
    return x+y;
}
// constructor
const getSum2 = new Function('x', 'y', 'return x+y');
// console.log(getSum2(3,2));
    // OBJECT
// primitive
const John = {name:'John'};
// constructor type
const Paul = new Object({name: 'Paul'});
console.log(Paul);

    // ARRAY
// primitive
const arr1 = [1,2,3,4,5];
// constructor type
const arr2 = new Array(1,2,3,4,5);
console.log(arr2);

    // REGULAR EXPRESSION
// primitive
const re1 = /\w+/;
// constructor type
const re2 = new RegExp('\\w+');
console.log(re2);