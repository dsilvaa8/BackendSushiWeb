const { isInteger } = require('lodash');
const mongoose = require('mongoose');

const compraSchema = new mongoose.Schema({ 
    cantidadTotal:Number,  
    usuario:{type:mongoose.Schema.ObjectId, ref: 'usuario'},
    sucursal:{type:mongoose.Schema.ObjectId, ref: 'sucursal'},
    pago:[{type:mongoose.Schema.ObjectId, ref: 'pago'}],
    producto:[{type:mongoose.Schema.ObjectId, ref: 'producto'}],
    
});

module.exports = mongoose.model('compra', compraSchema);



