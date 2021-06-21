import yosay from 'yosay'
import chalk from 'chalk'

console.log(
  yosay(
    chalk.white.bgRedBright`${process.env.USERNAME}\n Hello World! With chalk`
  )
)
