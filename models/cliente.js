const { isInteger } = require('lodash');
const mongoose = require('mongoose');

const clienteSchema = new mongoose.Schema({
    run: String,
    nombreCompleto: String,
    email: String,
    direccion: String,
    comuna: String,
    provincia: String,
    region: String,
    numeroTelefono: Number,
    usuario: String,
    pass: String
});

module.exports = mongoose.model('Cliente', clienteSchema);