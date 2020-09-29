const getMedia = require('./getMedia');
const writeInFile = require('./writeInFile');

getMedia(2)
  .then(media => writeInFile(media))
  .finally(() => console.log('Scraped Done...'));

