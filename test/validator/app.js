import validator from 'validator'
import { emailPattern, passwordPattern } from './patterns.js'

function isValidRegister({ username, email, password }, errors = {}) {
  // USERNAME
  validator.isLength(username, { min: 6, max: 200 }) ||
    (errors.username = username)

  // EMAIL
  // validator.isEmail(email) || (errors.email = email)
  validator.matches(email, emailPattern) || (errors.email = email)

  // PASSWORD
  validator.matches(password, passwordPattern) || (errors.password = password)

  return errors
}

const testUser = isValidRegister({
  username: 'zhenya',
  email: 'zhenya@gmail.com',
  password: '123',
})

console.log(testUser)
