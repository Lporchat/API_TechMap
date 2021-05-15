const mongoose = require('mongoose');


const Pavimentos = mongoose.model('pavimentos',
    {
        //numero do andar
        IdProjeto:
        {
            type: String,
            required: true,
        },
        Pavimento: {
            type: Number,
            required: true,
        },
        Descricao: String,
        Volume: String,
        Img: String,
        Fornecedor: String,
        ElementoEstrutural: String,
        Tecnico: String,
        Nota: String,
        Lacre: String,
        Fck: String,
        Slump: String,
        VolumeAplicado: Number,
        DataSaidaUsina: String,
        DataChegadaObra: String,
        DataInicio: String,
        DataFim: String

    });
module.exports = Pavimentos;