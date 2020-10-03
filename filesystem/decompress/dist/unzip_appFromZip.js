const decompress = require('decompress');

decompress('unzipme.zip', 'dist')
  .then((files) => console.log(files))
  .catch((err) => {
    throw err;
  });
