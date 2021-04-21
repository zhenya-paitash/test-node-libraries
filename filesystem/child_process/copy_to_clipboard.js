const copyToBuffer = (str = 'copy from script') => {
  if (process.platform === 'win32') {
    const proc = require('child_process').spawn('clip');
    proc.stdin.write(str);
    proc.stdin.end();

    return console.log('Copied to clipboard: Use Ctrl + V');
  }
};

copyToBuffer(...process.argv.splice(2));

// require('child_process')
//   .spawn('clip')
//   .stdin
//   .end(require('util').inspect(String('hello')));
