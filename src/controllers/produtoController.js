const Produto = require('../models/Produto');
const { Op } = require('sequelize');


async function cadastrar(req, res) {
  try {
    const { nome, categoria, quantidade_estoque } = req.body;

    const produto = await Produto.create({
      nome,
      categoria,
      quantidade_estoque,
    });

    res.status(201).json(produto);
  } catch (erro) {
    res.status(400).json({
      mensagem: 'Erro ao cadastrar produto',
      erro: erro.message,
    });
  }
}

async function listar(req, res) {
    try {
      const {
        nome,
        data,
      } = req.query;
  
      const filtro = {};
  
      // Guarda as condições da busca em filtro
      if (nome) {
        filtro.nome = {
          [Op.like]: `%${nome}%`,
        };
      }
  
      if (data) {
        filtro.createdAt = {
          [Op.gte]: new Date(data),
        };
      }
  
      const produtos = await Produto.findAll({
        where: filtro,
      });
  
      res.json(produtos);
    } catch (erro) {
      res.status(400).json({
        mensagem: 'Erro ao listar produtos',
        erro: erro.message,
      });
    }
  }
  
  async function deletar(req, res) {
    try {
      const { id } = req.params;
  
      const produto = await Produto.findByPk(id);
  
      if (!produto) {
        return res.status(404).json({
          mensagem: 'Produto não encontrado',
        });
      }
  
      await produto.destroy();
  
      res.status(200).json({
        mensagem: 'Produto removido com sucesso',
      });
    } catch (erro) {
      res.status(400).json({
        mensagem: 'Erro ao remover produto',
        erro: erro.message,
      });
    }
  }
  
  module.exports = { cadastrar, listar, deletar };
  
