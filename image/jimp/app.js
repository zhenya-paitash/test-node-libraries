const Jimp = require('jimp');

// Jimp.read('img/test.jpg', (err, img) => {
//   if (err) throw err;
//   img.quality(50).write('img/test_q50.jpg');
// });

Jimp.read({
  url: 'https://images.unsplash.com/photo-1601664023215-69210f0a11ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1834&q=80',
  headers: {},
})
  .then(img =>
    img
      .resize(720, img.bitmap.height * (720 / img.bitmap.width))
      .quality(25)
      .write('img/img.jpg')
  )
  .catch(err => { throw err });

(async () => {
  const img = await Jimp.read({
    url: 'https://images.unsplash.com/photo-1601664023215-69210f0a11ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1834&q=80'
  });

  // Manual manipulation
  img.clone().scan(0, 0, img.bitmap.width, img.bitmap.height, function(x, y, idx) {
    // Get colors
    // const red = this.bitmap.data[idx + 0];
    // const green = this.bitmap.data[idx + 1];
    // const blue = this.bitmap.data[idx + 2];
    // const alpha = this.bitmap.data[idx + 3];

    // If x less than y
    if (x < y)
      // Set red chanel to 255
      this.bitmap.data[idx + 0] = 255
  }).writeAsync('img/colored.jpg');

  // Ghost effect - src, x, y, [{ mode, opS, opD }]
  img.clone().composite(img.clone(), 5, 0, {
    mode: Jimp.BLEND_MULTIPLY,
    opacitySource: 0.5,
    opacityDest: 0.9
  }).writeAsync('img/ghost.jpg');

  // Convolute
  img.clone()
    .convolute([[-2, -1, 0], [-1, 1, 1], [0, 1, 2]])
    .writeAsync('img/edit-shapes.png')  
    
  // Text on IMG
  Jimp.loadFont(Jimp.FONT_SANS_32_WHITE)
    .then(font => img.clone()
      .resize(480, img.bitmap.height * (480 / img.bitmap.width))
      .print(font, 10, 10, {
        text: 'hello',
        alignmentX: Jimp.HORIZONTAL_ALIGN_LEFT,
        alignmentY: Jimp.VERTICAL_ALIGN_MIDDLE
      }, (err, image, { x,y }) => {
        !err && image.print(font, 10, y+20, 'from', (err, image, { x,y }) => {
          !err && image.print(font, 10, y+20, 'JIMP!!!')
        });
      })
      .write('img/font.jpg'))
    .catch(err => console.error('FONT error: ', err))
})();