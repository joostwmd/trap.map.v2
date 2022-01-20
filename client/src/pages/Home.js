import { useState } from 'react'
import axios from 'axios'

import chromeGrillz from '../style/chromeGrillz.png'
import { Input, Center, Heading, Text, Flex, Button, Image } from '@chakra-ui/react'

function Home() {

    //for development
    const URL = 'http://localhost:3000'

    //const URL = 'https://trapmapversion2.herokuapp.com'

    //svg for animation
    const checkIcon = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\"><path fill=\"none\" d=\"M0 0h24v24H0z\"/><path d=\"M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z\"/></svg>"
    const paperPlaneIcon = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\"><path fill=\"none\" d=\"M0 0h24v24H0z\"></path><path d=\"M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z\" fill=\"rgba(255,255,255,1)\"></path></svg>"



    const redirectToMap = () => {
        window.location.href = `${URL}/map/`

    }

    const signUpAnimation = () => {
        if (document.getElementsByClassName('signUpButtonIconContainer')[0].innerHTML === 'submit') {
            document.getElementsByClassName('signUpButtonIconContainer')[0].innerHTML = checkIcon;
            document.getElementsByClassName('signUpButton')[0].classList.toggle('signUpButton__circle');
            document.getElementById('emailInput').disabled = true
            document.getElementById('emailInput').placeholder = 'thank you'
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
            >
                <Heading
                    mt='20px'
                    mb='20px'
                >trap map heading</Heading>

                <p>new plattfrom to discover music: no algorithms, no playlists, just you and the music</p>
                <Button
                    px='5'
                    py='5'
                    bg='brand.200'
                    rounded='md'
                    onClick={() => { redirectToMap() }}
                >
                    <Heading>check out the demo version</Heading>

                </Button>
            </Center>

            <Flex
                flexDir="row"
                justifyContent="space-between">
                <Flex
                    flexDir='column'
                    justifyContent='center'
                    ml='10vw'
                >
                    <Flex
                        flexDir='column'
                        alignItems='center'
                    >
                        <Heading
                            marginBottom='7.5vh'
                        >stay tuned
                        </Heading>

                        <Text
                            marginBottom='7.5vh'
                        >we are devoloping an app, q2 release,<br></br> you can sing-up for an early access key</Text>

                        <Flex
                            // w='60%'
                        >
                            <Input
                                id="emailInput"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                placeholder="your email adress"

                                size='lg'
                                width='20vw'
                                focusBorderColor='brand.200'
                                marginRight='2.5vw'
                                
                            />

                            <Button onClick={() => singUpForBetaKey()}><Heading>sumbit</Heading></Button>
                        </Flex>
                    </Flex>
                </Flex>


                <Image id="chromeGrillz" src={chromeGrillz} />

            </Flex>

            <Center>
                <Heading>do you want to get on the map? DM us on <a href="https://www.instagram.com/mapmusic.berlin/" style={{ textDecoration: 'underline', textDecorationColor: '#9381FF' }}>insta</a></Heading>
            </Center>

        </div>
    )
}

export default Home