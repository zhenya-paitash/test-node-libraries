const decompress = require('decompress');
const path = require('path');

decompress('unzipme.zip', 'dist', {
  filter: file => path.extname(file.path) !== '.txt',
  map: file => {
    file.path = `unzip_${file.path}`;
    return file;
  }
})
  .then(files => console.log(files))
  .catch(err => {
    throw err;
  });
