const express = require('express')
const productsController = require('../controllers/productsController')

const router = express.Router()

router.param('id', productsController.checkId)

router
  .route('/')
  .get(productsController.getAllProducts)
  .post(productsController.checkBody, productsController.createProduct)

router
  .route('/:id')
  .get(productsController.getProduct)
  .delete(productsController.deleteProduct)
  .patch(productsController.updateProduct)

module.exports = router
