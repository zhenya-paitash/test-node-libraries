const { compareAsc, format } = require('date-fns')

const dateOne = format(new Date(2007, 5, 21), 'dd.MM (yyyy)')
const dateTwo = format(new Date(2001, 9, 11), 'yyyy dd.MM')
console.log(dateOne)
console.log(dateTwo)

console.log([new Date(2002,1,1), new Date(2001,1,1)].sort(compareAsc))
