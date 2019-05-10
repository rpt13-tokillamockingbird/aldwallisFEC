const express = require('express');
const fakerDB = require('../db/fakerDB');

const app = express();
let port = 4554;

app.get('/', (req, result) => {
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
