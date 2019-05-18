const express = require('express');
const fakerDB = require('../db/fakerDB');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
let port = process.env.PORT || 4554;


//Gets static files from client/dist
 app.use(express.static(path.resolve('client', 'dist')));
 app.use('/hundred/:id', express.static(path.resolve('client', 'dist')))
// app.use(express.static(path.join(__dirname + "/../client/dist")))



// app.get('/', (request, res) => {
//   res.status(200);
//   res.sendFile(path.resolve('client', 'dist', 'index.html'))
// })


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

app.get('/hundred/:id', (req, results) => {
  let id = req.params.id
  console.log(id)
  fakerDB.readAll((err, res) => {
    console.log('hi')
    if (err) {
      throw err;
    } else {
      for (let i=0; i<res.length; i++) {
        if (res[i].itemNumber === Number(id)) {
          results.send(res[i])
        }
      }
    }
  })
})

//itemNumber: 'Item #26838',


app.listen(port, () =>
  console.log('App listening on '+port+' ')
)
