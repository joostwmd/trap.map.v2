import { useState } from 'react'
import axios from 'axios'


import chromeGrillzBottom from '../style/chromeGrillzBottom.png'
import chromeGrillzTop from '../style/chromeGrillzTop.png'

import { Input, Center, Heading, Text, Flex, Button, Image} from '@chakra-ui/react'

function Home() {

    //for development
    // const API_URL = 'http://localhost:5005'
    // const CLIENT_URL = 'http://localhost:3000'

    const API_URL = 'https://trapmapversion2.herokuapp.com'
    const CLIENT_URL = 'https://trapmapversion2.herokuapp.com'

    const redirectToMap = () => {
        window.location.href = `${CLIENT_URL}/map`

    }


    const [email, setEmail] = useState("")
    const singUpForBetaKey = () => {
        if (document.getElementById('singUpButton').firstElementChild.innerHTML === 'submit'){
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

                <Text
                    align='center'
                    mb='2vh'
                >
                    new plattfrom to discover music: no algorithms, no playlists, just you and the music
                </Text>

                <Button
                    bg='brand.200'
                    rounded='md'
                    onClick={() => {redirectToMap() }}
                >
                    <Heading
                        fontSize='2em'
                        color='#fff'
                        letterSpacing='wider'
                    >
                        demo version
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
                            fontSize='3em'
                            color='#fff'
                        >
                            stay tuned
                        </Heading>

                        <Text
                            align='center'
                            mb='5vh'
                        >
                            we are devoloping an app, q2 release,you can sing-up for an early access key
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
                        >
                            <Heading
                                fontSize='2em'
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


            <Center>
                <Heading
                    align='center'
                    fontSize='2.25em'
                    color='#fff'
                >
                    DM us on <a href="https://www.instagram.com/mapmusic.berlin/" style={{ textDecoration: 'underline', textDecorationColor: '#9381FF' }}>insta</a>
                </Heading>
            </Center>

        </div>
    )
}

export default Home