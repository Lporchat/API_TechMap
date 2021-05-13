const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose') ;
const app = express();

const routes = require('./src/routes/main.routes');
mongoose.connect('mongodb://localhost:27017/TechMap',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(bodyParser.json());
app.use(morgan("dev"));
app.use('/', routes);


app.listen(3000, () => {
    console.log('servidor rodando');
});