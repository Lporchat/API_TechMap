const express = require('express');
const router = express.Router();
const Tecnico = require('../models/tecnicos')
const Pavimentos = require('../models/pavimentos')


router.get('/', async (req, res) => {
    //recuperar todos os registros
    try {
        const tecnicos = await Tecnico.find({})
        res.json({error: false,  tecnicos});
    } catch (error) {
        res.json({error: true, message: error.message});
    }
    
});

router.get('/:tecnico', async (req, res) => {
    //projetos que ele ta
    try {
        const tecnico = req.params.tecnico
        console.log(tecnico)
        const pavimentos = await Pavimentos.find({Tecnico: tecnico})
        res.json({error: false,  pavimentos});
    } catch (error) {
        res.json({error: true, message: error.message});
    }
    
});

router.post('/', async (req, res) => {
    //cria um usuario
    try {
        const body = req.body
        console.log(body)
        const response = await new Tecnico(body).save();
        res.json({error: false, tecnico: response,  messsage: "Criado com Sucesso"});
    } catch (error) {
        res.json({error: true, message: error.message});
    }

});

router.put('/:id', async (req, res) => {
    //editar tecnico um usuario
    try {
        const id = req.params.id
        const novo_tecnico = req.body;
        const tecnico = await Tecnico.findByIdAndUpdate(id, novo_tecnico)
        res.json({error: false, tecnico,  messsage: "Editado com Sucesso"});
    } catch (error) {
        res.json({error: true, message: error.message});
    }
});

router.delete('/:id', async (req, res) => {
    //deletar um usuario
    try {
        const id = req.params.id

        const tecnico = await Tecnico.findOneAndDelete(id)        
        res.json({error: false, messsage: "Deletado com Sucesso"});
    } catch (error) {
        res.json({error: true, message: error.message});
    }
});

module.exports = router