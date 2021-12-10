const router = require("express").Router();
const Artist = require("../models/Artist");

const spotifyFetchToken = require('../spotifyApi/fetchTokenConfig')
const spotifyArtistCalls = require('../spotifyApi/artistCallsConfig');


router.post("/loadArtistProfile", (req ,res, next) => {
  spotifyFetchToken.fetchPublicToken()
    .then(token => {
      Artist.findById(req.body.artistDB)
        .then(artistFromDB => {
          spotifyArtistCalls.loadArtistProfile(token, artistFromDB.spotifyID)
            .then(spotifyData => {
              res.status(200).json(spotifyData)
            })
        })
        .catch(err => next(err))
    })
})

module.exports = router;