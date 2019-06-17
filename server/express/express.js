const express = require('express');
const fakerDB = require('../db/getProductInfoDB');
const bodyParser = require('body-parser');
const path = require('path');
const Promise = require('bluebird');
var cors = require('cors');



const app = express();
let port = process.env.PORT || 4554;
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(cors());

//Gets static files from client/dist
//app.use(express.static(path.resolve('client', 'dist')));

//This makes any endpoint ending w/ 'hundred/id' into a react page.
app.use('/:id', express.static(path.resolve('client', 'dist')))


app.get('/hundred/:id', (req, result) => {
  fakerDB.readAll((err, res) => {
    if (err) {
      throw err;
    } else {
      let stringify = JSON.stringify(res);
      result.send(stringify)
    }
  })
})

app.get('/product/:id', (req, results) => {
  let id = req.params.id
  fakerDB.readAll((err, res) => {
    if (err) {
      throw err;
    } else {
      for (let i = 0; i < res.length; i++) {
        if (res[i].itemNumber === Number(id)) {
          let stringify = JSON.stringify(res[i])
          console.log(stringify);
          results.send(stringify)
        }
      }
    }
  })
})


/**
 * Make endpoints for Priya and Alicia for them to get their data
 * Priya
 *  -Product name, brand, color, price
 *
 * sizing: String,
  blurbUnderPrice: String,
  materials: String,
  moreBrand: String,
  department: String,
  itemNumber: Number
 */

var x = (res) => {
  for (let i = 0; i < res.length; i++) {
    delete res[i].sizing
    delete res[i].blurbUnderPrice
    delete res[i].moreBrand
    delete res[i].department
    delete res[i].itemNumber
  }
  return res
}

let promisedX = Promise.promisify(x)

app.get('/productBuyerService/:id', (req, results) => {
  let x = {}
  console.log(req.params.id)
  fakerDB.alterPriya(req.params.id, (err, res) => {
    if (err) {
      throw err;
    } else {
      results.send(res)
    }
  })
})


app.listen(port, () =>
  console.log('App listening on ' + port + ' ')
)
