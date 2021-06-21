import say from 'say'
import fs from 'fs'

// SAVE TO FILE
const user = process.env.USERNAME
const filename = `hello_${user}.wav`

say.export(`Hello, ${user}`, '', 0.9, filename, err => {
  if (err) return console.error(err)
  console.log(`File has been saved to ${filename}`)
})

// SAVE TO FILE from other file
const alice = fs.readFileSync('./alice.txt').toString()

say.export(alice, '', 1, 'alice.wav', err => {
  if (err) return console.error(err)
  console.log('Alice file has been saved!')
})
