const express = require('express');
const fakerDB = require('../db/fakerDB');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
let port = 4554;


//Gets static files from client/dist
app.use(express.static(path.resolve('client', 'dist')));


app.get('/', (request, res) => {
  res.status(200);
  res.sendFile(path.resolve('client', 'dist', 'index.html'))
})


app.get('/hundred', (req, result) => {
  fakerDB.readAll((err, res) => {
    if (err) {
      throw err;
    } else {
      let stringify = JSON.stringify(res)
      result.send(stringify)
    }
  })
})

app.listen(port, () =>
  console.log('App listening on '+port+' ')
)
