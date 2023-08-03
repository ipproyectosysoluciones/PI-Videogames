const axios = require( 'axios' );
const { Videogame, Genre } = require ('../db.js');
const { Op } =require( 'sequelize' );
require( 'dotenv' ).config();
const { API_KEY } = process.env;
const URL_BASE = 'https://api.rawg.io/api/';
const URL_GAME = `${URL_BASE}games?key=${API_KEY}&page_size=20`;

const pageNum = 6;

// GET | /videogames
const allDataGames = async () => {

  let response = [];
  let allResponse = [];

  //recorro para traer las primeras 3 paginas con 40juegos c/u
  for ( let i = 1; i < pageNum; i++ ) {
    response = await Promise.all([
      ...response, axios.get( `${URL_GAME}&page=${i}` )
    ]);
  };
  //Petición para los primeros juegos
  //const response = await axios.get(URL);

  response.forEach(element => {
    allResponse = allResponse.concat(element.data.results);
  });

  // creo el objeto que voy a devolver por cada juego de la api
  const apiDataGames = allResponse.map( ({
      id,
      name,
      //description, llega en el detail
      platforms,
      background_image,
      released,
      rating,
      genres
    }) => ({
      id: id,
      name: name,
      // description: description,
      platforms: platforms.map( p => p.platform.name ),
      image: background_image,
      released: released,
      rating: rating,
      genres: ( genres.map( ( genre ) => genre.name ).join(' | ') ),
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
  })
  
  const dbDataGames = dbGames.map(({
      id,
      name,
      description,
      platforms,
      background_image,
      released,
      rating,
      Genres //nombre de la propiedad "Genres" para coincidir con la asociación en la consulta de la tabla
    }) => ({
      id: id,
      name: name,
      description: description,
      platforms: platforms,
      image: background_image,
      released: released,
      rating: rating,
      genres: ( Genres.map( genre => genre.name ).join( ' | ' ) ),
    })
  );
  
  //console.log(dbDataGames);
  //console.log(dbDataGames.length);
  
  //concateno los dos arreglos para traer todos los juegos
  const allGames = apiDataGames.concat( dbDataGames );

  return allGames;
};

// GET | /videogames/:idVideogame
const idDataGames = async ( id ) => {
  if ( id.length < 7 ) {
    const URL = `${URL_BASE}games/${id}?key=${API_KEY}&page_size=20`;

    const response = await axios.get( URL );
    const data = response.data;
    //console.log(data);

    const regexHtml = /<\/?[^>]+>|\n/g;
    const idDataGames = {
      id: data.id,
      name: data.name,
      description: data.description.replace( regexHtml, "" ),
      platforms: ( data.platforms.map( ( p ) => p.platform.name ) ).join( " | " ),
      image: data.background_image,
      released: data.released,
      //* se adiciona para el detalle del juego el website
      //website: data.website,
      rating: data.rating,
      genres: ( data.genres.map( ( g ) => g.name ) ).join( ' | ' ),
    };
    //console.log(idDataGames);
    return idDataGames;
  } else {
    const searchById = await Videogame.findByPk( id, {
      include: {
        model: Genre,
        attributes: [ "name" ],
        through: { attributes: [] },
      },
    });
    console.log( searchById );

    const gameDb = {
      id: searchById.dataValues.id,
      name: searchById.dataValues.name,
      description: searchById.dataValues.description,
      platforms: searchById.dataValues.platforms,
      image: searchById.dataValues.image,
      released: searchById.dataValues.released,
      rating: searchById.dataValues.rating,
      genres: searchById.dataValues.Genres?.map( ( gen ) => gen.name ).join( ' | ' ),
    }
    return gameDb;
  }
};

// GET | /videogames/name?="..."
const nameDataGames = async ( name )=> {
  const URL = `${URL_BASE}games?search=${name}&key=${API_KEY}&page_size=15`
  try {
    // busca en la api
    const response = await axios.get( URL );
    const apiData = response.data.results.map(
      ({
        id,
        name,
        //description,
        platforms,
        background_image,
        released,
        rating,
        genres
      }) => ({
        id: id,
        name: name,
        //description: description,
        platforms: platforms.map(p => p.platform.name),
        image: background_image,
        released: released,
        rating: rating,
        genres: genres.map(g => g.name)
      })
    );
    
      //console.log(apiData.length);
      //console.log(apiData);
      
    //busca en la Base de Datos donde la columna name contenga el string name, y sus géneros
    const dbData = await Videogame.findAll({
      where: {
        name: {
          // hace la comparación sin distinguir entre mayúsculas y minúsculas y espacios
          [Op.iLike]: `%${name}%`,
        },
      },
      include: [{
        model: Genre,
        attributes: ['name'],
        through: {
          attributes: []
        }
      }],
      limit: 15,
    })
    const dbDataGames = dbData.map(({
      id,
      name,
      description,
      platforms,
      background_image,
      released,
      rating,
      Genres //nombre de la propiedad "Genres" para coincidir con la asociación en la consulta de la tabla
    }) => ({
      id: id,
      name: name,
      description: description,
      platforms: platforms,
      image: background_image,
      released: released,
      rating: rating,
      genres: Genres.map( genre => genre.name )
    }))

    //verifica si el arreglo está vacío, osea, si no se encontraron resultados en la API y en la Base de datos
    if ( apiData.length === 0 && dbDataGames.length === 0 ) {
      return { message: 'No games with this name were found in the API or in the DB' }
    } 
    
  // crea un array con los resultados encontrados tanto en la Api como la BD
  const totalData = apiData.concat( dbDataGames );
  console.log( totalData.length, 'API y DB' );

    return totalData;
  } 
  catch ( error ) {
    throw new Error( "Error when fetching the games in the API and the database" )
  }
};

module.exports = { allDataGames, idDataGames, nameDataGames };