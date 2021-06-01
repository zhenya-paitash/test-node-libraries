const log = console.log
import chalk from 'chalk'
// Function (anonymous)] Chalk {
//   constructor: [Function (anonymous)],
//   Instance: [class ChalkClass],
//   supportsColor: { level: 3, hasBasic: true, has256: true, has16m: true },
//   stderr: [Function (anonymous)] Chalk {
//     constructor: [Function (anonymous)],
//     Instance: [class ChalkClass],
//     supportsColor: { level: 3, hasBasic: true, has256: true, has16m: true }
//   }
// }

// HELLO WORLD
log(
  chalk.white.bgRed`H`,
  chalk.cyan.bold`e`,
  chalk.black.bgYellowBright`l`,
  chalk.greenBright.bgYellow`l`,
  chalk.blue.italic`o`,
  ' ',
  chalk.magenta.bgGray`W`,
  chalk.rgb(120, 10, 100).bgWhite.bold`o`,
  chalk.yellowBright.underline(`r`),
  chalk.red.bgWhite.bold`l`,
  chalk.yellowBright.bgBlackBright.italic`d`
)
