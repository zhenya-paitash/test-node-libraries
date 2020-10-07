const express = require('express');
const multer = require('multer');

const app = express();

// у формы атрибут enctype должен иметь значение multipart/form-data.
app.use(express.static(__dirname));
// параметр dest указывает на путь, по которому будет загружаться файл
// функция single() указывает, что загружаться будет один файл
// app.use(multer({ dest: 'uploads' }).single('filedata'));
// Для настройки сохранения файлов применяется функция multer.diskStorage(). 
// Она принимает объект с двумя параметрами, каждый из которых представляет функцию:
const storage = multer.diskStorage({
  // destination: определяет место для сохранения загруженных файлов - в данном случае папка "uploads".
  destination: (req, file, cb) => {
    cb(null, 'uploads')
  },
  // filename: определяет имя для загруженных файлов
  filename: (req, file, cb) => {
    cb(null, file.originalname)
    // cb(null, file.originalname + "-" + Date.now())
  }
});
// app.use(multer({storage:storageConfig}).single("filedata"));
const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === 'image/png' ||
    file.mimetype === 'image/jpg' ||
    file.mimetype === 'image/jpeg'
  ) {
    cb(null, true)
  } else {
    cb(null, false)
  }
};
// app.use(multer({storage, fileFilter}).single("filedata"));


app.post(
  '/api/upload', 
  multer({ storage, fileFilter }).single('filedata'), 
  (req, res, next) => {
    const filedata = req.file;
    console.log(filedata);

    filedata ? res.send('Uploaded') : res.send('Error') 
});


app.listen(3000);