import Joi from 'joi'

const joiSchema = Joi.object({
  // USER
  firstname: Joi.string().alphanum().min(3).max(200).required(),
  lastname: Joi.string().alphanum().min(3).max(200).required(),
  email: Joi.string()
    .regex(
      /[a-z0-9]+([-+._][a-z0-9]+){0,2}@.*?(\\.(a(?:[cdefgilmnoqrstuwxz]|ero|(?:rp|si)a)|b(?:[abdefghijmnorstvwyz]iz)|c(?:[acdfghiklmnoruvxyz]|at|o(?:m|op))|d[ejkmoz]|e(?:[ceghrstu]|du)|f[ijkmor]|g(?:[abdefghilmnpqrstuwy]|ov)|h[kmnrtu]|i(?:[delmnoqrst]|n(?:fo|t))|j(?:[emop]|obs)|k[eghimnprwyz]|l[abcikrstuvy]|m(?:[acdeghklmnopqrstuvwxyz]|il|obi|useum)|n(?:[acefgilopruz]|ame|et)|o(?:m|rg)|p(?:[aefghklmnrstwy]|ro)|qa|r[eosuw]|s[abcdeghijklmnortuvyz]|t(?:[cdfghjklmnoprtvwz]|(?:rav)?el)|u[agkmsyz]|v[aceginu]|w[fs]|y[etu]|z[amw])\\b){1,2}/
    )
    .required(),
  password: Joi.string()
    .regex(
      /(?=^.{8,}$)((?=.*\\d)|(?=.*\\W+))(?![.\\n])(?=.*[A-Z])(?=.*[a-z]).*/
    )
    .required(),
})

const newUser = joiSchema.validate({
  firstname: 'zhenya',
  lastname: 'chel',
  email: 'chelibos@gmail.com',
  password: 'asfd1',
})

console.log(newUser)
