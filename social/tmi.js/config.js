if (process.env.npm_lifecycle_event === 'dev') require('dotenv').config()

module.exports = {
  options: {
    debug: true,
    messagesLogLevel: 'info',
  },
  connection: {
    reconnect: true,
    secure: true,
  },
  identity: {
    username: process.env.TWITCH_USERNAME,
    password: process.env.TWITCH_PASSWORD,
  },
  channels: [process.env.TWITCH_CHANNEL],
}
