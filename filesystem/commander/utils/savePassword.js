const fs = require('fs'),
  path = require('path'),
  os = require('os'),
  chalk = require('chalk')

const savePassword = password => {
  fs.open(path.join(__dirname, '../', 'password.txt'), 'a', 666, (e, id) => {
    fs.write(id, password + os.EOL, null, 'utf-8', () => {
      fs.close(id, () => {
        console.log(chalk.greenBright`Password saved to 'password.txt'`)
      })
    })
  })
}

module.exports = savePassword
