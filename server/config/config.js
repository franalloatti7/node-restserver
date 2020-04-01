// =============================================
// PUERTO
// =============================================
process.env.PORT = process.env.PORT || 3200;


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