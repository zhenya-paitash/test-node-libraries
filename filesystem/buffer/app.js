// [Function: Buffer] {
//   poolSize: 8192,
//   from: [Function: from],
//   of: [Function: of],
//   alloc: [Function: alloc],
//   allocUnsafe: [Function: allocUnsafe],        
//   allocUnsafeSlow: [Function: allocUnsafeSlow],
//   isBuffer: [Function: isBuffer],
//   compare: [Function: compare],
//   isEncoding: [Function: isEncoding],
//   concat: [Function: concat],
//   byteLength: [Function: byteLength],
//   [Symbol(kIsEncodingSymbol)]: [Function: isEncoding]
// }


// ** СОЗДАНИЕ **
// Для создания пустого буфера размером в 10 байт используйте метод Buffer.alloc().
const buf10 = Buffer.alloc(10);
console.log(buf10, buf10.length);
// Чтобы заполнить создаваемый буфера значением по умолчанию, просто передайте это значение Buffer.alloc() вторым параметром
const buf20hello = Buffer.alloc(20, 'hello');
console.log(buf20hello, buf20hello.length);
// Для создания буфера сразу нужного размера в Node js имеется метод Buffer.from(), который принимает строку и создает под нее буфер.
console.log(Buffer.from('hello from buffer'));
// Вторым необязательным параметром методу Buffer.from() можно передать кодировку.
console.log(Buffer.from('BUFFER', 'base64'));


// ** ЗАПИСЬ **
// Чтобы записать данные в пустой или уже заполненный буфер, используйте метод [Buffer instance].write(), который принимает следующие параметры:
// - строку для записи;
// - позицию, с которой необходимо начать запись;
// - длину от изначальной строки, которую необходимо записать;
// - кодировку (по умолчанию 'utf8').
// Обязательным аргументом является только строка для записи.
let emptyBuf = Buffer.alloc(10);
emptyBuf.write('no empty');
console.log(emptyBuf, emptyBuf.length);
emptyBuf.write('hello', 3, 2);
console.log(emptyBuf);


// ** ЧТЕНИЕ **
// Для получения данных из буфера в том формате, в котором они в него заносились, в Node js имеется метод [Buffer instance].toString(), принимающий следующие необязательные параметры:
// - кодировку (по умолчанию 'utf8');
// - позицию, с которой необходимо начать чтение;
// - позицию, на которой закончить чтение.
console.log(emptyBuf.toString());
console.log(buf20hello.toString('utf8', 5, 15));


// ** Преобразование в JSON **
// Объект Node js класса Buffer может быть преобразован в формат JSON с помощью метода [Buffer instance].toJSON().
console.log(emptyBuf.toJSON().data.map(i => String.fromCharCode(i)).join``);


// ** Buffer API **
// Buffer.isEncoding() - принимает кодировку и возвращает true, если ее испольщование допустимо при работе с буфером;
console.log(Buffer.isEncoding('ascii'));
// Buffer.isBuffer() - принимает данные и возвращает true, если они являются экземпляром класса Buffer;
console.log(Buffer.isBuffer('ascii'));
// Buffer.byteLength() - возвращает длину переданной строки в байтах (это не то же самое, что количество символов в строке), вторым необязательным параметром можно передать кодировку;
console.log(Buffer.byteLength(emptyBuf, 'base64'));
// Buffer.concat() - принимает массив объектов класса Buffer и объединяет их в один, вторым необязательным параметром можно передать длину итогового буфера.
console.log(Buffer.concat([ emptyBuf, buf20hello ]));