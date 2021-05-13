const mongoose = require('mongoose');


const Projetos = mongoose.model('projetos', 
{ 
    Titulo: {
        type: String,
        required:true,
    },
    Img: String,
    NumPavimentos: {
        type: String,
        required:true,
    },
    Obs: String,
    VolumeT: Number    
});
module.exports = Projetos;