import React, { useState, useEffect } from 'react'


function Track({track, artistName}) {


    const API_URL = 'http://localhost:3000'

    const artistsOnTrack = track.artists
    const [theArtists, setTheArtists] = useState([])
    
    const getArtistsOnTrack = () => {
        //let artistArray = []
        let artistString = ""
        for (let artist of artistsOnTrack){
            // if (artist.external_urls.spotify !== undefined){
            //     artistArray.push({name : artist.name, id : artist.id})
            // }

            if (artistName !== artist.name){
                artistString += `${artist.name}, `
            }
             
        }
        //setTheArtists(artistString)
        setTheArtists(artistString)
    }

    

    useEffect(() => {
        getArtistsOnTrack()
    }, [])

   

    return (
        <div>
            <img src={track.album.images[1].url} />
            <h4>{track.name}</h4>
            <h5>feat: {theArtists.slice(0, -2)}</h5>
            {/* {theArtists.map(artist => {
                if (artist.id !== undefined){
                    return (
                        <a href={`${API_URL}/map/spotifyID:${artist.id}`}>{artist.name} </a>
                    )
                } else {
                    return (
                        <h5>{artist.name}</h5>
                    )
                }
            })} */}
            <audio controls>
                <source src={track.preview_url} />
            </audio>
        </div>
    )
}

export default Track