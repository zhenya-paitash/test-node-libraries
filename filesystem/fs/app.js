const fs = require('fs');
const path = require('path');
const color = require('./color.js');


// Async
readFile('text.txt');
readFile('data.json');
// Sync
const lyrics = fs.readFileSync('lyrics.txt').toString();
console.log(color.FgYellow, lyrics);

function readFile(file) {
  fs.readFile(file, (err, data) => {
    if (err) throw err;

    const extname = path.extname(file);  // or 'file.split('.').slice(-1)[0]'
    switch(extname) {
      case '.txt': 
        const arr = data.toString().split('\n');
        console.log(color.FgBlue, arr);
        break;
      case '.json':
        const json = JSON.parse(data.toString());
        console.log(color.FgRed, json);
        break;
      default: 
        console.log('Check extname file');
    }
  });
}
