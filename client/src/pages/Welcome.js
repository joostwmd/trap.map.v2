import { useState } from 'react'
import axios from 'axios'
import { Heading, Button, Input, Flex } from '@chakra-ui/react'
import { SERVER_URL, CLIENT_URL } from '../clientVariables'

function Welcome() {

    const [key, setKey] = useState('')
    const [status, setStatus] = useState('')

    const enterBetaKey = () => {
        const requestBody = { key }
        axios.post(`${SERVER_URL}/dataBase/accessBeta`, requestBody)
            .then(res => {
                if (res.data.res === 'accessGranted') {
                    redirectToHomepage()
                } else if (res.data.res === 'accessDenied') {
                    setStatus('accessDenied')
                }
            })
    }

    const redirectToHomepage = () => {
        window.location.href = `${CLIENT_URL}/VPcpfJADsmwQqmurzmhr`
    }


    if (status !== 'accessDenied') {
        return (
            <div>
                <Flex
                    flexDir='column'
                    alignItems='center'
                >
                    <Heading
                        fontSize='20vw'
                        color='#fff'
                    >
                        Welcome
                    </Heading>

                    <Heading
                        fontSize='10vw'
                        color='brand.200'
                    >
                        enter the key
                    </Heading>
                    <Input
                        id='keyInput'
                        value={key}
                        onChange={e => setKey(e.target.value)}
                        focusBorderColor='brand.200'

                        size='md'
                        width='90vw'
                        mb='2vh'
                    />

                    <Button
                        onClick={() => { enterBetaKey() }}
                        bg='brand.200'
                        rounded='md'
                        w='50vw'
                        h='15vw'
                        mb='5vh'
                    >
                        <Heading
                            fontSize='7.5vw'
                            color='#fff'
                        >
                            access
                        </Heading>
                    </Button>

                </Flex>
            </div>
        )
    } else if (status === 'accessDenied') {
        return (
            <div>
                  <Flex
                    flexDir='column'
                    alignItems='center'
                >
                    <Heading
                        fontSize='20vw'
                        color='#fff'
                    >
                        Welcome
                    </Heading>

                    <Heading
                        fontSize='10vw'
                        color='brand.200'
                    >
                        wrong key! try again
                    </Heading>
                    <Input
                        id='keyInput'
                        value={key}
                        onChange={e => setKey(e.target.value)}
                        focusBorderColor='brand.200'

                        size='md'
                        width='90vw'
                        mb='2vh'
                    />

                    <Button
                        onClick={() => { enterBetaKey() }}
                        bg='brand.200'
                        rounded='md'
                        w='50vw'
                        h='15vw'
                        mb='5vh'
                    >
                        <Heading
                            fontSize='7.5vw'
                            color='#fff'
                        >
                            access
                        </Heading>
                    </Button>

                </Flex>
            </div>
        )
    }

}

export default Welcome
