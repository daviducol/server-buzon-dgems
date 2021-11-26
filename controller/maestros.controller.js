const { response, request } = require('express');
const Maestros = require('../models/maestros.model');


const maestrosGet = async (req = request, res = response) => {
    const { q, pagina } = req.query;
    const maestros = await Maestros.find({});


    res.json({
        maestros
    })
};

const maestrosPost = async (req = request, res = response) => {

    const { figura, plantel, planDeEstudios, tematica, tema, poblacion, descripcion, requerimientos, correo } = req.body;
    const maestro = new Maestros({ figura, plantel, planDeEstudios, tematica, tema, poblacion, descripcion, requerimientos, correo });


    await maestro.save() // guardar
    res.json({
        ok: true,
        msg: 'Registro almacenado',
        maestro
    })
}
const maestrosPut = (req = request, res = response) => {
    const { id } = req.params;
    res.json({
        msg: 'api-glez PUT',
        id
    })
}
const maestrosDelete = (req, res = response) => {
    res.json({
        msg: 'api-glez DELETE'
    })
}

module.exports = {
    maestrosGet,
    maestrosPost,
    maestrosPut,
    maestrosDelete

}