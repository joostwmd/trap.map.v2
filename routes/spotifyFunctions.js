const router = require("express").Router();
const Artist = require("../models/Artist");

const spotifyFetchToken = require('../spotifyApi/fetchTokenConfig')
const spotifyArtistCalls = require('../spotifyApi/artistCallsConfig');



router.post("/loadArtistProfile", (req ,res, next) => {
    
  //test
  console.log("spotify", req.body.spotifyId.slice(1, (req.body.spotifyId.length - 1)))
  

  spotifyFetchToken.fetchPublicToken()
    .then(token => {
      spotifyArtistCalls.loadArtistProfile(token, req.body.spotifyId.slice(1, (req.body.spotifyId.length - 1)))
        .then(spotifyData => {
          res.status(200).json(spotifyData)
        })
        .catch(err => next(err))
    })
  
    // spotifyFetchToken.fetchPublicToken()
    // .then(token => {
    //   Artist.findById(req.body.artistDatabaseId)
    //     .then(artistFromDB => {
    //       spotifyArtistCalls.loadArtistProfile(token, artistFromDB.spotifyID)
    //         .then(spotifyData => {
    //           res.status(200).json(spotifyData)
    //         })
    //     })
    //     .catch(err => next(err))
    // })
})

module.exports = router;