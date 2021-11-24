const { Router } = require('express');
const { check } = require('express-validator');

const router = Router();

const {
    maestrosGet,
    maestrosPost,
    maestrosPut,
    maestrosDelete } = require('../controller/maestros.controller');

const { existeEmailMaestro } = require('../helpers/db-validators');

const { validarCamposMaestros } = require('../middlewares/validar-campos-alumnos');


router.get('/', maestrosGet);

router.post('/', [
    check('nombre', 'El nombre es siempre obligatorio').not().isEmpty(),
    check('apellidos', 'Los apellidos es siempre obligatorio').not().isEmpty(),
    check('numTrabajador', 'El numero de trabajador es siempre obligatorio').not().isEmpty(),
    check('dependencia', 'La dependencia siempre obligatorio').not().isEmpty(),
    check('telefono', 'El teléfono es siempre obligatorio').not().isEmpty(),
    check('gradoEstudios', 'El grado de estudios es siempre obligatorio').not().isEmpty(),
    check('ligasMeet', 'Las ligas meet son siempre obligatorias').not().isEmpty(),
    check('correo', 'El correo no es valido').isEmail(),
    check('correo').custom(existeEmailMaestro),
    validarCamposMaestros
], maestrosPost);

router.put('/:id', maestrosPut);

router.delete('/', maestrosDelete);



module.exports = router;