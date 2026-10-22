function permitir(...tiposPermitidos) {

    return (req, res, next) => {

        if (!req.operador || !tiposPermitidos.includes(req.operador.tipo)) {
            return res.status(403).json({
                mensagem: 'Sem permissão para essa ação'
            });
        }

        next();
    };
}

module.exports = permitir;