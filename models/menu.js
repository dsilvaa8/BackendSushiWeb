const { isInteger } = require('lodash');
const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
    eleccionMenu:Number,
    producto: [{type:mongoose.Schema.ObjectId, ref:"producto"}]
});

module.exports = mongoose.model('menu', menuSchema);
