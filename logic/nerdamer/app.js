const nerdamer = require('nerdamer');

let x = nerdamer('5 + 6 + 7');
console.log(x.text());
console.log(nerdamer('x^2+2*(cos(x)+x*x)').text());
// need Solve.js
// console.log(nerdamer.solveEquations('x^3+8=x^2+6','x').toString());