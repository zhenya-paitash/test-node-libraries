const archiver = require('archiver');
const fs = require('fs');

const output = fs.createWriteStream(__dirname + '/build.zip');
const arch = archiver('zip', {
  zlib: { level: 9 }
});

output.on('close', () => console.log(arch.pointer() + ' total bytes'));
arch.on('warning', err => err.code === "ENOENT" 
  ? console.log("ENOENT", err)
  : process.exit(1)); 
arch.on('error', err => { throw err });

arch.pipe(output);

arch.append('Hello World!', { name: 'hi.txt' });
const app = fs.createReadStream(__dirname + '/app.js');
arch.append(app, { name: 'app.js' });
arch.file('package.json', { name: 'config.json' });
arch.directory('../zlib/', 'zlib');

arch.finalize();