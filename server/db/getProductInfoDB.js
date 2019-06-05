const faker = require('faker');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/FEC', { useNewUrlParser: true })

const db = mongoose.connection;

let productSchema = new mongoose.Schema({
    productName: String,
    productSubTitle: String,
    sizing: String,
    brand: String,
    price: mongoose.Decimal128,
    discountPrice: mongoose.Decimal128,
    discountPercent: Number,
    productSingleLineDescription: String,
    blurbUnderPrice: String,
    materials: String,
    moreBrand: String,
    department: String,
    itemNumber: Number
})

db.once('open', () => {
    console.log('open')
})
let Record = mongoose.model('Record', productSchema);

let readAll = (cb) => {
    Record.find((err, res) => {
        if (err) {
            throw '!!!!!!!!!', err;
        } else {
            //console.log(res);
            cb(null, res);
        }
    })
}

let alterPriya = (id, cb) => {
    Record.find({ itemNumber: id }, (err, res) => {
        if (err) {
            throw err;
        } else {
            cb(null, res)
        }
    })
}

module.exports = {
    readAll,
    alterPriya
}