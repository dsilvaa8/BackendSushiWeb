
const mongoose = require('mongoose');

const categoriaSchema = new mongoose.Schema({ 
    
    nombreCategoria:String,
    producto: [{type:mongoose.Schema.ObjectId, ref:"Producto"}]
});

module.exports = mongoose.model('Categoria', categoriaSchema);


