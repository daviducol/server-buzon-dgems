const { Router } = require('express');
const { check } = require('express-validator');

const router = Router();

const {
    alumnosGet,
    // emailExiste,
    alumnosPost,
    alumnosPut,
    alumnosDelete } = require('../controller/alumnos.controller');

// const { existeEmailAlumno } = require('../helpers/db-validators');

const { validarCamposAlumnos } = require('../middlewares/validar-campos-alumnos');


// router.get('/email', emailExiste);
router.get('/', alumnosGet);

router.post('/', [
    check('plantel', 'El plantel es siempre obligatorio').not().isEmpty(),
    check('planDeEstudios', 'Los plan de estudios es siempre obligatorio').not().isEmpty(),
    check('tematica', 'La tematica es siempre obligatorio').not().isEmpty(),
    check('tema', 'El tema es siempre obligatorio').not().isEmpty(),
    check('poblacion', 'El tipo de población es siempre obligatorio').not().isEmpty(),
    check('descripcion', 'La descripción es siempre obligatorio').not().isEmpty(),
    check('requerimientos', 'Los requerimientos es siempre obligatorio').not().isEmpty(),
    // check('correo', 'El correo es siempre obligatorio').not().isEmpty(),
    check('correo', 'El correo no es valido').isEmail(),
    // check('correo').custom(existeEmailAlumno),
    validarCamposAlumnos
], alumnosPost);

router.put('/:id', alumnosPut);

router.delete('/', alumnosDelete);



module.exports = router;