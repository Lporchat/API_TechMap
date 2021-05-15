const mongoose = require('mongoose');


const Pavimentos = mongoose.model('pavimentos',
    {
        //numero do andar
        IdProjeto: String,
        Pavimento: Number,
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
        DataFim: String,
        Amostra1_7 : String,
        Amostra1_28 : String,
        Amostra1_63 : String,
        Amostra2_7 : String,
        Amostra2_28 : String,
        Amostra2_63 : String,
        Referencia_7 : String,
        Referencia_28 : String,
        Referencia_63 : String,

    });

module.exports = Pavimentos;