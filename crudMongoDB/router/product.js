const router= require('express').Router()
const productController = require('../controller/productController')

router.post("/",productController.postProduct)

router.get("/",productController.getAllProduct)

router.get("/:productId",productController.getSingleProduct)

router.put("/:productId",productController.updateProduct)

router.delete("/:productId",productController.deleteProduct)

module.exports = router