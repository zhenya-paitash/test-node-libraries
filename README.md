Node.js libraries
===
![node](https://media.giphy.com/media/kdFc8fubgS31b8DsVu/giphy.gif)

Tree
---
    ├─ database/
    │  ├─ bcrypt/
    │  ├─ faker/
    │  ├─ jsonwebtoken/
    │  ├─ lowdb/
    │  └─ uuid/
    ├─ filesystem/
    │  ├─ archiver/
    │  ├─ child_process/
    │  ├─ decompress/
    │  ├─ download/
    │  ├─ formidable/
    │  ├─ fs/
    │  ├─ multer/
    │  ├─ os/
    │  └─ zlib/
    ├─ http/
    │  ├─ axios/
    │  ├─ http/
    │  └─ request/
    ├─ image/
    │  ├─ imagemin/
    │  ├─ jimp/
    │  ├─ lqip/
    │  ├─ sharp/
    │  └─ spritesmith/
    ├─ web/
    │  ├─ method-override/
    │  ├─ moment/
    │  ├─ morgan/
    │  ├─ nodemailer/
    │  ├─ querystring/
    │  ├─ rss-parser/
    │  └─ tinycolor2/
    └─ web_scraping/
       ├─ cheerio/
       └─ puppeteer/

Libraries
---
package                                   | description | link
:-----------------------------------------|:------------|---:
**DATABASE**                              |
[bcrypt](database/bcrypt)                 | `Библиотека хэширования паролей.` | [ ![npm](https://img.icons8.com/color/36/000000/npm.png "npm") ](https://www.npmjs.com/package/bcrypt) [ ![github](https://img.icons8.com/ios-filled/24/000000/github.png "github") ](https://github.com/kelektiv/node.bcrypt.js)
[faker](database/faker)                   | `Модуль для генерирации поддельных данных в node.js/браузере.` | [ ![npm](https://img.icons8.com/color/36/000000/npm.png "npm") ](https://www.npmjs.com/package/faker) [ ![github](https://img.icons8.com/ios-filled/24/000000/github.png "github") ](https://github.com/Marak/Faker.js)
[jsonwebtoken](database/jsonwebtoken)     | `Модуль для работы с JSON Web Token, или просто JWT. Представляет собой строку, полученную на основе формата JSON, и используется в качестве более безопасной и простой альтернативы сессиям и файлам cookie для авторизации.` | [ ![npm](https://img.icons8.com/color/36/000000/npm.png "npm") ](https://www.npmjs.com/package/jsonwebtoken) [ ![github](https://img.icons8.com/ios-filled/24/000000/github.png "github") ](https://github.com/auth0/node-jsonwebtoken)
[lowdb](database/lowdb)                   | `Маленькая база данных JSON для Node, Electron и браузера. Работает на Lodash.` | [ ![npm](https://img.icons8.com/color/36/000000/npm.png "npm") ](https://www.npmjs.com/package/lowdb) [ ![github](https://img.icons8.com/ios-filled/24/000000/github.png "github") ](https://github.com/typicode/lowdb)
[uuid](database/uuid)                     | `Модуль для генерации UUID (универсального уникального идентификатора), также известного как GUID (глобальный уникальный идентификатор).` | [ ![npm](https://img.icons8.com/color/36/000000/npm.png "npm") ](https://www.npmjs.com/package/uuid) [ ![github](https://img.icons8.com/ios-filled/24/000000/github.png "github") ](https://github.com/uuidjs/uuid)
**FILESYSTEM**                            |
[archiver](filesystem/archiver)           | `Потоковый интерфейс для создания архивов.` | [ ![npm](https://img.icons8.com/color/36/000000/npm.png "npm") ](https://www.npmjs.com/package/archiver) [ ![github](https://img.icons8.com/ios-filled/24/000000/github.png "github") ](https://github.com/archiverjs/node-archiver)
[child_process](filesystem/child_process) | `Предоставляет возможность создавать дочерние процессы.` | -
[decompress](filesystem/decompress)       | `Модуль обеспечивает только распаковку архивов.` | [ ![npm](https://img.icons8.com/color/36/000000/npm.png "npm") ](https://www.npmjs.com/package/decompress) [ ![github](https://img.icons8.com/ios-filled/24/000000/github.png "github") ](https://github.com/kevva/decompress)
[download](filesystem/download)           | `Модуль для скачивания и извлечения файлов.` | [ ![npm](https://img.icons8.com/color/36/000000/npm.png "npm") ](https://www.npmjs.com/package/download) [ ![github](https://img.icons8.com/ios-filled/24/000000/github.png "github") ](https://github.com/kevva/download)
[formidable](filesystem/formidable)       | `Модуль Node.js для анализа данных формы, особенно загрузки файлов.` | [ ![npm](https://img.icons8.com/color/36/000000/npm.png "npm") ](https://www.npmjs.com/package/formidable) [ ![github](https://img.icons8.com/ios-filled/24/000000/github.png "github") ](https://github.com/node-formidable/formidable)
[fs](filesystem/fs)                       | `Модуль для работы с файлами.` | -
[multer](filesystem/multer)               | `Multer — это middleware для фреймворка express для обработки multipart/form-data, нужная в первую очередь при загрузке файлов. Написана как обертка над busboy для ее максимально эффективного использования. ВАЖНО: Multer не обрабатывает никакой другой тип форм, кроме multipart/form-data.` | [ ![npm](https://img.icons8.com/color/36/000000/npm.png "npm") ](https://www.npmjs.com/package/multer) [ ![github](https://img.icons8.com/ios-filled/24/000000/github.png "github") ](https://github.com/expressjs/multer)
[os](filesystem/os)                       | `Модуль предоставляет набор операционных системных методов.` | -
[zlib](filesystem/zlib)                   | `Модуль обеспечивает функциональные возможности сжатия, реализованные с использованием Gzip, Deflate / Inflate и Brotli.` | -
**HTTP**                                  | 
[axios](http/axios)                       | `http-клиент на основе promise для браузера и node.js.` | [ ![npm](https://img.icons8.com/color/36/000000/npm.png "npm") ](https://www.npmjs.com/package/axios) [ ![github](https://img.icons8.com/ios-filled/24/000000/github.png "github") ](https://github.com/axios/axios)
[http](http/http)                         | `Встроенный node.js модуль для использования сервера и клиента http.` | -
[request](http/request)                   | `Модуль для простого способа совершать http-вызовы. Он поддерживает HTTPS и по умолчанию следует перенаправлениям.` | [ ![npm](https://img.icons8.com/color/36/000000/npm.png "npm") ](https://www.npmjs.com/package/request) [ ![github](https://img.icons8.com/ios-filled/24/000000/github.png "github") ](https://github.com/request/request)
**IMAGE**                                 |
[imagemin](image/imagemin)                | `Модуль для уменьшения изображений.` | [ ![npm](https://img.icons8.com/color/36/000000/npm.png "npm") ](https://www.npmjs.com/package/imagemin) [ ![github](https://img.icons8.com/ios-filled/24/000000/github.png "github") ](https://github.com/imagemin/imagemin)
[jimp](image/jimp)                        | `Библиотека обработки изображений для Node, полностью написанная на JavaScript, без собственных зависимостей.` | [ ![npm](https://img.icons8.com/color/36/000000/npm.png "npm") ](https://www.npmjs.com/package/jimp) [ ![github](https://img.icons8.com/ios-filled/24/000000/github.png "github") ](https://github.com/oliver-moran/jimp)
[lqip](image/lqip)                        | `LQIP: заполнитель изображений низкого качества.` | [ ![npm](https://img.icons8.com/color/36/000000/npm.png "npm") ](https://www.npmjs.com/package/lqip) [ ![github](https://img.icons8.com/ios-filled/24/000000/github.png "github") ](https://github.com/zouhir/lqip)
[sharp](image/sharp)                      | `Преобразование больших изображений в распространенных форматах в более мелкие, удобные для Интернета изображения JPEG, PNG и WebP различных размеров.` | [ ![npm](https://img.icons8.com/color/36/000000/npm.png "npm") ](https://www.npmjs.com/package/sharp) [ ![github](https://img.icons8.com/ios-filled/24/000000/github.png "github") ](https://github.com/lovell/sharp)
[spritesmith](image/spritesmith)          | `Модуль преобразования изображений в таблицы спрайтов и координатные карты.` | [ ![npm](https://img.icons8.com/color/36/000000/npm.png "npm") ](https://www.npmjs.com/package/spritesmith) [ ![github](https://img.icons8.com/ios-filled/24/000000/github.png "github") ](https://github.com/twolfson/spritesmith)
**WEB**                                   |
[method-override](web/method-override)    | `Позволяет использовать HTTP-команды, такие как PUT или DELETE, в местах, где клиент не поддерживает их.` | [ ![npm](https://img.icons8.com/color/36/000000/npm.png "npm") ](https://www.npmjs.com/package/method-override) [ ![github](https://img.icons8.com/ios-filled/24/000000/github.png "github") ](https://github.com/expressjs/method-override)
[moment](web/moment)                      | `Библиотека дат JavaScript для анализа, проверки, управления и форматирования дат.` | [ ![npm](https://img.icons8.com/color/36/000000/npm.png "npm") ](https://www.npmjs.com/package/moment) [ ![github](https://img.icons8.com/ios-filled/24/000000/github.png "github") ](https://github.com/moment/moment) [ ![website](https://img.icons8.com/windows/24/000000/home-page.png "website") ](https://momentjs.com/)
[morgan](web/morgan)                      | `Промежуточное ПО регистратора запросов(логов) http для node.js.` | [ ![npm](https://img.icons8.com/color/36/000000/npm.png "npm") ](https://www.npmjs.com/package/morgan) [ ![github](https://img.icons8.com/ios-filled/24/000000/github.png "github") ](https://github.com/expressjs/morgan)
[nodemailer](web/nodemailer)              | `Модуль для работы с почтой в Node.js.` | [ ![npm](https://img.icons8.com/color/36/000000/npm.png "npm") ](https://www.npmjs.com/package/nodemailer) [ ![github](https://img.icons8.com/ios-filled/24/000000/github.png "github") ](https://github.com/nodemailer/nodemailer) [ ![website](https://img.icons8.com/windows/24/000000/home-page.png "website") ](https://nodemailer.com/)
[querystring](web/querystring)            | `Модуль querystring предоставляет утилиты для парсинга и форматирования строк запросов URL. ` | -
[rss-parser](web/rss-parser)              | `Небольшая библиотека для превращения RSS-XML-каналов в объекты JavaScript.` | [ ![npm](https://img.icons8.com/color/36/000000/npm.png "npm") ](https://www.npmjs.com/package/rss-parser) [ ![github](https://img.icons8.com/ios-filled/24/000000/github.png "github") ](https://github.com/rbren/rss-parser)
[tinycolor2](web/tinycolor2)              | `TinyColor - это небольшая быстрая библиотека для управления цветом и преобразования в JavaScript. Он позволяет вводить множество форм, обеспечивая преобразование цветов и другие вспомогательные функции цвета. Не имеет зависимостей.` | [ ![npm](https://img.icons8.com/color/36/000000/npm.png "npm") ](https://www.npmjs.com/package/tinycolor2) [ ![github](https://img.icons8.com/ios-filled/24/000000/github.png "github") ](https://github.com/bgrins/TinyColor)
**WEB SCRAPING**                          |
[cheerio](web_scraping/cheerio)           | `Парсинг модуль. Быстрая, гибкая и экономичная реализация jQuery для сервера. Cheerio анализирует разметку и предоставляет API для просмотра/управления полученной структурой данных. Он не интерпретирует результат, как это делает веб-браузер. В частности, он не производит визуальную визуализацию, не применяет CSS, не загружает внешние ресурсы и не выполняет JavaScript.` | [ ![npm](https://img.icons8.com/color/36/000000/npm.png "npm") ](https://www.npmjs.com/package/cheerio) [ ![github](https://img.icons8.com/ios-filled/24/000000/github.png "github") ](https://github.com/cheeriojs/cheerio)
[puppeteer](web_scraping/puppeteer)       | `Puppeteer - это библиотека Node, которая предоставляет высокоуровневый API для управления Chrome или Chromium по протоколу DevTools. Puppeteer по умолчанию работает без header, но его можно настроить для запуска полного Chrome или Chromium.` | [ ![npm](https://img.icons8.com/color/36/000000/npm.png "npm") ](https://www.npmjs.com/package/puppeteer) [ ![github](https://img.icons8.com/ios-filled/24/000000/github.png "github") ](https://github.com/puppeteer/puppeteer)
