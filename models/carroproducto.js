const { isInteger } = require('lodash');
const mongoose = require('mongoose');

const carroproductoSchema = new mongoose.Schema({ 
    producto:{type:mongoose.Schema.ObjectId, ref: 'producto'},
    carro:{type:mongoose.Schema.ObjectId, ref: 'carro'},
    cantidad:Number
    
});

module.exports = mongoose.model('carroproducto', carroproductoSchema);



