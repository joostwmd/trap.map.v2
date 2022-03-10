import { useState, useEffect } from 'react'
import axios from 'axios'
import { Flex } from '@chakra-ui/react'

import Track from '../components/Track'
import AppLogoWithLink from '../components/AppLogoWithLink'
import ArtistProfileHeader from '../components/ArtistProfileHeader'
import ConnectionsButton from '../components/ConnectionsButton'

import { SERVER_URL } from '../clientVariables'

import { handleShowConnectionsClick } from '../mapboxApi/artistConnectionsLayer'
import { closeArtistProfilePopup } from '../mapboxApi/artistProfilePopup'

function ArtistProfile({ dataBaseId, spotifyId, currentMap, popup }) {

    //artist info
    const [name, setName] = useState("")
    const [picture, setPicture] = useState("")
    const [topTracks, setTopTracks] = useState([])
    const [links, setLinks] = useState([])
    const [coords, setCoords] = useState([])

    const [dataBaseDataFetched, setDataBaseDataFetched] = useState(false)
    const [spotifyDataFetched, setSpotifyDataFetched] = useState(false)
    const [hasConnections, setHasConnections] = useState(false)

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

    const addSnippetPlayed = (dataBaseId) => {
        let requestBody = { dataBaseId }
        axios.post(`${SERVER_URL}/traffic/addSnippetPlayed`, requestBody)
    }


    const handleShowConnectionsClickWrapper = (currentMap, dataBaseId, coords, popup) => {
        closeArtistProfilePopup(currentMap, popup)
        handleShowConnectionsClick(currentMap, dataBaseId, coords)

    }

    const getRandomTrack = async (tracks) => {
        let shuffel = Math.floor(Math.random() * tracks.length)
        const randomTrack = await tracks[shuffel]
        return randomTrack
    }

    const playRandomTrack = async (tracks) => {
        getRandomTrack(tracks)
            .then(track => {
                const randomAudio = document.getElementById(`audioPlayer${track.name}`)
                randomAudio.play()

                //add visual feedback
                const randomTrackTitle = document.getElementById(`trackTitle${track.name}`)
                randomTrackTitle.style.color = '#9381FF'

                //reset track
                randomAudio.ontimeupdate = () => {
                    if (randomAudio.currentTime >= 30) {
                        randomAudio.pause()

                        //remove visual feedback
                        const trackTitle = document.getElementById(`trackTitle${track.name}`)
                        trackTitle.style.color = '#fff'
                    }
                }
            })
    }


    useEffect(() => {
        getDataBaseData(dataBaseId)
            .then(dataBaseData => {
                setDataBaseDataFetched(true)
                if (dataBaseData.data.connections.length !== 0) {
                    setHasConnections(true)
                }

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
                playRandomTrack(spotifyData.data[1])
                addSnippetPlayed(dataBaseId)
            })
    }, [])

    if (dataBaseDataFetched === true && spotifyDataFetched === true) {
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

                    <div
                        onClick={() => { handleShowConnectionsClickWrapper(currentMap, dataBaseId, coords, popup) }}
                    >
                        <ConnectionsButton hasConnections={hasConnections} />
                    </div>

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
            <div />
        )
    }
}

export default ArtistProfile





