import { Input, Center, Heading, Text, Flex, Button, Image, Container } from '@chakra-ui/react'

function Nav() {
    //for development
    //const CLIENT_URL = 'http://localhost:3000'

    const CLIENT_URL = 'https://trapmapversion2.herokuapp.com'

    const redirectToHomepage = () => {
        window.location.href = `${CLIENT_URL}/`
        
    }

    const redirectToMap = () => {
        window.location.href = `${CLIENT_URL}/map`
        
    }

    return (
        <div>
            <Flex  
                bg='brand.200'
                w='100vw'
                h='10vw'
                alignItems='center'
                justifyContent='space-around'
            >
                <Text 
                    onClick={() => {redirectToHomepage()}}
                    fontSize='5vw'
                >
                    home
                </Text>

                <Text 
                    onclick={() => {redirectToMap()}}
                    fontSize='5vw'
                >
                    map
                </Text>
            
            </Flex>
        </div>
    )
}

export default Nav