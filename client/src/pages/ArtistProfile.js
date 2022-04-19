import { useState, useEffect } from 'react'
import axios from 'axios'
import { Flex, Center, Heading } from '@chakra-ui/react'

import Track from '../components/Track'
import AppLogoWithLink from '../components/AppLogoWithLink'
import ArtistProfileHeader from '../components/ArtistProfileHeader'
import ConnectionsButton from '../components/ConnectionsButton'

import { SERVER_URL, ICONS } from '../clientVariables'

import { handleShowConnectionsClick } from '../mapboxApi/artistConnectionsLayer'
import { closeArtistProfilePopup } from '../mapboxApi/artistProfilePopup'
import TypeBadge from '../components/TypeBadge'

function ArtistProfile({ dataBaseId, spotifyId, currentMap, popup }) {

    //artist info
    const [name, setName] = useState("")
    const [types, setTypes] = useState([])
    const [links, setLinks] = useState([])
    const [coords, setCoords] = useState([])
    const arrowLeftIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="90%" height="90%"><path fill="none" d="M0 0h24v24H0z" /><path d="M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z" fill="rgba(147,129,255,1)" /></svg>

    const [dataBaseDataFetched, setDataBaseDataFetched] = useState(false)

    const [hasConnections, setHasConnections] = useState(false)


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


    const handleShowConnectionsClickWrapper = (currentMap, dataBaseId, coords, popup) => {
        closeArtistProfilePopup(currentMap, popup)
        handleShowConnectionsClick(currentMap, dataBaseId, coords)
    }


    useEffect(() => {
        getDataBaseData(dataBaseId)
            .then(dataBaseData => {
                setDataBaseDataFetched(true)
                if (dataBaseData.data.connections.length !== 0) {
                    setHasConnections(true)
                }

                setName(dataBaseData.data.name)
                setTypes(dataBaseData.data.type)
                setLinks([
                    ["spotify", dataBaseData.data.spotifyLink],
                    ["appleMusic", dataBaseData.data.appleMusicLink],
                    ["youtube", dataBaseData.data.youtubeLink],
                    ["instagram", dataBaseData.data.instagramLink]
                ])
                addTrapMapProfileVisit(dataBaseData.data._id)
                setCoords(dataBaseData.data.coordinates)
            })
    }, [])

    if (dataBaseDataFetched === true) {
        return (
            <div className='mapBlur'>
                <div className="artistProfile">

                    <Flex
                        alignItems='flex-start'
                        w='98vw'
                    >
                        <Center
                            onClick={() => closeArtistProfilePopup(currentMap, popup)}
                            w='7.5vw'
                            h='7.5vw'
                            mt='0.5vh'
                            ml='1vw'
                            pos='absolute'
                            backgroundColor='#fff'
                            borderRadius='50%'

                        >
                            {arrowLeftIcon}
                        </Center>
                    </Flex>


                    <Flex
                        justifyContent='center'
                        h='20vw'
                        
                        mt='5vh'
                    >
                        {types.map(type => {
                            return (
                                <TypeBadge type={type} />
                            )
                        })}
                    </Flex>


                    <Heading
                        fontSize='12.5vw'
                        color='brand.200'
                        mt='2.5vh'
                        mb='5vh'
                    >
                        {name}
                    </Heading>


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

                    <div
                        onClick={() => { handleShowConnectionsClickWrapper(currentMap, dataBaseId, coords, popup) }}
                    >
                        <ConnectionsButton hasConnections={hasConnections} />
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





