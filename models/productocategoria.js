const { isInteger } = require('lodash');
const mongoose = require('mongoose');

const productocategoriaSchema = new mongoose.Schema({ 
    producto:{type:mongoose.Schema.ObjectId, ref: 'producto'},
    categoria:{type:mongoose.Schema.ObjectId, ref: 'categoria'}
});

module.exports = mongoose.model('productocategoria', productocategoriaSchema);