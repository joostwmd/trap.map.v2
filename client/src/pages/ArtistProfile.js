import { useState, useEffect } from 'react'
import axios from 'axios'

import Track from '../components/Track';
import ArtistProfileHeader from '../components/ArtistProfileHeader';

function ArtistProfile() {

    //for develpoment
    //const API_URL = 'http://localhost:5005'
    
    const API_URL = 'https://trapmapversion2.herokuapp.com'

    //artist info
    const [artistName, setArtistName] = useState("")
    const [artistDatabaseId, setArtistDatabaseId] = useState("")
    const [artistPicture, setArtistPicture] = useState("")
    const [releasedMusic, setReleasedMusic] = useState("")
    const [links, setLinks] = useState({})
    const [topTracks, setTopTracks] = useState([])

    //music related functions
    const countTracks = (albums) => {
        let trackCount = 0
        let singlesCount = 0
        let albumCount = 0

        for (let album of albums){
            if (album.album_type === "single"){
                trackCount++
                singlesCount++
            } else if (album.album_type === "album"){
                trackCount += album.total_tracks
                albumCount++
            }
        }


        return `tracks : ${trackCount}, singles : ${singlesCount}, albums : ${albumCount}`
    }

    const createFeaturesString = (artists) => {
        let featuresString = "feat: "
        for (let artist of artists){
            if (artistName !== artist.name){
                featuresString += `${artist.name}, `
            } 
        }
        return featuresString.slice(0, -2)
    }



    //fetch data function
    const getArtistsIds =  async () => {
        const artistIds = localStorage.getItem('artistIds')
        return artistIds.split(':')
    }

    const getSpotifyData = async (spotifyId) => {
        const requestBody = {spotifyId}

        const response = await axios.post(`${API_URL}/spotify/loadArtistProfile`, requestBody)
        const data = await response

        return data
    }

    const getDataBaseData = async (dataBaseId) => {
        const requestBody = {dataBaseId}

        const response = await axios.post(`${API_URL}/dataBase/artistProfile`, requestBody)
        const data = await response

        return data
    }
    

    //traffic functions
    const addTrapMapProfileVisit = (dataBaseId) => {
        let requestBody = {dataBaseId}
        axios.post(`${API_URL}/traffic/addTrapMapProfileVisit`, requestBody)
    }

    const addSpotifyProfileVisit = (dataBaseId) => {
        let requestBody = {dataBaseId}
        axios.post(`${API_URL}/traffic/addSpotifyProfileVisit`, requestBody)
    }

    const addAppleMusicProfileVisit = (dataBaseId) => {
        let requestBody = {dataBaseId}
        axios.post(`${API_URL}/traffic/addAppleMusicProfileVisit`, requestBody)
    }

    const addYoutubeProfileVisit = (dataBaseId) => {
        let requestBody = {dataBaseId}
        axios.post(`${API_URL}/traffic/addYoutubeProfileVisit`, requestBody)
    }

    const addInstagramProfileVisit = (dataBaseId) => {
        let requestBody = {dataBaseId}
        axios.post(`${API_URL}/traffic/addInstagramProfileVisit`, requestBody)
    }


    const addSnippetPlayed = (dataBaseId) => {
        let requestBody = {dataBaseId}
        axios.post(`${API_URL}/traffic/addSnippetPlayed`, requestBody)
    }


    useEffect( () => {
        
        getArtistsIds()
            .then(ids => {
                getSpotifyData(ids[0])
                    .then(spotifyData => { 
                        console.log(spotifyData)
                        //header
                        setArtistName(spotifyData.data[0].name)
                        setArtistPicture(spotifyData.data[0].images[0].url)
                        setReleasedMusic(countTracks(spotifyData.data[2]))

                        //tracks
                        setTopTracks(spotifyData.data[1])
                })

                getDataBaseData(ids[1])
                    .then(dataBaseData => {
                        setArtistDatabaseId(dataBaseData.data._id)
                        //header
                        setLinks({
                            "spotify" : dataBaseData.data.spotifyLink,
                            "appleMusic" : dataBaseData.data.appleMusicLink,
                            "youtube" : dataBaseData.data.youtubeLink,
                            "instagram" : dataBaseData.data.instagramLink
                        })

                        //add trapMap visits
                        addTrapMapProfileVisit(dataBaseData.data._id)
                    })

            })        
    }, [])

    return (
        <div>
            <div id="artistProfileHeader">
                <h1>{artistName}</h1>
                <img src={artistPicture} />
                <h4>{releasedMusic}</h4>

                <div onClick={() => {addSpotifyProfileVisit(artistDatabaseId)}}>
                    <a href={links.spotify}>spotify</a>
                </div>

                <div onClick={() => {addAppleMusicProfileVisit(artistDatabaseId)}}>
                    <a href={links.appleMusic}>apple music</a>
                </div>

                <div onClick={() => {addYoutubeProfileVisit(artistDatabaseId)}}>
                    <a href={links.youtube}>youtube</a>
                </div>

                <div onClick={() => {addInstagramProfileVisit(artistDatabaseId)}}>
                    <a href={links.instagram}>insta</a>
                </div>
            </div>

            <div id="tracks">
                {topTracks.map(track => {
                    if (track.artists.length === 1){
                        return (
                            <div class="trackWithoutFeatures">
                                <img src={track.album.images[1].url} />
                                <h4>{track.name}</h4>
        
                                <audio controls onPlay={() => {addSnippetPlayed(artistDatabaseId)}}>
                                    <source src={track.preview_url} />
                                </audio>
                            </div>
                        )
                    } else {
                        return (
                            <div class="trackWithFeatures">
                                <img src={track.album.images[1].url} />
                                <h4>{track.name}</h4>
                                <h5>{createFeaturesString(track.artists)}</h5>
        
                                <audio controls onPlay={() => {addSnippetPlayed(artistDatabaseId)}}>
                                    <source src={track.preview_url} />
                                </audio>
                            </div>
                        )
                    }
                })}
            </div>
        </div>
    )
}

export default ArtistProfile

