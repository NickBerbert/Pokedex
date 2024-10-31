let pokemons = [];
let treinadores = [];

const createPokemon = (nome, tipo) => {
    const novoPokemon = { id: pokemons.length + 1, nome, tipo };
    pokemons.push(novoPokemon);
    return novoPokemon;
};

const getPokemons = () => {
    return pokemons;
};

const createTreinador = (nome) => {
    const novoTreinador = { id: treinadores.length + 1, nome, pokemons: [] };
    treinadores.push(novoTreinador);
    return novoTreinador;
};

const getTreinadores = () => {
    return treinadores;
};

const getTreinadorById = (id) => {
    return treinadores.find(treinador => treinador.id === parseInt(id));
};

const getPokemonsById = (id) => {
    return pokemons.find(pokemon => pokemon.id === parseInt(id));
};

module.exports = {
    createPokemon,
    getPokemons,
    createTreinador,
    getTreinadores,
    getTreinadorById,
    getPokemonsById
};