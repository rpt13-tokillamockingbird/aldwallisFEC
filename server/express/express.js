const express = require('express');
const fakerDB = require('../db/fakerDB');
const bodyParser = require('body-parser');

const app = express();
let port = 4554;
app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.get('/', (req, result) => {
  fakerDB.readAll((err, res) => {
    if (err) {
      throw err;
    } else {
      let stringify = JSON.stringify(res)
      result.send('Hello World')
      //result.send(stringify)
    }
  })
})

app.listen(port, () =>
  console.log('App listening on '+port+' ')
)
