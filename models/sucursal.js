const { isInteger } = require('lodash');
const mongoose = require('mongoose');

const sucursalSchema = new mongoose.Schema({ //compra en presencial
  registroTransaccionesSucursal: String,
  tipoPago: String,
  
  
  compra : [{type:mongoose.Schema.ObjectId, ref:'Compra'}]
});

module.exports = mongoose.model('Sucursal', sucursalSchema);



