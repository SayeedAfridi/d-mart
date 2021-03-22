const Product = require('../models/Product')

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find()
    res.status(200).json({
      status: 'Success',
      results: products.length,
      data: {
        products,
      },
    })
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error,
    })
  }
}

exports.createProduct = async (req, res) => {
  try {
    const product = new Product(req.body)
    const doc = await product.save()
    res.status(201).json({
      status: 'Success',
      data: {
        product: doc,
      },
    })
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error,
    })
  }
}

exports.getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id)
    //db.products.find({_id: req.params.id})

    if (!product) {
      res.status(400).json({
        status: 'fail',
        message: 'Product not found!',
      })
    }

    res.status(200).json({
      status: 'Success',
      data: {
        product,
      },
    })
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error,
    })
  }
}

exports.updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    })
    res.status(202).json({
      status: 'Success',
      data: {
        product,
      },
    })
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error,
    })
  }
}

exports.deleteProduct = (req, res) => {
  res.status(200).json({ message: 'Delete Endpoint...' })
}
