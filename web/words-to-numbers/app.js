const { wordsToNumbers } = require('words-to-numbers');
// {
//   wordsToNumbers: [Function: wordsToNumbers],
//   default: [Function: wordsToNumbers]
// }

const arr = [
  'fifty sixty',
  'one two three',
  'scnd',
  'one hundred and ninety ninth',
  'too thousant and fiev',
  'five',
  25,
  'one thirty',
  'nini'
];

console.table(arr.map(i => {
  // if not string : return TypeError: text.split is not a function
  if (typeof i === 'string')
    return {
      string :          i,
      default:          wordsToNumbers(i),
      fuzzy:            wordsToNumbers(i, { fuzzy: true }),
      implied_hundreds: wordsToNumbers(i, { impliedHundreds: true })
    };
}));