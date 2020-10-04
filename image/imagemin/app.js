const imagemin = require('imagemin');
// const imageminJpegtran = require('imagemin-jpegtran');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');

imagemin(['img/original/*.{jpg,png}'], {
  destination: 'img/compress',
  plugins: [
    // imageminJpegtran(),
    imageminMozjpeg(),
    imageminPngquant({ quality: [0.6, 0.8] }),
  ],
}).then(files => console.log(files));
