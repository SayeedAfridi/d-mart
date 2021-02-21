const fs = require('fs')

const productsString = fs.readFileSync(
  __dirname + '/../dev-data/products.json',
  'utf-8',
)
const products = JSON.parse(productsString)

exports.getAllProducts = (req, res) => {
  res.status(200).json({
    status: 'success',
    results: products.length,
    data: {
      products,
    },
  })
}

exports.createProduct = (req, res) => {
  return res.status(201).json({
    message: 'Post route',
  })
}

exports.getProduct = (req, res) => {
  const id = +req.params.id

  const product = products.find((p) => p.id === id)
  if (!product) {
    return res.status(404).json({
      status: 'failed',
      message: 'Product not found!',
    })
  }
  return res.status(200).json({
    status: 'success',
    results: 1,
    data: {
      product,
    },
  })
}

exports.updateProduct = (req, res) => {
  res.status(200).json({ message: 'Updated content here!' })
}

exports.deleteProduct = (req, res) => {
  res.status(200).json({ message: 'Delete Endpoint...' })
}
