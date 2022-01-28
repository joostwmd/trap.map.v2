import { useState } from 'react'
import axios from 'axios'


import chromeGrillzBottom from '../style/chromeGrillzBottom.png'
import chromeGrillzTop from '../style/chromeGrillzTop.png'

import { Input, Center, Heading, Text, Flex, Button, Image } from '@chakra-ui/react'

function Home() {

    //for development
    // const API_URL = 'http://localhost:5005'
    // const CLIENT_URL = 'http://localhost:3000'

    const API_URL = 'https://trapmap.herokuapp.com'
    const CLIENT_URL = 'https://trapmap.herokuapp.com'

    const redirectToMap = () => {
        window.location.href = `${CLIENT_URL}`

    }


    const [email, setEmail] = useState("")
    const singUpForBetaKey = () => {
        if (document.getElementById('singUpButton').firstElementChild.innerHTML === 'submit') {
            //add email to db
            const requestBody = { email }
            axios.post(`${API_URL}/traffic/addSignUpForBetaKey`, requestBody)

            //ui feedback
            document.getElementById('singUpButton').firstChild.innerHTML = 'thanks'
            document.getElementById('singUpButton').style.backgroundColor = '#fff'
            document.getElementById('singUpButton').firstChild.style.color = '#9381FF'
            document.getElementById('emailInput').disabled = true
        }
    }


    return (
        <div>
            <Center
                flexDir='column'
                ml='5vw'
                mr='5vw'
                mb='15vh'
            >
                <Heading
                    mt='20px'
                    mb='20px'
                    color='#fff'
                >
                    trap map heading
                </Heading>
            </Center>

            <Center
                flexDir='column'
                ml='5vw'
                mr='5vw'
                mb='15vh'
            >
                <Heading
                    fontSize='15vw'
                    color='#fff'
                >
                    about
                </Heading>

                <Text
                    align='center'
                    mb='2vh'
                    fontSize='3.5vw'
                >
                    For years, we've relied on algorithms to discover new trap songs and artists.  But now these algorithms have become so important that trappers
                    have to adapt their music to them in order to have a fair chance of success.  The tool we created to find the best music for us now determines what the best music is.
                    And we are here to change that.

                </Text>

                <Text
                    align='center'
                    mb='2vh'
                    fontSize='3.5vw'
                >
                    We have created a way for you to discover rap music without having to rely on a playlist or algorithms: We've mapped the world of trap music.
                </Text>

                <Text
                    align='center'
                    mb='2vh'
                    fontSize='3.5vw'
                >
                    Every trapper is linked on our map in the hood he represents with his music. No marker is bigger or smaller, lighter or darker, all trappers are displayed equally.
                    And all you need to do to find your next favorite track is to browse our map
                </Text>

                <Button
                    bg='brand.200'
                    rounded='md'
                    w='75vw'
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

            <Center
                mr='5vw'
                ml='5vw'
                mb='15vh'
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
                        >
                            stay tuned
                        </Heading>

                        <Text
                            align='center'
                            mb='5vh'
                            fontSize='3.5vw'
                        >
                            we are currently developing an app that we would like to release in summer 22.
                            You can enter your email address to receive an early access key and the opportunity to
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
                            w='75vw'
                            h='15vw'
                            mb='2vh'
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
            >
                <Text
                    align='center'
                    fontSize='3.5vw'
                    color='#fff'
                >
                    if you have ideas or suggestions for improvements or if you miss a trapper on our map,
                    DM on us on
                </Text>

                <Heading
                    aling='center'
                    fontSize='12vw'
                    color='#fff'
                >
                    <a href="https://www.instagram.com/mapmusic.berlin/" style={{ textDecoration: 'underline', textDecorationColor: '#9381FF' }}>insta</a>
                </Heading>
            </Center>

        </div>
    )
}

export default Home