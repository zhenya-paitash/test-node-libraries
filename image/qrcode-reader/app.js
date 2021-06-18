// IMPORTS
const QrCode = require('qrcode-reader'),
  Jimp = require('jimp'),
  fs = require('fs')

// ERROR
function errorHandler(err) {
  console.error(err)
  process.exit(1)
}

// IMAGE
const scanCode = fs.readFileSync(__dirname + '/qrcode.png')
Jimp.read(scanCode, (err, image) => {
  if (err) return errorHandler(err)

  const qr = new QrCode()
  qr.callback = function (err, res) {
    if (err) errorHandler(err)

    console.log(res.result)
    console.log(res)
  }

  // DECODE
  qr.decode(image.bitmap)
})
