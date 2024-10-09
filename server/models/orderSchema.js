const mongoose = require('mongoose')
// const Product = require('./productSchema')


const orderSchema = mongoose.Schema({
  CreatAt:{type:Date, default:new Date()},
  Products: Array,
  owner:{
    type: mongoose.Schema.Types.ObjectId,
    ref:'user'//person
  }
  

    })
 const Order = mongoose.model('order',orderSchema)  
   module.exports = Order