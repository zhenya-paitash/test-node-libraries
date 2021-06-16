import { AwesomeQR } from 'awesome-qr'
import fs from 'fs'

const backgroundImage = fs.readFileSync('./background.png')
const logoImage = fs.readFileSync('./logo.png')

const buffer = await new AwesomeQR({
  text: 'https://github.com/zhenya-paitash',
  size: 500,
  backgroundImage,

  // OPTIONAL
  dotScale: 0.6,
  margin: 25,
  // autoColor: false,
  // colorDark: '#313131',
  // colorLight: '#7952B3',
  // maskPattern: 9,

  // LOGO
  logoImage,
  logoMargin: 0,
  // logoCornerRadius: 50,
  logoScale: 0.1,
}).draw()

fs.writeFile('qrcode.png', buffer, () => console.log('DONE!'))
