import { useState } from 'react'
import { Input, Center, Heading, Text, Flex, Button, Switch } from '@chakra-ui/react'
import axios from 'axios'
import { SERVER_URL, CLIENT_URL } from '../clientVariables'

function EnterRelease() {

    const arrowLeftIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="90%" height="90%"><path fill="none" d="M0 0h24v24H0z" /><path d="M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z" fill="rgba(147,129,255,1)" /></svg>
    const [status, setStatus] = useState('enter')
    const redirectToHome = () => {
        window.location.href = `${CLIENT_URL}/`
    }
    const redirectToMap = () => {
        window.location.href = `${CLIENT_URL}/map`

    }
    const redirectToReleases = () => {
        window.location.href = `${CLIENT_URL}/releases`
    }

    const [artistName, setArtistName] = useState('')
    const typesOfRelease = ['single', 'ep', 'album']
    const [typeOfRelease, setTypeOfRelease] = useState('')
    const [title, setTitle] = useState('')
    const [releaseDate, setReleaseDate] = useState('')
    const [presafeLink, setPresafeLink] = useState('')

    const createNewRelease = () => {
        if (artistName !== '' && typeOfRelease !== '' && title !== '' && releaseDate !== '') {
            const requestBody = { artistName, typeOfRelease, title, releaseDate, presafeLink }
            axios.post(`${SERVER_URL}/dataBase/createRelease`, requestBody)
                .then(res => {
                    if (res.status === 200) {
                        setStatus('entered')
                    }
                })
        }
    }

    if (status === 'enter') {
        return (
            <div>

                <Center
                    onClick={() => redirectToHome()}
                    w='7.5vw'
                    h='7.5vw'
                    pos='absolute'
                    top='2vw'
                    ml='2vw'
                    backgroundColor='#fff'
                    borderRadius='50%'
                >
                    {arrowLeftIcon}
                </Center>

                <Flex
                    flexDir='column'
                    alignItems='center'
                >
                    <Flex
                        w='75vw'
                    >
                        <Heading
                            fontSize='10vw'
                            color='brand.200'
                            textAlign='center'
                        >
                            enter you next release
                        </Heading>
                    </Flex>

                    <Text
                        mt='3.5vh'
                        fontSize='7.5vw'
                        ml='5vw'
                        mr='5vw'
                        mb='4vh'
                        align='center'
                    >
                        your artist name
                    </Text>

                    <Input
                        className='releaseInput'
                        value={artistName}
                        onChange={e => setArtistName(e.target.value)}
                        focusBorderColor='brand.200'
                        placeholder='required'
                        errorBorderColor='brand.200'
                        size='md'
                        width='90vw'
                        mb='2vh'
                    />

                    <Text
                        mt='3.5vh'
                        fontSize='7.5vw'
                        ml='5vw'
                        mr='5vw'
                        mb='4vh'
                        align='center'
                    >
                        type of release
                    </Text>

                    {typesOfRelease.map(type => {
                        if (type === typeOfRelease) {
                            return (
                                <Flex
                                    w='70vw'
                                    key={type}
                                    flexDir='row'
                                    alignItems='center'
                                    justifyContent='space-between'
                                >
                                    <Text
                                        fontSize='7.5vw'
                                        mr='20vw'
                                    >
                                        {type}
                                    </Text>

                                    <Flex
                                        alignItems='center'
                                    >
                                        <Switch
                                            id={`switch${type}`}
                                            value={typeOfRelease}
                                            isChecked
                                            onChange={() => { setTypeOfRelease(type) }}
                                            size='lg'
                                            colorScheme='purple'
                                            mb='2vh'
                                        />
                                    </Flex>
                                </Flex>
                            )
                        } else {
                            return (
                                <Flex
                                    w='70vw'
                                    key={type}
                                    flexDir='row'
                                    alignItems='center'
                                    justifyContent='space-between'
                                >
                                    <Text
                                        fontSize='7.5vw'
                                        mr='20vw'
                                    >
                                        {type}
                                    </Text>

                                    <Flex
                                        alignItems='center'
                                    >
                                        <Switch
                                            id={`switch${type}`}
                                            value={typeOfRelease}
                                            isChecked={false}
                                            onChange={() => { setTypeOfRelease(type) }}
                                            size='lg'
                                            colorScheme='purple'
                                            mb='2vh'
                                        />
                                    </Flex>
                                </Flex>
                            )
                        }
                    })}

                    <Text
                        mt='3.5vh'
                        fontSize='7.5vw'
                        ml='5vw'
                        mr='5vw'
                        mb='4vh'
                        align='center'
                    >
                        title of release
                    </Text>

                    <Input
                        className='releaseInput'
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        focusBorderColor='brand.200'
                        placeholder='required'
                        errorBorderColor='brand.200'
                        size='md'
                        width='90vw'
                        mb='2vh'
                    />

                    <Text
                        mt='3.5vh'
                        fontSize='7.5vw'
                        ml='5vw'
                        mr='5vw'
                        mb='1vh'
                        align='center'
                    >
                        release date
                    </Text>

                    <Text
                        fontSize='4.5vw'
                        ml='5vw'
                        mr='5vw'
                        mb='5vh'
                        align='center'
                    >
                        required format: DD.MM, no useless zeros (01.01 - 1.1)
                    </Text>

                    <Input
                        className='releaseInput'
                        value={releaseDate}
                        onChange={e => setReleaseDate(e.target.value)}
                        focusBorderColor='brand.200'
                        placeholder='required'
                        errorBorderColor='brand.200'
                        size='md'
                        width='90vw'
                        mb='2vh'
                    />

                    <Text
                        mt='3.5vh'
                        fontSize='7.5vw'
                        ml='5vw'
                        mr='5vw'
                        mb='1vh'
                        align='center'
                    >
                        pre-save link
                    </Text>


                    <Input
                        className='releaseInput'
                        value={presafeLink}
                        onChange={e => setPresafeLink(e.target.value)}
                        focusBorderColor='brand.200'
                        placeholder='optional'
                        errorBorderColor='brand.200'
                        size='md'
                        width='90vw'
                        mb='2vh'
                    />

                    <Button
                        onClick={() => { createNewRelease() }}
                        bg='brand.200'
                        rounded='md'
                        w='50vw'
                        h='15vw'
                        mb='5vh'
                    >
                        <Heading
                            fontSize='10vw'
                            color='#fff'
                            letterSpacing='wider'
                        >
                            enter
                        </Heading>
                    </Button>
                </Flex>
            </div>
        )
    } else if (status === 'entered') {
        return (
            <div>
                <Flex
                    flexDir='column'
                >
                    <Heading
                        fontSize='15vw'
                        color='brand.200'
                        textAlign='center'
                        mb='7.5vh'
                    >
                        top
                    </Heading>
                    <Center>
                        <Button
                            onClick={() => { redirectToMap() }}
                            bg='brand.200'
                            rounded='md'
                            w='50vw'
                            h='15vw'
                            mb='5vh'
                        >
                            <Heading
                                fontSize='10vw'
                                color='#fff'
                                letterSpacing='wider'
                            >
                                map
                            </Heading>
                        </Button>
                    </Center>

                    <Center>
                        <Button
                            onClick={() => { redirectToReleases() }}
                            bg='brand.200'
                            rounded='md'
                            w='75vw'
                            h='15vw'
                            mb='5vh'
                        >
                            <Heading
                                fontSize='10vw'
                                color='#fff'
                                letterSpacing='wider'
                            >
                                releases
                            </Heading>
                        </Button>
                    </Center>

                    <Center>
                        <Button
                            onClick={() => { redirectToHome() }}
                            bg='#fff'
                            rounded='md'
                            w='50vw'
                            h='15vw'
                            mb='5vh'
                        >
                            <Heading
                                fontSize='10vw'
                                color='brand.200'
                                letterSpacing='wider'
                            >
                                home
                            </Heading>
                        </Button>
                    </Center>
                </Flex>
            </div>
        )
    }
}

export default EnterRelease
