const router = require("express").Router();
const Artist = require("../models/Artist");
//const mapboxgl =  require('!mapbox-gl');
const mapboxgl = require('mapbox-gl')



router.get("/map", (req, res, next) => { 
    Artist.find({'city' : 'demo'})
         .then(artists => {
           res.status(200).json(artists)
         })
        .catch(err => next(err))
})


router.post("/artistProfile", (req, res, next) => {
    Artist.findById(req.body.dataBaseId)
        .then(artist => {
            res.status(200).json(artist)
        })
})


module.exports = router;
