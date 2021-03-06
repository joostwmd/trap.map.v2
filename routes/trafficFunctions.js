const router = require("express").Router();

//traffic models
const TrapMapVisit = require("../models/Traffic/TrapMapVisit")
const SpotifyVisit = require("../models/Traffic/SpotifyVisit")
const InstagramVisit = require("../models/Traffic/InstagramVisit")
const YoutubeVisit = require("../models/Traffic/YoutubeVisit")
const AppleMusicVisit = require("../models/Traffic/AppleMusicVisit")
const SnippetPlayed = require("../models/Traffic/SnippetPlayed")
const SignUpForBetaKey = require("../models/Traffic/SignUpForBetaKey")


router.post("/addTrapMapProfileVisit", (req, res, next) => {
    TrapMapVisit.create({
        artist: req.body.artistDatabaseId
    })
        .then(createdDoc => {
            res.status(200).json(createdDoc)
        })
        .catch(err => console.log(err))
})


router.post("/addSpotifyProfileVisit", (req, res, next) => {
    SpotifyVisit.create({
        artist: req.body.artistDatabaseId
    })
        .then(createdDoc => {
            res.status(200).json(createdDoc)
        })
        .catch(err => console.log(err))
})

router.post("/addAppleMusicProfileVisit", (req, res, next) => {
    AppleMusicVisit.create({
        artist: req.body.artistDatabaseId
    })
        .then(createdDoc => {
            res.status(200).json(createdDoc)
        })
        .catch(err => console.log(err))
})


router.post("/addInstagramProfileVisit", (req, res, next) => {
    InstagramVisit.create({
        artist: req.body.artistDatabaseId
    })
        .then(createdDoc => {
            res.status(200).json(createdDoc)
        })
        .catch(err => console.log(err))
})


router.post("/addYoutubeProfileVisit", (req, res, next) => {
    YoutubeVisit.create({
        artist: req.body.artistDatabaseId
    })
        .then(createdDoc => {
            res.status(200).json(createdDoc)
        })
        .catch(err => console.log(err))
})

router.post("/addSnippetPlayed", (req, res, next) => {
    SnippetPlayed.create({
        artist: req.body.artistDatabaseId
    })
        .then(createdDoc => {
            res.status(200).json(createdDoc)
        })
        .catch(err => console.log(err))
})


router.post("/addSignUpForBetaKey", (req, res, next) => {
    SignUpForBetaKey.create({
        email: req.body.email
    })
        .then(createdDoc => {
            res.status(200).json(createdDoc)
        })
        .catch(err => console.log(err))
})

module.exports = router;