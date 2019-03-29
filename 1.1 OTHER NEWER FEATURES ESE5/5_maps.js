// A Map is an object that holds key value pairs
//  - We can use any type as a key or a value

const map1 = new Map();

    // Set some random keys
    const key1 = 'some string',
          key2 = {},
          key3 = function(){};

    // set map values by key
    map1.set(key1, 'value of key1'),
    map1.set(key2, 'value of key2'),
    map1.set(key3, 'value of key3');

    // get value by key
    console.log(map1.get(key3));

    // count the values in a map
      console.log(map1.size)
    // ITERATING THROUGH MAPS = using for...of loop

      // Getting both the keys and value
      for (let [key, value] of map1) {
            console.log(`${key} = ${value}`)
      }
      // Getting Only the keys
      for (let key of map1.keys()) {
            console.log(key)
      }
      // Getting Only the values
      for (let value of map1.values()) {
            console.log(value)
      }

// CONVERTING TO ARRAYS
      // an array of the key value pairs
      const keyValArr = Array.from(map1);
      console.log(keyValArr)
      // an array of just values
      const valArr = Array.from(map1.values());
      console.log(valArr)
      // an array of just keys
      const keyArr = Array.from(map1.keys());
      console.log(keyArr)
      