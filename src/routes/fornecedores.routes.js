const express = require('express');
const router = express.Router();
const Fornecedores = require('../models/fornecedores')
const Pavimentos = require('../models/pavimentos')


router.get('/', async (req, res) => {
    //recuperar todos os registros
    try {
        const fornecedores = await Fornecedores.find({})
        res.json({error: false,  fornecedores});
    } catch (error) {
        res.json({error: true, message: error.message});
    }
    
});

router.get('/:fornecedor', async (req, res) => {
    //quem o fornecedor forneceu 
    try {
        const fornecedor = req.params.fornecedor
        const pavimentos = await Pavimentos.find({Fornecedor: fornecedor})
        res.json({error: false,  pavimentos});
    } catch (error) {
        res.json({error: true, message: error.message});
    }
    
});

router.post('/', async (req, res) => {
    //cria um usuario
    try {
        const body = req.body
        
        const response = await new Fornecedores(body).save();
        res.json({error: false, fornecedores: response,  messsage: "Criado com Sucesso"});
    } catch (error) {
        res.json({error: true, message: error.message});
    }

});

router.put('/:id', async (req, res) => {
    //cria um usuario
    try {
        const id = req.params.id
        const novo_fornecedor = req.body;
        const fornecedor = await Fornecedores.findByIdAndUpdate(id, novo_fornecedor)
        res.json({error: false, fornecedores,  messsage: "Editado com Sucesso"});
    } catch (error) {
        res.json({error: true, message: error.message});
    }
});

router.delete('/:id', async (req, res) => {
    //deletar um usuario
    try {
        const id = req.params.id

        const fornecedor = await Fornecedores.findOneAndDelete(id)        
        res.json({error: false, messsage: "Deletado com Sucesso"});
    } catch (error) {
        res.json({error: true, message: error.message});
    }
});

module.exports = router