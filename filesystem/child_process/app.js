const cp = require('child_process');
// {
//   _forkChild: [Function: _forkChild],    
//   ChildProcess: [Function: ChildProcess],
//   exec: [Function: exec],
//   execFile: [Function: execFile],        
//   execFileSync: [Function: execFileSync],
//   execSync: [Function: execSync],        
//   fork: [Function: fork],
//   spawn: [Function: spawn],
//   spawnSync: [Function: spawnSync]       
// }

(() => {
  cp.execFile('C://Users/zhenyapaitash/nvim/bin/nvim-qt.exe');

  cp.exec('node log.js', (error, stdout, stderr) => {
    // разница между error и stderr: 
    // error запишет ошибку, если сама команда не запустилась. 
    // stderr запишет ошибку, если команда выполняется, но возвращает вывод в поток ошибок.
    if (error) { throw error };
    if (stderr) { throw stderr };

    console.log('stdout:\n' + stdout);
  });
})();