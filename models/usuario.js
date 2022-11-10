const { isInteger } = require('lodash');
const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({ 
    run: String,
    nombreCompleto: String,
    email: String,
    direccion: String,
    comuna: String,
    provincia: String,
    registro:String,
    region: String,
    numeroTelefono: Number,
    compra : [{type:mongoose.Schema.ObjectId, ref:'Compra'}]
});

module.exports = mongoose.model('usuario', usuarioSchema);

