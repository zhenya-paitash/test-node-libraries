const 
  alpha = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM',
  numbers = '0123456789',
  symbols = '!@#$%^&*_-+='

const createPassword = (length = 12, hasNumbers = true, hasSymbols = true) => {
  // create option chars string
  let chars = alpha
  hasNumbers && (chars += numbers)
  hasSymbols && (chars += symbols)

  return generatePassword(length, chars)
}

const generatePassword = (length, chars) => {
  // generate password
  let password = ''
  for (let i = 0; i < length; i++) 
    password += chars.charAt(Math.floor(Math.random() * chars.length))

  return password
}

module.exports = createPassword
