

const pokemons = [
    {id: 1, nome: 'Bulbassauro', tipo: 'Vegetal/Veneno'},
    {id: 2, nome: 'Squirtle', tipo: 'Água'},
    {id: 3, nome: 'Charmander', tipo: 'Fogo'},
];


const getPokemons = () =>pokemons;
const getPokemonsById = (id) => pokemons.find(p => p.id === parseInt(id));
const createPokemon = (nome, tipo) => {
    const novoPokemon = {
        id: pokemons.length + 1,
        nome,
        tipo
    };
    pokemons.push(novoPokemon);
    return novoPokemon;
};
const treinadores = [
    { id: 1, nome: 'Ash', idade: 10 },
    { id: 2, nome: 'Misty', idade: 12 },
    { id: 3, nome: 'Brock', idade: 15 },
];

const getTreinadores = () => treinadores;
const getTreinadorById = (id) => treinadores.find(t => t.id === parseInt(id));
const createTreinador = (nome, idade) => {
    const novoTreinador = {
        id: treinadores.length + 1,
        nome,
        idade
    };
    treinadores.push(novoTreinador);
    return novoTreinador;
};

module.exports = {getPokemons, getPokemonsById, createPokemon,createTreinador,getTreinadores, getTreinadorById};
    

