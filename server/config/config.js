// =============================================
// PUERTO
// =============================================
process.env.PORT = process.env.PORT || 3100;


// =============================================
// Entorno
// =============================================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// =============================================
// Vencimiento del Token
// =============================================

process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;

// =============================================
// SEED de autenticación
// =============================================

process.env.SEMILLA = process.env.SEMILLA || 'este-es-el-seed-desarrollo';

// =============================================
// Base de datos
// =============================================
let urlDB;
if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URI;
}
process.env.URLDB = urlDB;

// =============================================
// Google Client ID
// =============================================

process.env.CLIENT_ID = process.env.CLIENT_ID || '483276854107-j42qb8n283jbfejp11n8onkk12c0q8he.apps.googleusercontent.com';