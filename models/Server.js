const express = require('express');
const cors = require('cors');
const { dbConection } = require('../database/config.db');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.paths = {
            alumnos: '/api/alumnos',
            maestros: '/api/maestros',
            citas: '/api/citas',
            correos: '/api/correo'
        }

        this.conectarBD();
        this.middleware();
        this.rutas();

    }
    async conectarBD() {
        await dbConection();
    }

    middleware() {
        this.app.use(cors());
        this.app.use('/', express.static('public'));
        this.app.use(express.json());
    }

    rutas() {
        this.app.use(this.paths.alumnos, require('../routes/alumnos.routes'));
        this.app.use(this.paths.maestros, require('../routes/maestos.routes'));
        this.app.use(this.paths.citas, require('../routes/citas.routes'));
        this.app.use(this.paths.correos, require('../routes/correo.routes'));

    }


    listen() {

        this.app.listen(this.port, () => {
            console.log(`Leyendo el puerto ${this.port}`);
        })
    }
}

module.exports = Server;