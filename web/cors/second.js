const
  express = require('express'),
  axios   = require('axios'),
  morgan  = require('morgan'),
  PORT    = 5000,
  app     = express();

const url = 'http://localhost:3000/';

app.use(morgan('tiny'));

app.get('/', (req, res) => {
  axios
    .get(url + 'private', {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(data => res.json(data.data))
    .catch(err => console.error(err));
});
app.get('/login', (req, res) => {
  axios
    .post(url + 'login', { 'password': 'cors' })
    .then(data => res.json(data.data))
    .catch(err => console.error(err));
});

app.listen(PORT, () => console.log('Second Server run http://localhost:5000'));