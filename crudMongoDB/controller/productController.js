const Product = require('../model/Product')


const getAllProduct = async(req,res)=>{
    try {
        const products = await Product.find()
        res.json(products)
        
    } catch (error) {
        res.status(404).send(error)
    }

}

const getSingleProduct = async(req,res)=>{
    try {
        const products = await Product.findById(req.params.productId)
        res.json(products)
        
    } catch (error) {
        res.status(404).send(error)
    }
    
}

const postProduct = async(req,res)=>{
    const addProduct = new Product({
        title: req.body.title,
        price: req.body.price,
        stock: req.body.stock,
        details: req.body.details
    })
    const savedProduct = await addProduct.save()
    res.send(savedProduct)
    
}

const updateProduct = async(req,res)=>{
    try {
        const product =({
            title: req.body.title,
            price: req.body.price,
            stock: req.body.stock,
            details: req.body.details
        })
        const putProduct = await Product.findByIdAndUpdate({_id:req.params.productId},product)
        res.json(putProduct) 
        
    } catch (error) {
        res.status(400).send(error)
    }
    
}

const deleteProduct = async(req,res)=>{
    try {
        const removeProducts = await Product.findByIdAndDelete(req.params.productId)
        res.json(removeProducts)
        
    } catch (error) {
        res.status(404).send(error)
    }
    
    
}

module.exports = {
    getAllProduct,getSingleProduct,postProduct,updateProduct,deleteProduct
};