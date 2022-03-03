import { useState, useEffect } from 'react'
import axios from 'axios'
import { Center, Heading, Flex } from '@chakra-ui/react'

import Track from '../components/Track'
import AppLogoWithLink from '../components/AppLogoWithLink'
import ArtistProfileHeader from '../components/ArtistProfileHeader'

import { SERVER_URL } from '../clientVariables'

// import { createConnectionLayer, jumpToCenter, createCloseConnectionsButton } from '../mapboxApi/artistConnectionsLayer'
// import { closeArtistProfilePopup } from '../mapboxApi/artistPopupLayer'

function ArtistProfile({ dataBaseId, spotifyId, currentMap, popup }) {

    //artist info
    const [name, setName] = useState("")
    const [picture, setPicture] = useState("")
    const [topTracks, setTopTracks] = useState([])
    const [links, setLinks] = useState([])
    const [coords, setCoords] = useState([])

    const [dataBaseDataFetched, setDataBaseDataFetched] = useState(false)
    const [spotifyDataFetched, setSpotifyDataFetched] = useState(false)

    let count = 0

    const getSpotifyData = async (spotifyId) => {
        const requestBody = { spotifyId }

        const response = await axios.post(`${SERVER_URL}/spotify/artistProfile`, requestBody)
        const data = await response

        return data
    }

    const getDataBaseData = async (dataBaseId) => {
        const requestBody = { dataBaseId }

        const response = await axios.post(`${SERVER_URL}/dataBase/artistProfile`, requestBody)
        const data = await response

        return data
    }


    //traffic functions
    const addTrapMapProfileVisit = (artistDatabaseId) => {
        let requestBody = { artistDatabaseId }
        axios.post(`${SERVER_URL}/traffic/addTrapMapProfileVisit`, requestBody)
    }


    // const handleShowConnections = (currentMap, dataBaseId, artistCoords) => {
    //     createConnectionLayer(currentMap, dataBaseId)
    //     closeArtistProfilePopup(currentMap, popup)
    //     jumpToCenter(currentMap, artistCoords)
    //     createCloseConnectionsButton(currentMap)
    // }





    useEffect(() => {
        getDataBaseData(dataBaseId)
            .then(dataBaseData => {
                setDataBaseDataFetched(true)
                setLinks([
                    ["spotify", dataBaseData.data.spotifyLink],
                    ["appleMusic", dataBaseData.data.appleMusicLink],
                    ["youtube", dataBaseData.data.youtubeLink],
                    ["instagram", dataBaseData.data.instagramLink]
                ])
                addTrapMapProfileVisit(dataBaseData.data._id)
                setCoords(dataBaseData.data.coordinates)
            })

        getSpotifyData(spotifyId)
            .then(spotifyData => {
                setSpotifyDataFetched(true)
                setName(spotifyData.data[0].name)
                setPicture(spotifyData.data[0].images[0].url)
                setTopTracks(spotifyData.data[1])
            })
    }, [])

    if (dataBaseDataFetched === true && spotifyDataFetched === true){
        return (
            <div className='mapBlur'>
                <div className="artistProfile">
                    <ArtistProfileHeader currentMap={currentMap} artistPicture={picture} popup={popup} />
    
                    <Flex
                        justifyContent='center'
                        h='20vw'
                        mb='2vh'
                    >
                        {links.map(link => {
                            //makes sure that every app logo is a working link
                            if (link[1] !== '') {
                                return (
                                    <AppLogoWithLink key={link[1]} app={link[0]} link={link[1]} dataBaseId={dataBaseId} />
                                )
                            }
                        })}
                    </Flex>
    
                    <div className='artistNameWrapper'>
                        <h2>{name.replaceAll('$', 'S')}</h2>
                    </div>

                    {/* <button
                        onClick={() => {handleShowConnections(currentMap, dataBaseId, coords)}}
                    >
                        show connection
                    </button> */}
    
    
                    <div>
                        {topTracks.map(track => {
                            //makes sure that every track is playable
                            if (track.preview_url !== null) {
                                count++
                                return (
                                    <Track key={track.name} track={track} dataBaseId={dataBaseId} count={count} />
                                )
                            }
                        })}
                    </div>
                </div>
            </div>
        )
    } 
    //block nothing is retuned error
    else {
        return (
            <div/>
        )
    }
}

export default ArtistProfile


