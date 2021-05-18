const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

const projetos = require('./src/routes/projeto.routes');
const tecnicos = require('./src/routes/tecnico.routes');
const fornecedores = require('./src/routes/fornecedores.routes');
const pavimentos = require('./src/routes/pavimentos.routes');

mongoose.connect('mongodb://localhost:27017/TechMap', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
});

app.use(bodyParser.json());
app.use(morgan("dev"));

app.use('/projetos', projetos);
app.use('/tecnicos', tecnicos);
app.use('/fornecedores', fornecedores);
app.use('/pavimentos', pavimentos);


app.listen(3000, () => {
    console.log('servidor rodando');
});