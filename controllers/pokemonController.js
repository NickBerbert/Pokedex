const pokemonModel = require('../models/pokemonModel');

const getAllPokemons = (req, res) => {
    const pokemon = pokemonModel.getPokemons();
    res.render('index', {pokemons});
};

const getPokemon = (req, res) => {
    const pokemo = pokemonModel.getPokemonsById(req.params.id);
    if(pokemon){
        res.render('pokemon', {pokemon});
    }else{
        res.status(404).send('Pokemon não encontrado');
    }




};

module.exports = {getAllPokemons, getPokemon}