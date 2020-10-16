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
    console.log(res);
    fs.writeFileSync('colors.html', `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Colors From Image</title>
        <style>.color{width: 100px;height: 100px;}</style>
      </head>
      <body>
        <div class="color" style="background-color: ${res[0]};">${res[0]}</div>
        <div class="color" style="background-color: ${res[1]};">${res[1]}</div>
        <div class="color" style="background-color: ${res[2]};">${res[2]}</div>
        <div class="color" style="background-color: ${res[3]};">${res[3]}</div>
        <div class="color" style="background-color: ${res[4]};">${res[4]}</div>
        <div class="color" style="background-color: ${res[5]};">${res[5]}</div>

        <img src="img/1.jpg">
      </body>
      </html>
    `);
  })
  .catch(err => console.error(err.message));