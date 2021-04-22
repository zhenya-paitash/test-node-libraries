import express from 'express';

const app = express();

app.get('/', (req, res) => res.send('Hello from simple application'));

app.listen(3000, () => console.log('Server is Running: http://localhost:3000'));
