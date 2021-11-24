const Alumnos = require('../models/alumnos.model');
const Maestros = require('../models/maestros.model');

//Verificar si exite el correo
const existeEmailAlumno = async (correo = '') => {
    const exiteEmial = await Alumnos.findOne({ correo });
    if (exiteEmial) {
        throw new Error(`El correo ${correo} ya existe`);
    }
}
//Verificar si exite el correo
const existeEmailMaestro = async (correo = '') => {
    const exiteEmial = await Maestros.findOne({ correo });
    if (exiteEmial) {
        throw new Error(`El correo ${correo} ya existe`);
    }
}

module.exports = {
    existeEmailAlumno,
    existeEmailMaestro
}