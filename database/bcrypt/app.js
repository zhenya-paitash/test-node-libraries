const bcrypt = require('bcrypt');
// {
//   genSaltSync: [Function: genSaltSync],
//   genSalt: [Function: genSalt],
//   hashSync: [Function: hashSync],
//   hash: [Function: hash],
//   compareSync: [Function: compareSync],
//   compare: [Function: compare],
//   getRounds: [Function: getRounds]
// }

(async () => {
  try {
    
    const saltRounds = 10;
    const password = 'password123';

    // Generation salt
    const salt = await bcrypt.genSalt(saltRounds);

    // Hash password
    const hashPassword = await bcrypt.hash(password, salt);  // or just 10
    console.log(hashPassword);

    // Compare hash password
    const isMatch = await bcrypt.compare(password, hashPassword);
    console.log(isMatch);

    // Rounds hash
    const rounds = await bcrypt.getRounds(hashPassword);
    console.log(rounds);

  } catch (err) {
    console.log(err);
  }
})();
