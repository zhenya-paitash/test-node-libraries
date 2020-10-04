const Jimp = require('jimp');

// Jimp.read('test.jpg', (err, img) => {
//   if (err) throw err;
//   img.quality(50).write('test_q50.jpg');
// });

Jimp.read({
  url: 'https://images.unsplash.com/photo-1601664023215-69210f0a11ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1834&q=80',
  headers: {},
})
  .then(img =>
    img
      .resize(720, img.bitmap.height * (720 / img.bitmap.width))
      .quality(25)
      .write('img.jpg')
  )
  .catch(err => { throw err });
