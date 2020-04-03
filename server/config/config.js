// ====================
//  Puerto
// ====================
process.env.PORT = process.env.PORT || 3000;


// ====================
// Entorno
// ====================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// ====================
// DB
// ====================
let urlDB = (process.env.NODE_ENV === 'dev')
    ? 'mongodb://localhost:27017/cafe'
    : 'mongodb+srv://admin:pU82tqU4bfFOnvcJ@cluster0-cstnp.mongodb.net/cafe';

process.env.URLDB = urlDB;