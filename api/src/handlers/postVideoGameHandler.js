const postDataVideoGames = require( '../controllers/postVideoGameController' );

const postVideoGames = async ( req, res ) => {
  const {
    name,
    description,
    platforms,
    image,
    released,
    rating,
    genres,
  } = req.body;
  if ( !name || !description ) {
    return res.status( 404 ).send( "Missing mandatory data" );
  }
  try {
    const postGame = await postDataVideoGames(
      name,
      description,
      platforms,
      image,
      released,
      rating,
      genres,
    );
    console.log( postGame, 'Game created successfully' );
    res.status( 200 ).json( postGame );
  } catch ( error ) {
    res.status( 404 ).json( { error: error.message } );
  }
};

module.exports = postVideoGames;