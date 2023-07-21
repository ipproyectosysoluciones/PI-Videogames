const axios = require( 'axios' );
const { Videogame, Genre } = require ('../db.js');
const { URL_BASE, API_KEY } = process.env;
require( 'dotenv' ).config();
  

// creo el objeto que voy a devolver por cada juego de la api
const getAllDataGames = async () => {
  const response = await axios.get( `${URL_BASE}games?key=${ API_KEY }` );
  const allResponse = response.data;

  const apiDataGames = allResponse.map(({
      id,
      name,
      //description, llega en el detail
      plataforms,
      background_image,
      released,
      rating,
      genres
    }) => ({
      id: id,
      name: name,
      //description: description,
      plataforms: plataforms.map( p => p.plataform.name ),
      image: background_image,
      released: released,
      rating: rating,
      genres: ( genres.map(( genre ) => genre.name ).join( ' | ' )),
    })
  );
  //console.log(apiDataGames);
  //cantidad de juegos traídos de la api
  //console.log(apiDataGames.length);
  
  //findAll para traer los juego de la base de datos
  const dbGames = await Videogame.findAll({
    include: [{
      model: Genre,
      attributes: [ 'name' ],
      through: {
        attributes: []
      }
    }]
  });
  
  const dbDataGames = dbGames.map(({
      id,
      name,
      description,
      plataforms,
      background_image,
      released,
      rating,
      Genres //nombre de la propiedad "Genres" para coincidir con la asociación en la consulta de la tabla
    }) => ({
      id: id,
      name: name,
      description: description,
      plataforms: plataforms,
      image: background_image,
      released: released,
      rating: rating,
      genres: ( Genres.map( genre => genre.name ).join( ' | ' ))
    })
  );

  //console.log(dbDataGames);
  //console.log(dbDataGames.length);

  //concateno los dos arreglos para traer todos los juegos
  const allGames = apiDataGames.concat( dbDataGames );

  return allGames;

}


module.exports = getAllDataGames ;
