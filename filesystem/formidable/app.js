const app = require('express')();
const formidable = require('formidable');

app.get('/', (req, res) => {
  res.send(`
    <h1>formidable</h1>
    <form 
        action="/api/upload" 
        enctype="multipart/form-data" 
        method="POST">
      <div>Title: <input type="text" name="title" /></div>
      <div>File: <input type="file" name="someExpressFiles" multiple="multiple" /></div>

      <button type="submit">SUBMIT</button>
    </form>
  `);
});

app.post('/api/upload', (req, res, next) => {
  const form = formidable({
    multiples: true,
    uploadDir: __dirname + '/upload',
    // error: null,
    // ended: false,
    // maxFields: 1000,
    // maxFieldsSize: 20971520,
    // maxFileSize: 209715200,
    // keepExtensions: false,
    // uploadDir: 'C:\\Users\\ZHENYA~1\\AppData\\Local\\Temp',
    // encoding: 'utf-8',
    // headers: null,
    // type: null,
    // hash: false,
    // bytesReceived: null,
    // bytesExpected: null,
  });

  form.parse(req, (err,fields,files) => {
    if (err) throw err;
    res.json({ fields, files });
  });
});


const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost';
app.listen(PORT, HOST, () => console.log(`http://${HOST}:${PORT}`));