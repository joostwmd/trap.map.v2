const router = require("express").Router();
const Artist = require("../models/Artist");
const ArtistSignUp = require('../models/ArtistSignUp')
//const mapboxgl =  require('!mapbox-gl');
const mapboxgl = require('mapbox-gl')



router.get("/map", (req, res, next) => { 
    Artist.find({})
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

router.post('/signUpArtist', (req, res, next) => {
    console.log(req.body)
    ArtistSignUp.create({
        name : req.body.name,
        location : req.body.location,
        spotifyLink : req.body.spotifyLink,
        appleMusicLink : req.body.appleMusicLink,
        youtubeLink : req.body.youtubeLink,
        instagramLink : req.body.instaLink,
        favSong : req.body.favSong
    })
})

router.post('/accessBeta', (req, res, next) => {
    const key = req.body.key

    if (key === process.env.KEY){
        res.status(200).json({'res' : 'accessGranted'})
    } else {
        res.status(200).json({'res' : 'accessDenied'})
    }
})


module.exports = router;
