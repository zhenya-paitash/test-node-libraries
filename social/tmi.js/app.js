const tmi = require('tmi.js')
const config = require('./config')

const client = new tmi.Client(config)
const entries = {}

client.connect().catch(console.error)
client.on('message', (channel, tags, msg, self) => {
  if (self) return

  const { username: user, mod: isModerator } = tags

  switch (msg) {
    case '!hello':
      return client.say(channel, `@${user}, hello!`)
    case '!coin':
      const flip = ['Орел', 'Решка'][Math.floor(Math.random() * 2)]
      return client.say(
        channel,
        `@${user} подбрасывает монетку и выпадает... ${flip}`
      )
    case '!enter':
      entries[user] = user
      return client.say(channel, `You have been entered, @${user}!`)
    case '!pickWinner':
      const participants = Object.values(entries)
      const winner =
        participants[Math.floor(Math.random() * participants.length)]
      return client.say(channel, `Winner is @${winner}`)
  }
})
