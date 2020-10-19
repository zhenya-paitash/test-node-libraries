const uuid = require('uuid');
// {
//   v1: [Getter],
//   v3: [Getter],
//   v4: [Getter],
//   v5: [Getter],
//   NIL: [Getter],
//   version: [Getter],
//   validate: [Getter],
//   stringify: [Getter],
//   parse: [Getter]
// }


// const { v4: uuidv4 } = require('uuid');
// console.log(uuidv4());

const id = uuid.v4();
console.log(id);                             // *85543c9f-8bc2-401e-bfad-f1491f4aad23*
console.log(uuid.version(id));               // 4
const uint8array16 = uuid.parse(id);  
console.log(uint8array16);                   // Uint8Array(16) [...]
console.log(uuid.stringify(uint8array16));   // *id*
console.log(uuid.validate(id + '123'));      // false
