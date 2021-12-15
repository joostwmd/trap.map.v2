import { useState, useEffect } from 'react'
import axios from 'axios'

import Track from '../components/Track';
import ArtistProfileHeader from '../components/ArtistProfileHeader';

function ArtistProfile() {


    //const API_URL = process.env.API_URL;
    //const API_URL = 'http://localhost:5005'
    const API_URL = 'https://trapmapversion2.herokuapp.com'

    //header
    const [artistName, setArtistName] = useState("")
    const [artistPicture, setArtistPicture] = useState("")
    const [releasedMusic, setReleasedMusic] = useState("")
    const [links, setLinks] = useState({})



    //tracks
    const [topTracks, setTopTracks] = useState([])
   
    //render
    
    


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

    const getArtistsIds = async () => {
        const data = localStorage.getItem('data')
        //console.log('test', data.split(",")[0].split(":")[1], data.split(",")[1].split(":")[1].slice(0, -1))
        return [data.split(",")[0].split(":")[1], data.split(",")[1].split(":")[1].slice(0, -1)]
    }

    const getSpotifyData = async (spotifyId) => {
        const requestBody = {spotifyId}

        const response = await axios.post(`${API_URL}/spotify/loadArtistProfile`, requestBody)
        const data = await response

        console.log("spotify data", data)
        return data
    }

    const getDataBaseData = async (dataBaseId) => {
        const requestBody = {dataBaseId}

        const response = await axios.post(`${API_URL}/dataBase/artistProfile`, requestBody)
        const data = await response

        console.log("db data", data)
        return data
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
                        console.log(dataBaseData)
                        //header
                        setLinks({
                            "spotify" : dataBaseData.data.spotifyLink,
                            "youtube" : dataBaseData.data.youtubeLink,
                            "instagram" : dataBaseData.data.instagramLink
                        })
                    })

            })        
    }, [])


    
    return (
        <div id="profileWrapper">
            
            <ArtistProfileHeader artistName={artistName} artistPicture={artistPicture} releasedMusic={releasedMusic} links={links} />

            {topTracks.map(track => {
                if (track.preview_url !== null){
                    return (
                        <div>
                            <Track track={track} artistName={artistName}/>
                        </div>
                )
                }
            })}
        </div>
    )
}

export default ArtistProfile