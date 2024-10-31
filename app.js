const express = require('express');
const session = require('express-session');
const pokemonRoutes = require('./routes/pokemonRoutes');

const app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(session({ secret: 'your-secret-key', resave: false, saveUninitialized: true }));

app.use('/', pokemonRoutes);

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});