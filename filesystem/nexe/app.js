import express from 'express';

const app = express();

app.get('/', (req, res) => {
  console.log('GET /');
  res.setHeader('type', 'text/html')
  res.send('<h1>Hello simple NEXE example</h1>');
});

app.listen(3000, () => console.log('http://localhost:3000'));
