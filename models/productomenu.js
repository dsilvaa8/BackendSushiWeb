const { isInteger } = require('lodash');
const mongoose = require('mongoose');

const productomenuSchema = new mongoose.Schema({ 
    producto:{type:mongoose.Schema.ObjectId, ref: 'producto'},
    menu:{type:mongoose.Schema.ObjectId, ref: 'menu'}
});

module.exports = mongoose.model('productomenu', productomenuSchema);