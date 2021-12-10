const router = require("express").Router();
const Artist = require("../models/Artist");



router.get("/map", (req, res, next) => {
    console.log("test map")
    Artist.find({})
         .then(artists => {
           res.status(200).json(artists)
         })
  
         .catch(err => next(err))
})


router.post("/artistProfile", (req, res, next) => {
    console.log("artistProfileRoute", req.body.artistDB)

    Artist.findById(req.body.artistDB)
        .then(artist => {
            res.status(200).json(artist)
        })
})

module.exports = router;
