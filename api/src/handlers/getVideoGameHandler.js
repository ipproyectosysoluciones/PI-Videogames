const { 
  allDataGames, 
  idDataGames,
  nameDataGames,
}= require( '../controllers/getVideoGameController' );

const getAllVideoGames = async ( req, res ) => {
  try {
    const videoGames = await allDataGames()
    res.status( 200 ).json( videoGames )
  } catch ( error ) {
    res.status( 404 ).json( { error: error.message } )
  }
};

const getIdVideoGames = async ( req, res ) => {
  const { id }= req.params;
  //console.log(id);
  try {
    const videoGames = await idDataGames( id );
    res.status( 200 ).json( videoGames );
  }
  catch ( error ) {
    res.status( 404 ).json( { error: error.message } );
  }
};

const getNameVideoGames = async ( req, res ) => {
  const { name } = req.query;
  const nameLower = name.toLowerCase();
  //console.log(nameLower);
  try {
    const videoGames = await nameDataGames( nameLower );
    res.status( 200 ).json( videoGames );
  } catch ( error ) {
    res.status( 404 ).json( { error: error.message } )
  }
};

module.exports = { 
  getAllVideoGames, 
  getIdVideoGames, 
  getNameVideoGames, 
}; 