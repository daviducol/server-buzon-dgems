const { validationResult } = require('express-validator');

const validarCamposAlumnos = (req, res, next) => {
    const err = validationResult(req);
    if (!err.isEmpty()) {
        return res.status(400).json({ err });
    }
    next();
}
const validarCamposMaestros = (req, res, next) => {
    const err = validationResult(req);
    if (!err.isEmpty()) {
        return res.status(400).json({ err });
    }
    next();
}
const validarCamposCitas = (req, res, next) => {
    const err = validationResult(req);
    if (!err.isEmpty()) {
        return res.status(400).json({ err });
    }
    next();
}

module.exports = {
    validarCamposAlumnos,
    validarCamposMaestros,
    validarCamposCitas
}