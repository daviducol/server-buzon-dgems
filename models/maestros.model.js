const { Schema, model } = require('mongoose');

const maestrosSchema = Schema({
    figura: {
        type: String,
        required: [true, 'El campo es obligatorio']
    },
    plantel: {
        type: String,
        required: [true, 'El campo es obligatorio']
    },
    planDeEstudios: {
        type: String,
        required: [true, 'El campo es obligatorio']
    },
    tematica: {
        type: String,
        required: [true, 'El campo es obligatorio']
    },
    tema: {
        type: String,
        required: [true, 'El campo es obligatorio']
    },
    poblacion: {
        type: String,
        required: [true, 'El campo es obligatorio']
    },
    descripcion: {
        type: String,
        required: [true, 'El campo es obligatorio']
    },
    requerimientos: {
        type: String,
        required: [true, 'El campo es obligatorio']
    },
    correo: {
        type: String,
        required: [true, 'El correo es necesario'],
    }
});


module.exports = model('Maestro', maestrosSchema)
