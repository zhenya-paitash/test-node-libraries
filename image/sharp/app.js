const sharp = require('sharp');
const fs = require('fs');
const axios = require('axios');

(async function () {
  try {
    const image1 = 'img/original/1.jpg';
    const image2 = 'img/original/2.jpg';
    const imageUrl = (await axios({
      url: 'https://images.unsplash.com/photo-1601666703585-964591b026c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1700&q=80',
      responseType: 'arraybuffer'
    })).data;

    // Convert
    const imageToWebp = await sharp(image1).webp().toFile('./img/sharpes/webp.webp');
    console.log(imageToWebp);

    // Applies effects
    const imageGrayscale = await sharp(image1).grayscale().webp().toBuffer();
    fs.writeFileSync('img/sharpes/grayscale.webp', imageGrayscale);

    // Resize
    await sharp(image2).resize(640, 480).png().toFile('./img/sharpes/resize.png');
    
    // Threshold
    await sharp(image2).threshold(100).png().toFile('./img/sharpes/threshold.png');

    // Brightness .. and blur
    await sharp(image1).modulate({ hue: 180 }).blur(20).jpeg().toFile('img/sharpes/modulate.jpeg');

    // Create new image
    const newImage = await sharp({
      create: {
        width: 1920,
        height: 1080,
        channels: 4,
        background: { r: 255, g: 0, b: 0, alpha: 0.5 }
      }
    }).png().toFile('img/sharpes/create.png');

    // From URL Buffer to webp file
    await sharp(imageUrl).webp().toFile('img/sharpes/urlbuffer.webp');

  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
