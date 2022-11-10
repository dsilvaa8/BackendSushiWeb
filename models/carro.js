const { isInteger } = require('lodash');
const mongoose = require('mongoose');

const carroSchema = new mongoose.Schema({ 
    nombreProducto:String,
    precioProducto: Number,
    cantidadProducto:Number,
    totalPagar:Number,
    productos: [{type:mongoose.Schema.ObjectId, ref:"Producto"}]
});


module.exports = mongoose.model('Carro', carroSchema);




