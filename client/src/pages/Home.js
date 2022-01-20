import { useState } from 'react'
import axios from 'axios'


import chromeGrillzBottom from '../style/chromeGrillzBottom.png'
import chromeGrillzTop from '../style/chromeGrillzTop.png'

import { Input, Center, Heading, Text, Flex, Button, Image, Box } from '@chakra-ui/react'

function Home() {

    //for development
    //const URL = 'http://localhost:3000'

    const URL = 'https://trapmapversion2.herokuapp.com'

    //svg for animation
    const checkIcon = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\"><path fill=\"none\" d=\"M0 0h24v24H0z\"/><path d=\"M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z\"/></svg>"
    const paperPlaneIcon = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\"><path fill=\"none\" d=\"M0 0h24v24H0z\"></path><path d=\"M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z\" fill=\"rgba(255,255,255,1)\"></path></svg>"



    const redirectToMap = () => {
        window.location.href = `${URL}/map/`

    }

    const signUpAnimation = () => {
       if (document.getElementById('singUpButton').firstElementChild.innerHTML === 'submit'){
            document.getElementById('singUpButton').firstChild.innerHTML = 'thanks'
            document.getElementById('singUpButton').style.backgroundColor = '#fff'
            document.getElementById('singUpButton').firstChild.style.color = '#9381FF'
       }
    }

    const [email, setEmail] = useState("")
    const singUpForBetaKey = () => {
        //add email to db
        const requestBody = { email }
        axios.post(`${URL}/traffic/addSignUpForBetaKey`, requestBody)

        //button animation
        signUpAnimation()
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
                    onClick={() => { redirectToMap() }}
                >
                    <Heading
                        fontSize='2em'
                        color='#fff'
                        letterSpacing='widest'
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
                                letterSpacing='widest'
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