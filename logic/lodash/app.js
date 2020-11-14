const _ = require('lodash');

// array
console.log(_.chunk(['h', 'e', 'l', 'l', 'o'], 2));  // [ [ 'h', 'e' ], [ 'l', 'l' ], [ 'o' ] ]
console.log(_.fill(Array(4), 'hi'));                 // [ 'hi', 'hi', 'hi', 'hi' ]
console.log(_.uniq([1,1,2,2,3,4,5,4,6,99]));         // [1, 2, 3, 4, 5, 6, 99]
console.log(_.shuffle([1, 2, 3, 4, 5]));             // example: [5, 3, 4, 1, 2]

// collection
console.log(_.orderBy([                     // [
  { name: 'John', age: 23 },                //   { name: 'Mia', age: 17 },
  { name: 'Doe', age: 23 },                 //   { name: 'Doe', age: 23 },
  { name: 'Mia', age: 17 }                  //   { name: 'John', age: 23 }
], ['age', 'name'], ['asc', 'asc']));       // ] 

//date
_.defer(stamp => console.log(_.now() - stamp), _.now());

// function
_.delay(txt => {
  console.log(txt)
}, 3000, 'hello after 3s');
console.log(_.flip((...args) => _.toArray(args))('f', 'l', 'i', 'p'));