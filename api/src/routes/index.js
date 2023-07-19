const { Router } = require('express');
const videoGames = require( './videoGames' );
const genres = require( './genres' );
// const genresRoutes = require( './genresRoute' );
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use( '/videogames', videoGames );
router.use( '/genres', genres );

module.exports = router;
