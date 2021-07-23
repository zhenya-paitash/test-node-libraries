#!/usr/bin/env node
const { program } = require('commander')
const chalk = require('chalk')
const clipboardy = require('clipboardy')
const log = console.log
const createPassword = require('./utils/createPassword')
const savePassword = require('./utils/savePassword')

program.version('1.0.0').description('Simple Password Generator')
program
  .option('-l, --length <number>', 'length of password', '12')
  .option('-s, --save', "save password to 'password.txt'")
  .option('-nn, --no-numbers', 'remove numbers')
  .option('-ns, --no-symbols', 'remove symbols')
  .parse()

// OPTIONS
const { length, save, numbers, symbols } = program.opts()

// GET generated password
const generatePassword = createPassword(length, numbers, symbols)

// SAVE to file 'password.txt'
// save && savePassword(generatePassword)
if (save) savePassword(generatePassword)

// Copy to CLIPBOARD
clipboardy.writeSync(generatePassword)

// OUTPUT generated password
log(chalk.greenBright`Generated Password: ` + chalk.bold(generatePassword))
log(chalk.yellowBright`Password copied to clipboard!`)
