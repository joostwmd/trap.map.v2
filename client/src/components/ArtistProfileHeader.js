import { Heading, Image, Button, Center } from '@chakra-ui/react'



function ArtistProfileHeader({artistName, artistPicture}) {

    //const CLIENT_URL = 'https://trapmapversion2.herokuapp.com'

    //for development
    const CLIENT_URL = 'http://localhost:3000'

    const redirectToMap = () => {
        window.location.href = `${CLIENT_URL}/map`
    }
    
    return (
        <div>
            <div style={{position : 'relative'}}>
                <Image  
                    src={artistPicture}
                    w='100vw'
                    mb='5vh'
                />
                <Heading
                    onClick={() => redirectToMap()}
                    pos='absolute'
                    top='3vh'
                    ml='5vw'

                    fontSize='4vw'
                    color='#fff'
                    textDecorationLine='underline'
                    textDecorationColor='brand.200'
                >
                    map
                </Heading>
                <Center
                    pos='absolute'
                    top='75%'
                >
                    <Heading
                        className='artistNameInProfileHeader'
                        fontSize='12vw'
                        color='#fff'
                        ml='7.5vw'
                    >
                        {artistName}
                    </Heading>
                </Center>
            </div>
        </div>
    )
}

export default ArtistProfileHeader

