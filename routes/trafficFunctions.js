const router = require("express").Router();

//traffic models
const TrapMapVisit = require("../models/Traffic/TrapMapVisit")
const SpotifyVisit = require("../models/Traffic/SpotifyVisit")
const InstagramVisit = require("../models/Traffic/InstagramVisit")
const YoutubeVisit = require("../models/Traffic/YoutubeVisit")
const SnippetPlayed = require("../models/Traffic/SnippetPlayed")
const SignUpForBetaKey = require("../models/Traffic/SignUpForBetaKey")


router.post("/addTrapMapProfileVisit", (req, res, next) => {
    console.log("add trap map", req.body)

    TrapMapVisit.create({
        artist : req.body.dataBaseId
    })  
})


router.post("/addSpotifyProfileVisit", (req, res, next) => {
    console.log("add spotiy", req.body)

    SpotifyVisit.create({
        artist : req.body.dataBaseId
    })    
})

router.post("/addAppleMusicProfileVisit", (req, res, next) => {
    console.log("add apple music", req.body)

    YoutubeVisit.create({
        artist : req.body.dataBaseId
    }) 
   
    
})


router.post("/addInstagramProfileVisit", (req, res, next) => {
    console.log("add insta", req.body)
    
    InstagramVisit.create({
        artist : req.body.dataBaseId
    }) 
    
})


router.post("/addYoutubeProfileVisit", (req, res, next) => {
    console.log("add youtube", req.body)

    YoutubeVisit.create({
        artist : req.body.dataBaseId
    }) 
   
    
})

router.post("/addSnippetPlayed", (req, res, next) => {
   console.log('add snippet', req.body)

   SnippetPlayed.create({
       artist : req.body.dataBaseId
   })
   
   
})


router.post("/addSignUpForBetaKey", (req, res, next) => {
    SignUpForBetaKey.create({
        email : req.body.email
    })
})

module.exports = router;