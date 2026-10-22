const express = require('express');
const path = require('path');
const sequelize = require('./config/database');

require('dotenv').config();

const operadorRoutes = require('./routes/operadorRoutes');
const authRoutes = require('./routes/authRoutes');
const produtoRoutes = require('./routes/produtoRoutes');
const movimentacaoRoutes = require('./routes/movimentacaoRoutes');


const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

app.use(operadorRoutes);
app.use(authRoutes);
app.use(produtoRoutes);
app.use(movimentacaoRoutes);



sequelize.authenticate()
    .then(() => console.log('Conectado ao banco de dados'))
    .catch(err => console.error('Erro ao conectar:', err));

sequelize.sync();

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});