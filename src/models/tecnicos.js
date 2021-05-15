const mongoose = require('mongoose');


const Tecnicos = mongoose.model('tecnicos', 
{ 
    Nome: {
        type: String,
        required:true,
    },
    Cpf: {
        type: Number,
        required:true,
    },   
});

module.exports = Tecnicos;