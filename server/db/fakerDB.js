const faker = require('faker');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/FEC', {useNewUrlParser: true})

const db = mongoose.connection;

db.once('open', () => {
  console.log('open')
})

let productSchema = new mongoose.Schema({
  productName: String,
  brand: String,
  price: Number,
  blurbUnderPrice: String,
  materials: String,
  moreBrand: String,
  department: String,
  itemNumber: String
})

let product = () => {
  let productName = `${faker.commerce.color()} ${faker.name.firstName()}`
  let brand = `${faker.name.firstName()} ${faker.name.lastName()}`
  let price = faker.commerce.price();
  let blurbUnderPrice = `${faker.commerce.productAdjective()} ${faker.lorem.sentence()}`
  //Details & Care
    let materials = faker.commerce.productMaterial()
    let moreBrand = `By ${brand}; imported` //could do a math rand to flip between imported and domestic.
    let department = `____ Shoes.` //again do math rand to pick between men and women.
    let itemNumber = `Item #${faker.random.number()}` //Or do whatever current id we are at in db?
  return {productName, brand, price, blurbUnderPrice, materials, moreBrand, department, itemNumber}
}


let hundredRecords = () => {
  let array = [];
  while (array.length < 100) {
    array.push(product())
  }
  return array
}

//Creating a model that utilizes productSchema.
let Record = mongoose.model('Record', productSchema);

//Instance of 50 records.
let hundred = hundredRecords()

//Can insert many records at once.

Record.deleteMany({}, (err) => {
  if (err) {
    throw err;
  } else {
    Record.insertMany(hundred, (err) => {
      if (err) {
        throw err;
      }
    })
  }
})

let readAll = (cb) => {
  Record.find((err, res) => {
    if (err) {
      throw '!!!!!!!!!', err;
    } else {
      console.log(res);
      cb(null, res);
    }
  })
}

module.exports = {
  readAll
}




