import React, { useState, useEffect } from 'react'


function Track({track, artistName}) {


   

    const artistsOnTrack = track.artists
    const [theArtists, setTheArtists] = useState([])
    
    const getArtistsOnTrack = () => {
        
        let artistString = "feat: "
        for (let artist of artistsOnTrack){

            if (artistName !== artist.name){
                artistString += `${artist.name}, `
            }
             
        }
        setTheArtists(artistString)
    }

    

    useEffect(() => {
        getArtistsOnTrack()
    }, [])

   
    //no feat 
    if(theArtists === "feat: "){
       return (
        <div>
            <img src={track.album.images[1].url} />
            <h4>{track.name}</h4>
        
            <audio controls>
                <source src={track.preview_url} />
            </audio>
        </div>
    )
    }

    if(theArtists !== "feat: "){
        return (
        <div>
            <img src={track.album.images[1].url} />
            <h4>{track.name}</h4>
            <h5>{theArtists.slice(0, -2)}</h5>

            <audio controls>
                <source src={track.preview_url} />
            </audio>
        </div>
        )
    }
   
}

export default Track
