const { isInteger } = require('lodash');
const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema({ 
    nombreProducto: String,
    stock: Number,
    proveedor:String,
    carro: {type:mongoose.Schema.ObjectId, ref:"carro"}, 
    categoria: {type:mongoose.Schema.ObjectId, ref:"categoria"}, 
    menu: {type:mongoose.Schema.ObjectId, ref:"menu"}, 
    compra: {type:mongoose.Schema.ObjectId, ref:"compra"} 
});

module.exports = mongoose.model('producto', productoSchema);



