const express = require('express');
const methodOverride = require('method-override');

const app = express();

app.use(methodOverride('_method'));


app.use('*', (req, res) => {
  console.log('Method: ', req.method);

  res.send(`
    <h1>${req.method}</h1>
    <h2>no use method-override</h2>
    <form method="GET"><button type="submit">GET</button></form>
    <form method="POST"><button type="submit">POST</button></form>
    <form method="PUT"><button type="submit">fake PUT</button></form>
    <hr/>
    <h2>use method-override</h2>
    <form method="GET" action="/?_method=GET"><button type="submit">GET</button></form>
    <form method="POST" action="/?_method=POST"><button type="submit">POST</button></form>
    <form method="POST" action="/?_method=PUT"><button type="submit">PUT</button></form>
    <form method="POST" action="/?_method=DELETE"><button type="submit">DELETE</button></form>
  `);
});

const 
  PORT = process.env.PORT || 3000,
  HOST = process.env.HOST || 'localhost';
app.listen(PORT, HOST, () => console.log(`server run http://${HOST}:${PORT}`));