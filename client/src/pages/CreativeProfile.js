import { useEffect, useState } from 'react'
import axios from 'axios'
import { Flex, Center, Heading, Text } from '@chakra-ui/react'

import { SERVER_URL } from '../clientVariables'

import { closeArtistProfilePopup } from '../mapboxApi/artistProfilePopup'
import TypeBadge from '../components/TypeBadge'

function CreativeProfile({ dataBaseId, currentMap, popup }) {

    const arrowLeftIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="90%" height="90%"><path fill="none" d="M0 0h24v24H0z" /><path d="M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z" fill="rgba(147,129,255,1)" /></svg>
    const [dataBaseDataFetched, setDataBaseDataFetched] = useState(false)

    const [name, setName] = useState('')
    const [types, setTypes] = useState([])
    const [discription, setDiscription] = useState('')
    const [links, setLinks] = useState([])
    const [contacts, setContacts] = useState([])




    const getDataBaseData = async (dataBaseId) => {
        const requestBody = { dataBaseId }
        const response = await axios.post(`${SERVER_URL}/dataBase/creativeProfile`, requestBody)
        const data = await response
        return data
    }

    useEffect(() => {
        getDataBaseData(dataBaseId)
            .then(dataBaseData => {
                setDataBaseDataFetched(true)
                setName(dataBaseData.data.name)
                setDiscription(dataBaseData.data.discription)
                setTypes(dataBaseData.data.type)
                setLinks(dataBaseData.data.links)
                setContacts(dataBaseData.data.contactInfo)

            })
    }, [])





    if (dataBaseDataFetched === true) {
        return (
            <div className='mapBlur'>
                <div className="creativeProfile">

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
                        maxW='85vw'
                    >
                        {name}
                    </Heading>


                    <Text
                        fontSize='5vw'
                        textAlign='center'
                        maxW='85vw'
                    >
                        {discription}
                    </Text>


                    <Heading
                        fontSize='12.5vw'
                        color='brand.200'
                        mt='7.5vh'
                        mb='5vh'
                    >
                        links
                    </Heading>

                    {links.map(link => {
                        return (
                            <a
                                href={link[1]}
                            >
                                <Text
                                    fontSize='7vw'
                                    mt='2.5vh'
                                    textDecorationLine='underline'
                                    textDecorationColor='brand.200'
                                >
                                    {link[0]}
                                </Text>
                            </a>
                        )
                    })}


                    <Heading
                        fontSize='12.5vw'
                        color='brand.200'
                        mt='7.5vh'
                        mb='5vh'
                    >
                        contact
                    </Heading>

                    <Flex
                        flexDir='column'
                        w='75vw'
                    >
                        {contacts.map(contact => {
                            return (
                                <Flex
                                    flexDir='column'
                                    alignItems='center'
                                    mb='3vh'
                                    maxW='70vw'
                                >
                                    <Text
                                        fontSize='5vw'
                                        color='brand.200'
                                        mb='1.5vh'

                                    >
                                        {contact[0]}
                                    </Text>

                                    <Text
                                        fontSize='7.5vw'
                                        maxW='70vw'
                                        textAlign='center'
                                    >
                                        {contact[1]}
                                    </Text>
                                </Flex>
                            )
                        })}
                    </Flex>
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

export default CreativeProfile
