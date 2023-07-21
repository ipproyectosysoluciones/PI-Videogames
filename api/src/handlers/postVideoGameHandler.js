const postDataVideoGames = require( '../controllers/postVideoGameController' );

const postVideoGames = async ( req, res ) => {
  const {
    name,
    description,
    plataforms,
    image,
    released,
    rating,
    genres,
  } = req.body;
  if ( !name || !description ) {
    return res.status( 404 ).send( "Falta enviar datos obligatorios" );
  }
  try {
    const postGame = await postDataVideoGames(
      name,
      description,
      plataforms,
      image,
      released,
      rating,
      genres,
    );
    console.log( postGame, 'Juego creado correctamente' );
    res.status( 200 ).json( postGame );
  } catch ( error ) {
    res.status( 404 ).json( { error: error.message } );
  }
};

module.exports = postVideoGames;