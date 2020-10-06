const { createGzip, createUnzip } = require('zlib');
const fs = require('fs');


archive('compress', 'example.txt', 'build.gz')
  .then(() => console.log('file compressed'))
  .catch(err => { throw err })

// archive('decompress', 'build.gz', 'example2.txt')
//   .then(() => console.log('file decompressed'))
//   .catch(err => { throw err })


async function archive(what, from, to) {
  const gzip = what === 'decompress' ? createUnzip() : createGzip();
  const input = fs.createReadStream(from);
  const output = fs.createWriteStream(to);
  await input.pipe(gzip).pipe(output);
}

