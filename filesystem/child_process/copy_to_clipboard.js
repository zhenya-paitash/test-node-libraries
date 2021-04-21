const copyToBuffer = (str = 'copy from script') => {
  const proc = require('child_process').spawn('clip');
  proc.stdin.write(str);
  proc.stdin.end();
};

copyToBuffer(...process.argv.splice(2));

// require('child_process')
//   .spawn('clip')
//   .stdin
//   .end(require('util').inspect(String('hello')));
