const { Router } = require( "express" );
const {
  getAllVideoGames,
  getIdVideoGames,
  getNameVideoGames,
} = require( "../handlers/getVideoGameHandler" );
const postVideoGames = require( "../handlers/postVideoGameHandler" );

const videoGames = Router();

videoGames.get( "/", getAllVideoGames );
videoGames.get( "/name", getNameVideoGames );
videoGames.get( "/:id", getIdVideoGames );
videoGames.post( "/", postVideoGames );

module.exports = videoGames;