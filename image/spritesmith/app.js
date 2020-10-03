const Spritesmith = require('spritesmith');
const fs = require('fs');
const path = require('path');


const sprites = [
  path.join(__dirname, 'img', '1.jpg'),
  path.join(__dirname, 'img', '2.jpg'),
  path.join(__dirname, 'img', '3.jpg'),
];

Spritesmith.run({
  src: sprites,
  algorithm: 'binary-tree'
}, function handleResult(err, res) {
  if (err) throw err;

  fs.writeFileSync('sprite.jpg', res.image);
  fs.writeFileSync('sprite_coord.json', JSON.stringify(res.coordinates));
  console.log(res.coordinates);
  console.log(res.properties);
});
