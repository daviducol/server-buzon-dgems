const { Schema, model } = require('mongoose');

const citasSchema = Schema({
    fecha: {
        type: String,
        required: [true, 'La fecha es necesario']
    },
    hora: {
        type: String,
        required: [true, 'La hora es necesario']
    },
    maestro: {
        type: String,
        required: [true, 'El apellido es necesario'],
    },
    numTrabajador: {
        type: String,
        required: [true, 'El nummero det trabajador es necesario'],
    },
    alumno: {
        type: String,
        required: [true, 'La dependencia es necesario'],
    },
    tema: {
        type: String,
        required: [true, 'La dependencia es necesario'],
    },
    apellidos: {
        type: String,
        required: [true, 'La dependencia es necesario'],
    },
    bachillerato: {
        type: String,
        required: [true, 'El teléfono es necesaria']
    },
    ligasMeet: {
        type: String,
        required: [true, 'La liga Meet es necesaria']
    },
    correoAlumno: {
        type: String,
        required: [true, 'El correo es necesario'],
        unique: false
    },
});


module.exports = model('Cita', citasSchema)