import { useState } from 'react'
import { Input, Center, Heading, Text, Flex, Button, Image } from '@chakra-ui/react'

import axios from 'axios'

import { SERVER_URL, CLIENT_URL } from '../clientVariables'

function SignUp() {
    const [status, setStatus] = useState('signUp')

    const [name, setName] = useState('')
    const [location, setLocation] = useState('')
    const [spotifyLink, setSpotifyLink] = useState('')
    const [youtubeLink, setYoutubeLink] = useState('')
    const [instaLink, setInstaLink] = useState('')
    const [appleMusicLink, setAppleMusicLink] = useState('')
    const [favSong, setFavSong] = useState('')

    const signUp = () => {
        setStatus('signedUp')
        const requestBody = { name, location, spotifyLink, youtubeLink, instaLink, appleMusicLink, favSong }
        axios.post(`${SERVER_URL}/dataBase/signUpArtist`, requestBody)
    }

    if (status === 'signUp') {
        return (
            <div>
                <Input
                    required
                    id="nameInput"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="email adress"
                    focusBorderColor='brand.200'

                    size='md'
                    width='90vw'
                    mb='2vh'
                />

                <Input
                    required
                    id="loactionInput"
                    value={location}
                    onChange={e => setLocation(e.target.value)}
                    placeholder="email adress"
                    focusBorderColor='brand.200'

                    size='md'
                    width='90vw'
                    mb='2vh'
                />

                <Input
                    required
                    id="spotifyLinkInput"
                    value={spotifyLink}
                    onChange={e => setSpotifyLink(e.target.value)}
                    placeholder="email adress"
                    focusBorderColor='brand.200'

                    size='md'
                    width='90vw'
                    mb='2vh'
                />

                <Input
                    id="appleMusicLinkInput"
                    value={appleMusicLink}
                    onChange={e => setAppleMusicLink(e.target.value)}
                    placeholder="email adress"
                    focusBorderColor='brand.200'

                    size='md'
                    width='90vw'
                    mb='2vh'
                />

                <Input
                    id="youtubeLinkInput"
                    value={youtubeLink}
                    onChange={e => setYoutubeLink(e.target.value)}
                    placeholder="email adress"
                    focusBorderColor='brand.200'

                    size='md'
                    width='90vw'
                    mb='2vh'
                />

                <Input
                    id="instaLinkInput"
                    value={instaLink}
                    onChange={e => setInstaLink(e.target.value)}
                    placeholder="email adress"
                    focusBorderColor='brand.200'

                    size='md'
                    width='90vw'
                    mb='2vh'
                />

                <Heading>authentification</Heading>

                <Input
                    required
                    id="favSong"
                    value={favSong}
                    onChange={e => setFavSong(e.target.value)}
                    placeholder="email adress"
                    focusBorderColor='brand.200'

                    size='md'
                    width='90vw'
                    mb='2vh'
                />

                <Button
                    onClick={() => { signUp() }}
                >
                    <Heading
                    >
                        singUp
                    </Heading>
                </Button>


            </div>
        )
    } else if (status === 'signedUp') {
        return (
            <div>
                <Heading>thank you</Heading>
            </div>
        )
    }
}

export default SignUp
