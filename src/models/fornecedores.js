const mongoose = require('mongoose');


const Fornecedores = mongoose.model('fornecedores', 
{ 
    Nome: {
        type: String,
        required:true,
    },
    Cnpj: {
        type: Number,
        required:true,
    },   
});
module.exports = Fornecedores;