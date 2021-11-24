const { Router } = require('express');
const { check } = require('express-validator');

const router = Router();

const {
    citasGet,
    citasPost,
    citasPut,
    citasDelete,
    citasGetHitorial
 } = require('../controller/citas.controller');

// const { existeEmailMaestro } = require('../helpers/db-validators');

const { validarCamposCitas } = require('../middlewares/validar-campos-alumnos');



router.get('/', citasGet);
router.get('/historial', citasGetHitorial);

router.post('/', [
    check('fecha', 'La fecha es siempre obligatorio').not().isEmpty(),
    check('hora', 'La hora es siempre obligatorio').not().isEmpty(),
    check('maestro', 'El nombre del maestro es siempre obligatorio').not().isEmpty(),
    check('tema', 'El tema es siempre obligatorio').not().isEmpty(),
    check('numTrabajador', 'El numero de trbajador es siempre obligatorio').not().isEmpty(),
    check('alumno', 'El nombre del alumno es siempre obligatorio').not().isEmpty(),
    check('apellidos', 'Los apellidos del alumno es siempre obligatorio').not().isEmpty(),
    check('bachillerato', 'El bachillerato es siempre obligatorio').not().isEmpty(),
    check('ligasMeet', 'Las ligas meet son siempre obligatorias').not().isEmpty(),
    check('correoAlumno', 'Las ligas meet son siempre obligatorias').not().isEmpty(),
    check('correoAlumno', 'El correo no es valido').isEmail(),
    validarCamposCitas
], citasPost);

router.put('/:id', citasPut);

router.delete('/', citasDelete);



module.exports = router;