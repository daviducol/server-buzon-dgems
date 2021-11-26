const { response, request } = require('express');
const Alumnos = require('../models/alumnos.model');


const alumnosGet = async (req = request, res = response) => {
    const { q, pagina } = req.query;
    const alumnos = await Alumnos.find({});

    res.json({
        msg: 'Lista de alumnos inscritos',
        alumnos
    })
};

// const emailExiste = async (req = request, res = response) => {
//     const { correo } = req.query;
//     const exiteEmial = await Alumnos.findOne({ correo });
//     if (exiteEmial) {
//         const { nombre, apellidos, bachillerato, correo: email, grado, grupo } = exiteEmial;
//         return res.json({
//             err: true,
//             msg: 'Email existe',
//             estudiante: {
//                 nombre,
//                 apellidos,
//                 bachillerato,
//                 email,
//                 grado,
//                 grupo
//             }
//         })
//     }
//     res.json({
//         err: false,
//         msg: 'Email no existe'
//     })
// }

const alumnosPost = async (req = request, res = response) => {
    console.log('Ingreso al POST');

    const { plantel, planDeEstudios, tematica, tema, poblacion, descripcion, requerimientos, correo } = req.body;
    const alumno = new Alumnos({ plantel, planDeEstudios, tematica, tema, poblacion, descripcion, requerimientos, correo });


    await alumno.save() // guardar
    res.json({
        alumno
    })
}
const alumnosPut = (req = request, res = response) => {
    const { id } = req.params;
    res.json({
        msg: 'api-glez PUT',
        id
    })
}
const alumnosDelete = (req, res = response) => {
    res.json({
        msg: 'api-glez DELETE'
    })
}

module.exports = {
    alumnosGet,
    // emailExiste,
    alumnosPost,
    alumnosPut,
    alumnosDelete

}