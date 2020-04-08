// ====================
//  Puerto
// ====================
process.env.PORT = process.env.PORT || 3000;


// ====================
// Entorno
// ====================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// ====================
// Vencimiento del token
// ====================
// 60 segundos
// 60 minutos
// 24 horas
// 30 días
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;

// ====================
// Seed de autenticación
// ====================
process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';

// ====================
// DB
// ====================
let urlDB = (process.env.NODE_ENV === 'dev')
    ? 'mongodb://localhost:27017/cafe'
    : process.env.MONGO_URI;

process.env.URLDB = urlDB;

// ====================
// Google Client Id
// ====================
process.env.CLIENT_ID = '474558847469-ihbpniq9vnll1j2262pn5brpqts7hbe7.apps.googleusercontent.com';

// ESTABLECER EN HEROKU
// heroku config:set VARIABLE_ENTORNO="valor"