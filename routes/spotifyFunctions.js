const router = require("express").Router();

const spotifyFetchToken = require('../spotifyApi/fetchTokenConfig')
const spotifyArtistCalls = require('../spotifyApi/artistCallsConfig');



router.post("/artistProfile", (req ,res, next) => {
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