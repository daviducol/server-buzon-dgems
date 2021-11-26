const { Router } = require('express');
const { check } = require('express-validator');

const router = Router();

const {
    maestrosGet,
    maestrosPost,
    maestrosPut,
    maestrosDelete } = require('../controller/maestros.controller');

// const { existeEmailMaestro } = require('../helpers/db-validators');

const { validarCamposMaestros } = require('../middlewares/validar-campos-alumnos');


router.get('/', maestrosGet);

router.post('/', [
    check('figura', 'La figura que desempeño es siempre obligatorio').not().isEmpty(),
    check('plantel', 'El plantel es siempre obligatorio').not().isEmpty(),
    check('planDeEstudios', 'El plan de estudios es siempre obligatorio').not().isEmpty(),
    check('tematica', 'La tematica siempre obligatorio').not().isEmpty(),
    check('tema', 'El tema es siempre obligatorio').not().isEmpty(),
    check('poblacion', 'La población es siempre obligatorio').not().isEmpty(),
    check('descripcion', 'Las descripción son siempre obligatorias').not().isEmpty(),
    check('requerimientos', 'Los requerimientos son siempre obligatorias').not().isEmpty(),
    check('correo', 'El correo no es valido').isEmail(),
    // check('correo').custom(existeEmailMaestro),
    validarCamposMaestros
], maestrosPost);

router.put('/:id', maestrosPut);

router.delete('/', maestrosDelete);



module.exports = router;