const express = require('express');
const router = express.Router();
const pokemonController = require('../controllers/pokemonController');

router.get('/', pokemonController.getAllPokemons);
router.get('/pokemon/:id', pokemonController.getPokemon);
router.get('/add', pokemonController.getAdd);
router.post('/add', pokemonController.createPokemon);
router.get('/cadastro', pokemonController.getCadastro);
router.get('/treinadores', pokemonController.getAllTreinadores);
router.get('/treinadores/:id', pokemonController.getTreinador);
router.get('/addTreinador', pokemonController.getAddTreinador);
router.post('/addTreinador', pokemonController.createTreinador);




module.exports = router;