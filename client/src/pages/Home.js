import { useState } from 'react'
import axios from 'axios'

import chromeGrillzBottom from '../style/chromeGrillzBottom.png'
import chromeGrillzTop from '../style/chromeGrillzTop.png'
import trapmapLettering from '../style/trapmapLetteringRectangle.png'

import { Input, Center, Heading, Text, Flex, Button, Image } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

import { SERVER_URL, CLIENT_URL } from '../clientVariables'

function Home() {

    const redirectToMap = () => {
        window.location.href = `${CLIENT_URL}/map`

    }


    const [email, setEmail] = useState("")
    const singUpForBetaKey = () => {
        if (document.getElementById('singUpButton').firstElementChild.innerHTML === 'submit') {
            //add email to db
            const requestBody = { email }
            axios.post(`${SERVER_URL}/traffic/addSignUpForBetaKey`, requestBody)

            //ui feedback
            document.getElementById('singUpButton').firstChild.innerHTML = 'thanks'
            document.getElementById('singUpButton').style.backgroundColor = '#fff'
            document.getElementById('singUpButton').firstChild.style.color = '#9381FF'
            document.getElementById('emailInput').disabled = true
        }
    }


    return (
        <div>
            <Center>
                <Image
                    src={trapmapLettering}
                    w='90vw'
                    mb='3vh'
                />
            </Center>

            <Center
                flexDir='column'
                ml='5vw'
                mr='5vw'
                mb='15vh'
            >
                <Heading
                    align='center'
                    fontSize='7.5vw'
                    color='#fff'
                    letterSpacing='wider'
                    mb='5vh'
                >
                    <span style={{ color: '#9381FF' }}>don't </span>
                    let the
                    <span style={{ color: '#9381FF' }}> algorithms dictate </span>
                    what
                    <span style={{ color: '#9381FF' }}> music </span>
                    you listen to
                </Heading>

                <Text
                    align='center'
                    mb='5vh'
                    fontSize='4vw'
                >
                    we have mapped the world of trapmusic and thus created a way for you
                    to discover new artists without playlists or algorithms.
                </Text>

                <Button
                    bg='brand.200'
                    rounded='md'
                    w='50vw'
                    h='15vw'
                    onClick={() => { redirectToMap() }}
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
                <Link to='/signUp'>
                    <Button
                        color='#fff'
                        rounded='md'
                        w='90vw'
                        h='12.5vw'
                        mb='5vh'
                    >
                        <Heading
                            fontSize='10vw'
                            color='brand.200'
                            letterSpacing='wider'
                        >
                            sign up for artist
                        </Heading>

                    </Button>
                </Link>
            </Center>

            <Center
                mr='5vw'
                ml='5vw'
                mb='15vh'
                mt='15vh'
            >
                <Flex
                    flexDir='column'
                    alignItems='center'
                >
                    <Image src={chromeGrillzTop} />
                    <Flex
                        flexDir='column'
                        alignItems='center'
                    >
                        <Heading
                            fontSize='15vw'
                            color='#fff'
                            textDecorationLine='underline'
                            textDecorationColor='brand.200'
                        >
                            stay tuned
                        </Heading>

                        <Text
                            align='center'
                            mb='5vh'
                            fontSize='3.5vw'
                        >
                            we are currently developing an app that we release in summer 22.
                            you can enter your email address to receive an early access key and the opportunity to
                            contribute your ideas and develop this platform together with us.
                        </Text>


                        <Input
                            id="emailInput"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            placeholder="email adress"
                            focusBorderColor='brand.200'
                            size='md'
                            width='90vw'
                            mb='2vh'
                        />

                        <Button onClick={() => singUpForBetaKey()}
                            id="singUpButton"
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
                                submit
                            </Heading>
                        </Button>


                    </Flex>
                    <Image src={chromeGrillzBottom} />
                </Flex>
            </Center>

            <Center
                flexDir='column'
                ml='5vw'
                mr='5vw'
                mb='5vh'
            >
                <Heading
                    aling='center'
                    fontSize='12vw'
                    color='#fff'
                    textDecorationLine='underline'
                    textDecorationColor='brand.200'
                >
                    contact
                </Heading>
                <Text
                    align='center'
                    fontSize='3.5vw'
                    color='#fff'
                >
                    if you have ideas or suggestions for improvements or if you miss an artist on our map,
                    dm on us on
                </Text>


                <a href='https://www.instagram.com/trapmap.eu/'>
                    <Heading
                        aling='center'
                        fontSize='7.5vw'
                        color='brand.200'
                    >
                        insta
                    </Heading>
                </a>


                <Flex
                    mt='15vh'
                >
                    <Link to='/impressum'>
                        <Heading
                            fontSize='5vw'
                            color='#fff'
                            mr='12.5vw'
                            textDecorationLine='underline'
                            textDecorationColor='brand.200'
                        >
                            impressum
                        </Heading>
                    </Link>

                    <Link to='/datenschutz'>
                        <Heading
                            fontSize='5vw'
                            color='#fff'
                            ml='12.5vw'
                            textDecorationLine='underline'
                            textDecorationColor='brand.200'
                        >
                            datenschutz
                        </Heading>
                    </Link>
                </Flex>
            </Center>

        </div>
    )
}

export default Home