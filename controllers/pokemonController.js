const pokemonModel = require('../models/pokemonModel');

const getAllPokemons = (req, res) => {
    const pokemons = pokemonModel.getPokemons();
    res.render('index', {pokemons});
};

const getPokemon = (req, res) => {
    const pokemon = pokemonModel.getPokemonsById(req.params.id);
    if(pokemon){
        res.render('pokemon', {pokemon});
    }else{
        res.status(404).send('Pokemon não encontrado');
    }




};

const getAdd = (req, res) => {
    
    res.render('add');
};



module.exports = {getAllPokemons, getPokemon, getAdd}