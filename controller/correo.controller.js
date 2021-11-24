const { response, request } = require('express');
const nodemailer = require('nodemailer')

const correoPost = async (req = request, res = response) => {

    const { correo, alumno , tema, bachillerato,  correoDocente, ligaMeet, maestro, fecha, hora } = req.body;
    const transporter = nodemailer.createTransport({
            
        pool:true,
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            type:'login',
            user: 'davidglez.ucol@gmail.com',
            pass: 'tmoevcduugpzuson'
        },
    });
    const mailOptions = {
        from: 'Remitente',
        to: `${correo}`,
        subject: 'Tutorías DGEMS',
        text:`Tienes una cita de tutorías para el día ${fecha} a las ${hora} con el docente ${maestro.toUpperCase()} en ${ligaMeet}`
    }
    const mailDocente = {
        from: 'Remitente',
        to: `${correoDocente}`,
        subject: 'Tutorías DGEMS',
        text:`Tienes una cita de tutorías con ${alumno} estudiante del ${bachillerato} para el día ${fecha} a las ${hora} el tema de ${tema.toUpperCase()} en link ${ligaMeet} `
    }
    transporter.sendMail(mailOptions, (error, info)=>{
        if(error){
            return res.status(500).json(error.message)
    }
    // console.log('Email enviado alumno');
    res.status(200).json({
        ok:true,
        msg: 'Eviado alumno'
    })
})
// console.log("esperando..docente");

transporter.sendMail(mailDocente, (error, info)=>{
    if(error){
        return res.status(500).json(error.message)
}
// console.log('Email enviado docente');
res.status(200).json({
    ok:true,
    msg: 'enviado docente'
})
})
// console.log("esperando fin docente");

    /* ---------------------------------- dddd ---------------------------------- */
    // await cita.save() // guardar
    // res.json({
    //     cita
    // })
}


module.exports = {correoPost}