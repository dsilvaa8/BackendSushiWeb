const { isInteger } = require('lodash');
const mongoose = require('mongoose');

const pagoSchema = new mongoose.Schema({ 
    tipoPago: String,
    historialTransacciones:Number,
    compra: {type:mongoose.Schema.ObjectId, ref:"Compra"} 

});

module.exports = mongoose.model('pago', pagoSchema);


