const { response, request } = require('express');
const Citas = require('../models/citas.model');


const citasGet = async (req = request, res = response) => {
    const { q, pagina } = req.query;
    const citas = await Citas.find({});


    res.json({
        msg: 'Lista de citas inscritos',
        citas
    })
};

const citasGetHitorial = async (req = request, res=response) => {
    const { numTrabajador } = req.query;
    const citashistorial =  await Citas.find({numTrabajador });

    
    if(citashistorial.length == 0){
        return res.status(400).json({
            err: true,
            msg: 'No se tiene ninguna cita'
        })
    }
    res.status(200).json({
        err: false,
        citashistorial
    })
};

const citasPost = async (req = request, res = response) => {

    const { fecha, hora, tema, maestro, numTrabajador, alumno, apellidos, bachillerato, ligasMeet, correoAlumno, } = req.body;
    const cita = new Citas({ fecha, hora,tema, maestro,numTrabajador,  alumno, bachillerato, ligasMeet, correoAlumno, apellidos });
    
    const horaFecha = await Citas.find({numTrabajador, hora,  fecha });
    
    

    // res.json({
    //     msg:'POST-CITA'
    // })

    if( horaFecha.length >= 1){
       return res.status(400).json({
            err:true,
            msg:'horario no disponible'
        })
    }
    await cita.save() // guardar
         res.json({
            cita
    })
}
const citasPut = (req = request, res = response) => {
    const { id } = req.params;
    res.json({
        msg: 'api-glez PUT',
        id
    })
}
const citasDelete = (req, res = response) => {
    res.json({
        msg: 'api-glez DELETE'
    })
}

module.exports = {
    citasGet,
    citasPost,
    citasPut,
    citasDelete,
    citasGetHitorial

}