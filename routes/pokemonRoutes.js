const express = require('express');
const router = express.Router();
const pokemonController = require('../controllers/pokemonController');

router.get('/', pokemonController.getAllPokemons);
router.post('/addPokemon', pokemonController.createPokemon);
router.get('/treinadores', pokemonController.getAllTreinadores);
router.get('/addTreinador', (req, res) => { // Adicionando a rota GET para o formulário de adicionar treinador
    res.render('addTreinador');
});
router.post('/addTreinador', pokemonController.createTreinador);
router.get('/treinadores/:id', pokemonController.getTreinadorPokedex);
router.get('/treinadores/:id/addPokemon', pokemonController.getAddPokemon);
router.post('/treinadores/:id/addPokemon', pokemonController.createPokemon);

module.exports = router;