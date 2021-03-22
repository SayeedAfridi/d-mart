const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Product name is required!'],
    unique: true,
  },
  price: { type: Number, required: [true, 'Price is required!'] },
  rating: Number,
  image: String,
})

module.exports = mongoose.model('products', productSchema)
