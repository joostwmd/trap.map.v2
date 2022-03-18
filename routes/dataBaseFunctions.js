const router = require("express").Router();
const Artist = require("../models/Artist");
const ArtistSignUp = require('../models/ArtistSignUp')
const City = require('../models/City')
const Creative = require('../models/Creative')
const CreativeSignUp = require('../models/CreativeSignUp')



router.get("/getArtists", (req, res, next) => {
    Artist.find({})
        .then(artists => {
            res.status(200).json(artists)
        })
        .catch(err => next(err))
})

router.get("/getCities", (req, res, next) => {
    City.find({})
        .then(cities => {
            res.status(200).json(cities)
        })
        .catch(err => next(err))
})


router.get("/getCreatives", (req, res, next) => {
    Creative.find({})
        .then(creatives => {
            res.status(200).json(creatives)
        })
        .catch(err => next(err))
})




router.post("/artistProfile", (req, res, next) => {
    Artist.findById(req.body.dataBaseId)
        .then(artist => {
            res.status(200).json(artist)
        })
})

router.post('/getArtistConnections', (req, res, next) => {
    Artist.findById(req.body.connectedArtist)
        .then(artist => {
            res.status(200).json(artist.coordinates)
        })
})

router.post('/signUpArtist', (req, res, next) => {
    ArtistSignUp.create({
        name: req.body.name,
        location: req.body.location,
        spotifyLink: req.body.spotifyLink,
        appleMusicLink: req.body.appleMusicLink,
        youtubeLink: req.body.youtubeLink,
        instagramLink: req.body.instaLink,
    })
})

router.post("/creativeProfile", (req, res, next) => {
    Creative.findById(req.body.dataBaseId)
        .then(creative => {
            res.status(200).json(creative)
        })
})

router.post('/signUpCreative', (req, res, next) => {
    CreativeSignUp.create({
        location : req.body.location,
        name : req.body.name,
        type : req.body.type,
        discription : req.body.discription,
        links : req.body.links,
        contactInfo : req.body.contactInfo
    })
})







module.exports = router;
