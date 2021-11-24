const { Router } = require('express');
const { check } = require('express-validator');

const router = Router();

const {
    alumnosGet,
    emailExiste,
    alumnosPost,
    alumnosPut,
    alumnosDelete } = require('../controller/alumnos.controller');

const { existeEmailAlumno } = require('../helpers/db-validators');

const { validarCamposAlumnos } = require('../middlewares/validar-campos-alumnos');


router.get('/email', emailExiste);
router.get('/', alumnosGet);

router.post('/', [
    check('nombre', 'El nombre es siempre obligatorio').not().isEmpty(),
    check('apellidos', 'Los apellidos es siempre obligatorio').not().isEmpty(),
    check('bachillerato', 'El bachillerato es siempre obligatorio').not().isEmpty(),
    check('grado', 'El grado es siempre obligatorio').not().isEmpty(),
    check('grupo', 'El grupo es siempre obligatorio').not().isEmpty(),
    check('genero', 'El genero es siempre obligatorio').not().isEmpty(),
    check('correo', 'El correo no es valido').isEmail(),
    check('correo').custom(existeEmailAlumno),
    validarCamposAlumnos
], alumnosPost);

router.put('/:id', alumnosPut);

router.delete('/', alumnosDelete);



module.exports = router;