const Product = require('../models/productSchema')
const Order = require('../models/orderSchema')

//@desrciption create product
//@methode post
//@path /admin/addproduct
//@access privet 
const addProduct = async(req , res)=>{
    try{
const {name ,description,price,poster}=req.body;
const newProduct = await Product.create(req.body);
res.status(201).json({msg:'product created',product: newProduct});
    }
    catch(error){
        res.status(500).json({msg:'somthing went wrong/addproduct',error:error.message})
    }
}
;
 
//@desrciption update product
//@methode put
//@path /admin/updateproduct/:id
//@access privet 

const updateProduct = async(req , res)=>{
try{
const updateProduct = await Product.findByIdAndUpdate(req.params.id,{...req.body})
res.status(201).json({msg:'product updated',product: updateProduct});
}
catch(error){
    res.status(500).json({msg:'somthing went wrong/updateproduct',error: error.message})
}

}

 
//@desrciption delete product
//@methode delete
//@path /admin/deleteproduct/:id
//@access privet 

const deleteProduct = async(req , res)=>{
    try{
    const deleteProduct = await Product.findByIdAndDelete(req.params.id)
    res.status(201).json({msg:'product delete',product: deleteProduct});
    }
    catch(error){
        res.status(500).json({msg:'somthing went wrong/deleteproduct',error: error.message})
    }
    
    }
    
//@desrciption get orders
//@methode get
//@path /admin/getordres
//@access privet 

const getOrders = async(req , res)=>{
    try{
    const getOrders = await Product.find()
    res.status(201).json({msg:'get all products',orders : getOrders});
    }
    catch(error){
        res.status(500).json({msg:'somthing went wrong/getOrders',error: error.message})
    }
    
    }    



module.exports={addProduct,updateProduct,deleteProduct,getOrders}