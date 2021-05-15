const express = require('express');
const router = express.Router();
const Pavimentos = require('../models/pavimentos')


router.get('/:idProjeto', async (req, res) => {
    //recuperar baseado no id do projeto
    try {
        const Id = req.params.idProjeto 
        const pavimentos = await Pavimentos.find({IdProjeto: Id})
        res.json({error: false,  pavimentos});
    } catch (error) {
        res.json({error: true, message: error.message});
    }
    
});

router.get('/', async (req, res) => {
    //recuperar todos os registros
    try {
        const pavimentos = await Pavimentos.find({})
        res.json({error: false, pavimentos});
    } catch (error) {
        res.json({error: true, message: error.message});
    }
    
});

router.post('/', async (req, res) => {
    //cria um Pavimento
    try {
        const body = req.body
        const response = await new Pavimentos(body).save();
        res.json({error: false, Pavimento: response,  messsage: "Criado com Sucesso"});
    } catch (error) {
        res.json({error: true, message: error.message});
    }

});

router.put('/:id', async (req, res) => {
    //editar tecnico um Pavimento
    try {
        const id = req.params.id
        const novo_pavimento = req.body;
        console.log(novo_pavimento)

        const pavimento = await Pavimentos.findByIdAndUpdate(id, novo_pavimento)
        res.json({error: false, pavimento,  messsage: "Editado com Sucesso"});
    } catch (error) {
        res.json({error: true, message: error.message});
    }
});

router.delete('/:id', async (req, res) => {
    //deletar um Pavimento
    try {
        const id = req.params.id
        const pavimento = await Pavimentos.findOneAndDelete(id)        
        res.json({error: false, messsage: "Deletado com Sucesso"});
    } catch (error) {
        res.json({error: true, message: error.message});
    }
});

module.exports = router