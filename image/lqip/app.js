const fs = require('fs');
const lqip = require('lqip');
// {
//   base64: [Function: base64], 
//   palette: [Function: palette] 
// }


// Base64
// const file = './img/1.jpg';
// lqip.base64(file)
//   .then(res => console.log(res))
//   .catch(err => {throw err});

// Palette
lqip.palette(__dirname + '/img/1.jpg')
  .then(res => {
    fs.writeFileSync('colors.html', `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Colors From Image</title>
        <style>
          .color{width:100px;height:100px;float:left;}
          img{position:absolute;right:0;bottom:0;}
        </style>
      </head>
      <body>
        ${res
          .map(i => `<div class="color" style="background-color: ${i};">${i}</div>`)
          .join('\n')
        }
        <img src="img/1.jpg">
      </body>
      </html>
    `);
  })
  .catch(err => console.error(err.message));