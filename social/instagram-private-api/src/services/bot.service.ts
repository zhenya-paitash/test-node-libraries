import { IgApiClient, MediaRepositoryLikersResponseUsersItem } from 'instagram-private-api'
import { config } from 'dotenv'

export default class BotService {
  ig: IgApiClient
  user: string
  password: string
  accountToParse: string = 'harshil_designer'
  usersToFollow: MediaRepositoryLikersResponseUsersItem[]

  constructor() {
    config()
    this.user = process.env.INST_USER
    this.password = process.env.INST_PASS
    this.ig = new IgApiClient()
  }

  async login() {
    this.ig.state.generateDevice(this.user)
    await this.ig.simulate.preLoginFlow()
    const loggedInAccount = await this.ig.account.login(this.user, this.password)
    await this.ig.simulate.postLoginFlow()
    console.log(loggedInAccount.full_name)
  }

  async run() {
    console.log('logged in ...')
    await this.login()
    setInterval(async () => {
      if (!this.usersToFollow || this.usersToFollow.length < 1) {
        console.log('getting latest posts likers ...')
        await this.getLatestPostLikers()
      } else {
        console.log(`we gave ${this.usersToFollow.length} users we can follow`)
        const user = this.usersToFollow.pop()
        console.log(`attempting following user: ${user.username}`)
        await this.follow(user.pk)
      }
    }, 60000)
  }

  async getLatestPostLikers() {
    const id = await this.ig.user.getIdByUsername(this.accountToParse)
    const feed = await this.ig.feed.user(id)
    const posts = await feed.items()
    const likers = await this.ig.media.likers(posts[0].id)

    this.usersToFollow = await likers.users
  }

  async follow(userId: number) {
    await this.ig.friendship.create(userId)
  }
}