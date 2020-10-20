const faker = require('faker');
// {     
//   locales: {},
//   locale: 'en',
//   localeFallback: 'en',
//   definitions: {},
//   fake: [Function: fake],
//   unique: [Function: unique],
//   random: Random {},
//   helpers: Helpers {},
//   name: Name {},
//   address: Address {},
//   company: Company {},
//   finance: Finance {},
//   image: Image {},
//   lorem: Lorem {},
//   hacker: Hacker {},
//   internet: Internet {},
//   database: Database {},
//   phone: Phone {},
//   date: _Date {},
//   time: _Time { recent: [Function (anonymous)] },
//   commerce: Commerce {},
//   system: System {},
//   git: Git {},
//   vehicle: Vehicle {}
// }


// 'https://cdn.rawgit.com/Marak/faker.js/master/examples/browser/index.html';
class FakeUser {
  constructor({ ...args }) {
    for (let i in args) this[i] = args[i];
  }

  info() { console.log(this) }
  get(field = 'name') { console.log(this[field]) }
};

function createFakeUser(locale = faker.random.locale()) {
  faker.setLocale(locale);
  
  return new FakeUser({
    name:     faker.name.findName(),
    gender:   faker.name.gender(),
    gender:   faker.random.boolean() ? 'male' : 'female',
    age:      Math.floor(18 + Math.random() * 36),
    locale,
    company:  faker.company.companyName(),
    country:  faker.address.country(),
    city:     faker.address.city(),
    phone:    faker.phone.phoneNumber(),
    email:    faker.internet.email(),
    password: faker.internet.password(),
    username: faker.internet.userName(),
    avatar:   faker.internet.avatar(),
    lastPost: faker.lorem.text(),
  });
}

const ruPerson = createFakeUser('ru');
const enPerson = createFakeUser('en');
const randPerson = createFakeUser();

ruPerson.info();
enPerson.get();
randPerson.get('email');