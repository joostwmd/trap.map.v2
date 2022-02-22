import { useState, useEffect } from 'react'
import axios from 'axios'
import { Center, Heading, Flex } from '@chakra-ui/react'

import Track from '../components/Track'
import AppLogoWithLink from '../components/AppLogoWithLink'
import ArtistProfileHeader from '../components/ArtistProfileHeader'

import { SERVER_URL } from '../clientVariables'

function ArtistProfile() {

    //artist info
    const [artistName, setArtistName] = useState("")
    const [artistDatabaseId, setArtistDatabaseId] = useState("")
    const [artistPicture, setArtistPicture] = useState("")
    const [links, setLinks] = useState([])
    const [topTracks, setTopTracks] = useState([])

    let count = 0


    //fetch data function
    const getArtistsIds = async () => {
        return [window.location.pathname.split(":")[1], window.location.pathname.split(":")[2]]
    }

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



    useEffect(() => {

        getArtistsIds()
            .then(ids => {
                getDataBaseData(ids[0])
                    .then(dataBaseData => {
                        setArtistDatabaseId(dataBaseData.data._id)
                        //header
                        setLinks([
                            ["spotify", dataBaseData.data.spotifyLink],
                            ["appleMusic", dataBaseData.data.appleMusicLink],
                            ["youtube", dataBaseData.data.youtubeLink],
                            ["instagram", dataBaseData.data.instagramLink]
                        ])

                        //add trapMap visits
                        addTrapMapProfileVisit(dataBaseData.data._id)

                        //set current coords / city ad session storage item
                        sessionStorage.setItem('coords', dataBaseData.data.coordinates)
                        sessionStorage.setItem('city', dataBaseData.data.city)
                    })

                getSpotifyData(ids[1])
                    .then(spotifyData => {
                        //header
                        setArtistName(spotifyData.data[0].name)
                        setArtistPicture(spotifyData.data[0].images[0].url)
                        //setReleasedMusic(countTracks(spotifyData.data[2]))

                        //tracks
                        setTopTracks(spotifyData.data[1])
                    })
            })
    }, [])

    return (
        <div className="artistProfile">
            <ArtistProfileHeader artistName={artistName} artistPicture={artistPicture} />

            <Flex
                justifyContent='center'
                h='20vw'
                mb='2vh'
            >
                {links.map(link => {
                    //makes sure that every app logo is a working link
                    if (link[1] !== ''){
                        return (
                            <AppLogoWithLink key={link[1]} app={link[0]} link={link[1]} artistDatabaseId={artistDatabaseId} />
                        )
                    } 
                })}
            </Flex>

            <Center>
                <Heading
                    color='#fff'
                    mb='5vh'
                    letterSpacing='wider'
                    fontSize='17.5vw'
                >
                   {artistName.replaceAll('$', 'S')}
                </Heading>
            </Center>

            <div>
                {topTracks.map(track => {
                    //makes sure that every track is playable
                    if (track.preview_url !== null) {
                        count++
                        return (
                            <Track key={track.name} track={track} artistName={artistName} artistDatabaseId={artistDatabaseId} count={count} />
                        )
                    }
                })}
            </div>
        </div>
    )
}

export default ArtistProfile


