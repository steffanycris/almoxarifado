const { DataTypes } = require('sequelize');

const sequelize = require('../config/database');
const Produto = require('./Produto');
const Operador = require('./Operador');


const Movimentacao = sequelize.define('Movimentacao', {
  tipo: {
    type: DataTypes.ENUM('entrada', 'saida'),
    allowNull: false,
  },
  quantidade: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  data: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});

Produto.hasMany(Movimentacao, { foreignKey: 'Produto_id' });
Movimentacao.belongsTo(Produto, { foreignKey: 'Produto_id' });
Operador.hasMany(Movimentacao, { foreignKey: 'Operador_id' });
Movimentacao.belongsTo(Operador, { foreignKey: 'Operador_id' });

module.exports = Movimentacao;
