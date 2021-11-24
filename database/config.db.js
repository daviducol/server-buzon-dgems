require('dotenv').config();
const mongoose = require('mongoose');


const dbConection = async () => {
    try {
        await mongoose.connect(process.env.SERVER, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });
        console.log('Base de datos online');

    } catch (err) {
        throw new Error('Error al iniciar la BD');
    }
}


module.exports = {
    dbConection
}