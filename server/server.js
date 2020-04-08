require('./config/config');

const express = require('express');
const mongoose = require('mongoose');
const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Configuración global de rutas
app.use(require('./routes/index'));


mongoose.connect(process.env.URLDB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
.then(resp => console.log('Conectado a la base de datos online'))
.catch(err => console.log(`Error: ${err}`));

app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto', process.env.PORT);
});