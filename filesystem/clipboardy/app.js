import clipboardy from 'clipboardy'

const copyToClipboard = str => {
  str || (str = 'default string')
  clipboardy.writeSync(str)

  return console.log(`Ctrl + V: `, clipboardy.readSync())
}

copyToClipboard(process.argv.splice(2).join` `)
