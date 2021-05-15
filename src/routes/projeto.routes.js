const express = require('express');
const router = express.Router();
const Projetos = require('../models/projetos')


router.get('/', async (req, res) => {
    //recuperar todos os registros
    try {
        const projetos = await Projetos.find({})
        res.json({error: false, projetos});
    } catch (error) {
        res.json({error: true, message: error.message});
    }
    
});

router.get('/:titulo', async (req, res) => {
    //recuperar com ID
    try {
        const titulo = req.params.titulo
        const projetos = await Projetos.find({Titulo: titulo})
        res.json({error: false, projetos});
    } catch (error) {
        res.json({error: true, message: error.message});
    }
});

router.post('/', async (req, res) => {
    //cria um usuario
    try {
        const body = req.body
        console.log(body)
        const response = await new Projetos(body).save();
        res.json({error: false, projetos: response});
    } catch (error) {
        res.json({error: true, message: error.message});
    }

});

router.put('/:id', async (req, res) => {
    //Atualizar um usuario
    try {
        const id = req.params.id
        const novo_projeto = req.body;
        console.log(novo_projeto)

        const projeto = await Projetos.findByIdAndUpdate(id, novo_projeto)
        res.json({error: false, projeto});
    } catch (error) {
        res.json({error: true, message: error.message});
    }
});

router.delete('/:id', async (req, res) => {
    //deletar um usuario
    try {
        const id = req.params.id

        const projeto = await Projetos.findOneAndDelete(id)        
        res.json({error: false});
    } catch (error) {
        res.json({error: true, message: error.message});
    }
});

module.exports = router