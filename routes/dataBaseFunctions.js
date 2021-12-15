const router = require("express").Router();
const Artist = require("../models/Artist");



router.get("/map", (req, res, next) => {
    
    Artist.find({})
         .then(artists => {
           res.status(200).json(artists)
         })
  
         .catch(err => next(err))
})


router.post("/artistProfile", (req, res, next) => {
    console.log(req.body.dataBaseId)
    Artist.findById(req.body.dataBaseId)
        .then(artist => {
            res.status(200).json(artist)
        })
})


module.exports = router;
