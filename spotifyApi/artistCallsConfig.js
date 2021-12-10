const SpotifyWebApi = require('spotify-web-api-node') 

const publicSpotifyApi = new SpotifyWebApi({
  ClientId: process.env.SPOTIFY_CLIENT_ID, 
})



const setPublicSpotifyApiToken = (token) => {
    publicSpotifyApi.setAccessToken(token)
}


const getArtistInfo = (artistId) => {
    
    const res = publicSpotifyApi.getArtist(artistId)
        .then(function(data){
            return data.body
        }, function(err){
            console.log('Something went wrong', err)
        })
    return res
}

const getArtistTopTracks = (artistId) => {
    
    const res = publicSpotifyApi.getArtistTopTracks(artistId, "DE")
        .then(function(data){
            return data.body.tracks
        }, function(err){
            console.log('Something went wrong!', err)
        })
    return res
}

const getArtistAlbums = (artistId) => {
    
    const res = publicSpotifyApi.getArtistAlbums(artistId)
        .then(function(data){
            return data.body.items
        }, function(err){
            console.log('Something went wrong!', err)
        })
    return res
}

const loadArtistProfile = async (token, artistId) => {
    setPublicSpotifyApiToken(token)

    const info = await getArtistInfo(artistId)
    const topTracks = await getArtistTopTracks(artistId)
    const artistAlbum = await getArtistAlbums(artistId)

    return [info, topTracks, artistAlbum]
}

module.exports = {loadArtistProfile}