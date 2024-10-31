const pokemonModel = require('../models/pokemonModel');

const getAllPokemons = (req, res) => {
    const pokemons = pokemonModel.getPokemons();
    const treinadores = pokemonModel.getTreinadores(); 
    res.render('index', { pokemons, treinadores });
};

const createPokemon = (req, res) => {
    const { nome, tipo, treinadorId } = req.body; // Recebe o ID do treinador
    const novoPokemon = pokemonModel.createPokemon(nome, tipo);

    // Adiciona o Pokémon à Pokédex do treinador
    const treinador = pokemonModel.getTreinadorById(treinadorId);
    if (treinador) {
        treinador.pokemons.push(novoPokemon.id); // Associa o Pokémon ao treinador
    }

    res.redirect(`/treinadores/${treinadorId}`); // Redireciona para a Pokédex do treinador
};

const getAllTreinadores = (req, res) => {
    const treinadores = pokemonModel.getTreinadores();
    res.render('treinadores', { treinadores });
};

const createTreinador = (req, res) => {
    const { nome } = req.body; // Removido a idade
    const novoTreinador = pokemonModel.createTreinador(nome);
    req.session.successMessage = 'Treinador criado com sucesso!';
    res.redirect('/treinadores');
};

const getTreinadorPokedex = (req, res) => {
    const treinador = pokemonModel.getTreinadorById(req.params.id);
    let pokemons = [];
    if (treinador && treinador.pokemons) {
        pokemons = treinador.pokemons.map(pokemonId => pokemonModel.getPokemonsById(pokemonId));
    }
    res.render('pokedexTreinador', { treinador, pokemons });
};

const getAddPokemon = (req, res) => {
    const treinador = pokemonModel.getTreinadorById(req.params.id);
    if (treinador) {
        res.render('addPokemon', { treinador });
    } else {
        res.status(404).send('Treinador não encontrado');
    }
};

module.exports = {
    getAllPokemons,
    createPokemon,
    getAllTreinadores,
    createTreinador,
    getTreinadorPokedex,
    getAddPokemon
};