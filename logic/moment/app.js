const moment = require('./moment.min.js');
const date = new Date();

// FORMAT
// import moment from 'moment';
// import 'moment/locale/es';
// moment.locale('ru');
console.log(moment.locale());

console.log(moment().format('LTS'));
console.log(moment().format('llll'));
console.log(moment(date).format('MMM Do YY'));
console.log(moment(new Date(date)).format('MMMM Do YYYY, [hello] h:mm:ss a'));

// RELATIVE TIME
console.log(moment('21_051993', 'DD_MMYYYY').fromNow());
console.log(moment().startOf('day').fromNow());
console.log(moment().endOf('day').fromNow());

// CALENDAR TIME
console.log(moment().calendar());
console.log(moment().subtract(5, 'days').calendar());
