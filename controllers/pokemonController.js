const pokemonModel = require('../models/pokemonModel');

const getAllPokemons = (req, res) => {
    const pokemons = pokemonModel.getPokemons();
    res.render('index', {pokemons});
};

const createPokemon = (req,res) => {
    const { nome, tipo } = req.body;
    const novoPokemon = pokemonModel.createPokemon(nome, tipo);
    res.redirect('/')
}

const getAllTreinadores = (req, res) => {
    const treinadores = pokemonModel.getTreinadores();
    res.render('treinadores', { treinadores });
};


const createTreinador = (req, res) => {
    const { nome, idade } = req.body;
    const novoTreinador = pokemonModel.createTreinador(nome, idade);
    if (novoTreinador) {
        res.redirect('/treinadores'); 
    } else {
        res.status(400).send('Erro ao criar o Treinador');
    }
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

const getCadastro = (req,res) => {
    res.render('cadastro');
}

const getTreinador = (req, res) => {
    const treinador = pokemonModel.getTreinadorById(req.params.id);
    if (treinador) {
        res.render('treinador', { treinador }); 
    } else {
        res.status(404).send('Treinador não encontrado');
    }
};

const getAddTreinador = (req, res) => {
    res.render('addTreinador'); // Renderiza a view para adicionar um treinador
};

module.exports = {getAllPokemons, getPokemon, getAdd, createPokemon, getCadastro, getAddTreinador, getTreinador, getAllTreinadores, createTreinador}