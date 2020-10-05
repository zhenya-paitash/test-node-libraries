const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('db.json');
const db = low(adapter);

if (!db.size().value()) {
  db.defaults({ scriptRun: 0, user: {}, messages: [] }).write();
  // const newState = { scriptRun: 0, user: {}, messages: [] };
  // db.setState(newState);
  db
    .set('user.name', 'zhenya paitash')
    .set('user.age', 27)
    .set('user.languages', ['html', 'css', 'javascript', 'python'])
    .set('user.github', 'github.com/zhenya-paitash')
    .get('messages').push({ id: 1, text: 'My first msg.' })
    .write();
}

db.update('scriptRun', i => ++i).write();

// console.log(db.read());
// console.log(db.get('messages').find({ id: 1 }).value());
// console.log(db.has('user').value());
// console.log(db.get('messages').map('text').value());

// const msgNumber = db.get('messages').value().length + 1;
// db.get('messages').push({ id: msgNumber, text: `Custom message № ${msgNumber}` }).write();

console.log(db.getState());