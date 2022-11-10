const { isInteger } = require('lodash');
const mongoose = require('mongoose');

const pagousuarioSchema = new mongoose.Schema({ 
    pago:{type:mongoose.Schema.ObjectId, ref: 'pago'},
    usuario:{type:mongoose.Schema.ObjectId, ref: 'usuario'}
});

module.exports = mongoose.model('pagousuario', pagousuarioSchema);