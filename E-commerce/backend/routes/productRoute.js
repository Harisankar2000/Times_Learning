const express = require('express')
const router= express.Router()
const productController = require('../controller/productController')


router.route('/products').get(productController.getAllProducts)

module.exports= router;