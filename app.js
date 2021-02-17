const express = require('express')
const fs = require('fs')

const productsString = fs.readFileSync(
  __dirname + '/dev-data/products.json',
  'utf-8',
)
const products = JSON.parse(productsString)

const app = express()

app.use(express.json())

app.get('/api/v1/products', (req, res) => {
  res.status(200).json({
    status: 'success',
    results: products.length,
    data: {
      products,
    },
  })
})

app.post('/api/v1/products', (req, res) => {
  return res.status(201).json({
    message: 'Post route',
  })
})

app.get('/api/v1/products/:id', (req, res) => {
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
})

const port = 1080

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})
