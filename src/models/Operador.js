const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Operador = sequelize.define('Operador', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },

    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },

    senha: {
        type: DataTypes.STRING,
        allowNull: false
    },

    telefone: {
        type: DataTypes.STRING,
        allowNull: false
    },

});

module.exports = Operador;