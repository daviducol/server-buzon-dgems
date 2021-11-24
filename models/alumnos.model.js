const { Schema, model } = require('mongoose');

const alumnoSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es necesario']
    },
    apellidos: {
        type: String,
        required: [true, 'El apellido es necesario'],
    },
    genero: {
        type: String,
        required: [true, 'El genero es necesario'],
    },
    bachillerato: {
        type: String,
        required: [true, 'La escuela es necesaria']
    },
    grado: {
        type: String,
        required: [true, 'El grado es necesario']
    },
    grupo: {
        type: String,
        required: [true, 'El grupo es necesario']
    },
    correo: {
        type: String,
        required: [true, 'El correo es necesario'],
        unique: true
    },
    google: {
        type: Boolean,
        default: false
    },

});


module.exports = model('Alumno', alumnoSchema)