const { isInteger } = require('lodash');
const mongoose = require('mongoose');

const comprausuarioSchema = new mongoose.Schema({ 
    compra:{type:mongoose.Schema.ObjectId, ref: 'compra'},
    usuario:{type:mongoose.Schema.ObjectId, ref: 'usuario'}
});

module.exports = mongoose.model('comprausuario', comprausuarioSchema);