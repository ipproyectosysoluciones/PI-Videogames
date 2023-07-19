const { Router } = require( 'express' );
const getGenres = require('../handlers/getGenreHandler');

const genres = Router();

//Rutas
genres.get('/', getGenres );


module.exports = genres;