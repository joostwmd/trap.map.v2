import { useState } from 'react'
import { Input, Center, Heading, Text, Flex, Button, Image, FormControl, FormLabel, FormErrorMessage, FormHelperText } from '@chakra-ui/react'

import axios from 'axios'

import { SERVER_URL, CLIENT_URL } from '../clientVariables'

function SignUp() {
    const [status, setStatus] = useState('signUp')

    const [name, setName] = useState('')
    const [location, setLocation] = useState('')
    const [spotifyLink, setSpotifyLink] = useState('')
    const [favSong, setFavSong] = useState('')
    const [instaLink, setInstaLink] = useState('')
    const [youtubeLink, setYoutubeLink] = useState('')
    const [appleMusicLink, setAppleMusicLink] = useState('')

    const arrowLeftIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="90%" height="90%"><path fill="none" d="M0 0h24v24H0z" /><path d="M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z" fill="rgba(147,129,255,1)" /></svg>

    const redirectToHome = () => {
        window.location.href = `${CLIENT_URL}/home`
    }

    const redirectToMap = () => {
        window.location.href = `${CLIENT_URL}`

    }

    const signUp = () => {
        if (name !== '' && spotifyLink !== '' && spotifyLink !== '' && instaLink !== '' && favSong !== '') {
            setStatus('signedUp')
            const requestBody = { name, location, spotifyLink, youtubeLink, instaLink, appleMusicLink, favSong }
            axios.post(`${SERVER_URL}/dataBase/signUpArtist`, requestBody)
        }
    }

    if (status === 'signUp') {
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


                <Center
                    flexDir='column'
                >
                    <Heading
                        fontSize='15vw'
                        color='brand.200'
                    >
                        sing up
                    </Heading>


                    <Text
                        mt='10vh'
                        fontSize='4.2vw'
                        ml='5vw'
                        mr='5vw'
                        mb='5vh'
                        align='center'
                    >
                        your aka. this name will be used for your marker on the trapmap
                    </Text>


                    <Input
                        id='signUpInputName'
                        value={name}
                        onChange={e => setName(e.target.value)}
                        focusBorderColor='brand.200'
                        placeholder='required'
                        size='md'
                        width='90vw'
                        mb='2vh'
                    />

                    <Text
                        mt='10vh'
                        fontSize='4.2vw'
                        ml='5vw'
                        mr='5vw'
                        mb='5vh'
                        align='center'
                    >
                        your position on the trapmap. discribe the position (postal-code, adress, place, park)
                    </Text>


                    <Input
                        id='signUpInputName'
                        value={location}
                        onChange={e => setLocation(e.target.value)}
                        focusBorderColor='brand.200'
                        placeholder='required'
                        errorBorderColor='brand.200'
                        size='md'
                        width='90vw'
                        mb='2vh'
                    />

                    <Text
                        mt='10vh'
                        fontSize='4.2vw'
                        ml='5vw'
                        mr='5vw'
                        mb='5vh'
                        align='center'
                    >
                        link to your spotify profile
                    </Text>

                    <Input
                        id='signUpInputSpotify'
                        value={spotifyLink}
                        onChange={e => setSpotifyLink(e.target.value)}
                        focusBorderColor='brand.200'
                        placeholder='required'
                        size='md'
                        width='90vw'
                        mb='2vh'
                    />

                    <Text
                        mt='10vh'
                        fontSize='4.2vw'
                        ml='5vw'
                        mr='5vw'
                        mb='5vh'
                        align='center'
                    >
                        link to your insta profile
                    </Text>

                    <Input
                        id='signUpInputSpotify'
                        value={instaLink}
                        onChange={e => setInstaLink(e.target.value)}
                        focusBorderColor='brand.200'
                        placeholder='required'
                        size='md'
                        width='90vw'
                        mb='2vh'
                    />


                    <Text
                        mt='10vh'
                        fontSize='4.2vw'
                        ml='5vw'
                        mr='5vw'
                        mb='5vh'
                        align='center'
                    >
                        link to your apple music profile
                    </Text>

                    <Input
                        id='signUpInputSpotify'
                        value={appleMusicLink}
                        onChange={e => setAppleMusicLink(e.target.value)}
                        focusBorderColor='brand.200'
                        placeholder='not required'
                        size='md'
                        width='90vw'
                        mb='2vh'
                    />


                    <Text
                        mt='10vh'
                        fontSize='4.2vw'
                        ml='5vw'
                        mr='5vw'
                        mb='5vh'
                        align='center'
                    >
                        link to your youtube profile
                    </Text>

                    <Input
                        id='signUpInputSpotify'
                        value={youtubeLink}
                        onChange={e => setYoutubeLink(e.target.value)}
                        focusBorderColor='brand.200'
                        placeholder='not required'
                        size='md'
                        width='90vw'
                        mb='10vh'
                    />


                    <Heading
                        color='#fff'
                        fontSize='10vw'
                        textDecorationLine='underline'
                        textDecorationColor='brand.200'
                    >
                        authentification
                    </Heading>

                    <Text
                        fontSize='4.2vw'
                        mt='5vh'
                        ml='5vw'
                        mr='5vw'
                        align='center'
                    >
                        we don't want anyone to sign you up without your permission.
                        therefore we have a security question for you
                    </Text>

                    <Text
                        fontSize='5vw'
                        color='brand.200'
                        mt='5vh'
                        ml='5vw'
                        mr='5vw'
                        align='center'
                    >
                        whats your favorite track?
                    </Text>

                    <Input
                        id='signUpInputFavSong'
                        value={favSong}
                        onChange={e => setFavSong(e.target.value)}
                        focusBorderColor='brand.200'
                        placeholder='required'
                        size='md'
                        width='90vw'
                        mt='5vh'
                        mb='10vh'
                    />

                    <Button
                        onClick={() => { signUp() }}
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
                            sign up
                        </Heading>
                    </Button>




                </Center>
            </div>
        )
    } else if (status === 'signedUp') {
        return (
            <div>
                <Flex
                    mt='2vh'
                    flexDir='column'
                    ml='5vw'
                    mr='5vw'
                >
                    <Heading
                        color='brand.200'
                        letterSpacing='wider'
                        fontSize='17.5vw'
                        align='center'
                        mb='5vh'
                    >
                        thank you
                    </Heading>

                    <Text
                        fontSize='5vw'
                        align='center'
                        mb='15vh'
                    >
                        we will message you on instagram to verify your sign up
                    </Text>
                </Flex>

                <Flex
                    flexDir='column'
                >
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

export default SignUp
