const { Schema, model } = require('mongoose');

const maestrosSchema = Schema({
    numTrabajador: {
        type: String,
        required: [true, 'El numero de trabajador es necesario']
    },
    nombre: {
        type: String,
        required: [true, 'El nombre es necesario']
    },
    apellidos: {
        type: String,
        required: [true, 'El apellido es necesario'],
    },
    dependencia: {
        type: String,
        required: [true, 'La dependencia es necesario'],
    },
    telefono: {
        type: String,
        required: [true, 'El teléfono es necesaria']
    },
    gradoEstudios: {
        type: String,
        required: [true, 'El grado de estudios es necesario']
    },
    ligasMeet: {
        type: Array,
        required: [true, 'Las ligas Meet son necesarias es necesario']
    },
    correo: {
        type: String,
        required: [true, 'El correo es necesario'],
        unique: true
    },
});


module.exports = model('Maestro', maestrosSchema)