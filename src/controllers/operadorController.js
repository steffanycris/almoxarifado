const bcrypt = require('bcrypt');
const Operador = require('../models/Operador');

async function cadastrar(req, res) {
    try {
        const {
            nome,
            email,
            senha,
            telefone
        } = req.body;

        const senhaCriptografada = await bcrypt.hash(senha, 10);

        const operador = await Operador.create({
            nome,
            email,
            senha: senhaCriptografada,
            telefone
        });

        res.status(201).json({
            id: operador.id,
            nome: operador.nome,
            email: operador.email,
            telefone: operador.telefone
        });

    } catch (erro) {
        res.status(400).json({
            mensagem: 'Erro ao cadastrar operador',
            erro: erro.message
        });
    }
}

module.exports = { cadastrar };