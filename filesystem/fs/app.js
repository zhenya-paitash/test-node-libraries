const fs = require('fs');
const path = require('path');
const color = require('./color.js');


// Async
readFile('text.txt');
readFile('data.json');
// Sync
const lyrics = fs.readFileSync('lyrics.txt').toString();
console.log(color.FgYellow, lyrics);

// fs.mkdir('./delete_me', e => {
//   if (e && e.code === 'EEXIST') console.log(color.BgRed, e)
//   else console.log(color.FgGreen, 'Folder Created!');
// });

// fs.rmdir('./delete_me', e => {
//   if (e) console.log(color.BgRed, e)
//   else console.log(color.FgGreen, 'Folder Removed!');
// });

fs.readdir('.', (err, files) => {
  files.forEach(file => console.log(color.FgGreen, path.join(__dirname, file)));
});



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
        console.log(color.BgRed, 'Check extname file');
    }
  });
}