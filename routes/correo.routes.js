const { Router } = require('express');


const router = Router();

const {correoPost} = require('../controller/correo.controller');

router.post('/send-email', correoPost);


module.exports = router;