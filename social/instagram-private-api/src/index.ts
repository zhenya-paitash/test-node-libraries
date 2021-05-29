import express from 'express'
import BotService from './services/bot.service'

const 
  app = express(),
  PORT = process.env.PORT || 8080,
  bot = new BotService()

app.get('/', (req, res) => {
  res.send('HI')
})

app.listen(PORT, () => {
  // ? Login TO ISTAGRAM
  bot.run()

  // tslint:disable-next-line:no-console
  console.log(`Server started at http://localhost:${PORT}`)
})