const express = require('express');
const router = express.Router();

const { cadastrar } = require('../controllers/operadorController');

router.post('/operadores', cadastrar);

module.exports = router;