const express = require('express');
const router = express.Router();
const Projetos = require('../models/projetos')


router.get('/', (req, res) => {
    //recuperar todos os registros
    res.json({mensagem: 'todos os registros'});
});

router.get('/:id', (req, res) => {
    //recuperar com ID
    const id = req.params.id;
    res.json({mensagem: `pegar todos os ids ${id}`});
});

router.post('/', async (req, res) => {
    //rcia um usuario
    try {
        const body = req.body
        const response = await new Projetos(body).save();
        res.json({error: false, projetos: response});
    } catch (err) {
        res.json({error: true, message: err.message});
    }

});

router.put('/:id', (req, res) => {
    //cria um usuario
    const id = req.params.id;
    res.json({mensagem: `pegar todos os ids ${id}`});
});

router.delete('/:id', (req, res) => {
    //deletar um usuario
    const id = req.params.id;
    res.json({mensagem: `pegar todos os ids ${id}`});
});

module.exports = router