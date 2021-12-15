const router = require("express").Router();
const Artist = require("../models/Artist");

const spotifyFetchToken = require('../spotifyApi/fetchTokenConfig')
const spotifyArtistCalls = require('../spotifyApi/artistCallsConfig');



router.post("/loadArtistProfile", (req ,res, next) => {
    
  //test
  console.log("spotify", req.body.spotifyId)

  spotifyFetchToken.fetchPublicToken()
    .then(token => {
      spotifyArtistCalls.loadArtistProfile(token, req.body.spotifyId)
        .then(spotifyData => {
          res.status(200).json(spotifyData)
        })
        .catch(err => next(err))
    })
})

module.exports = router;