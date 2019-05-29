const express = require('express');
const fakerDB = require('../db/fakerDB');
const bodyParser = require('body-parser');
const path = require('path');
const Promise = require('bluebird');

const app = express();
let port = process.env.PORT || 4554;


//Gets static files from client/dist
 app.use(express.static(path.resolve('client', 'dist')));

//This makes any endpoint ending w/ 'hundred/id' into a react page.
app.use('/hundred/:id', express.static(path.resolve('client', 'dist')))


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
          let stringify = JSON.stringify(res[i])
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
  for (let i=0; i<res.length; i++){
    delete res[i].sizing
    delete res[i].blurbUnderPrice
    delete res[i].moreBrand
    delete res[i].department
    delete res[i].itemNumber
  }
  return res
}

let promisedX = Promise.promisify(x)

app.get('/priya', (req, results) => {
  let x = {}
  fakerDB.alterPriya((err, res) => {
    if (err) {
      throw err;
    } else {
      results.send(res)
    }
  })
})


app.listen(port, () =>
  console.log('App listening on '+port+' ')
)
