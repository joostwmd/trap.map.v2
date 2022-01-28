import { Image, Center } from '@chakra-ui/react'



function ArtistProfileHeader({artistPicture}) {
    
    //for development
    //const CLIENT_URL = 'http://localhost:3000'

    //for deployment
    const CLIENT_URL = 'https://trapmap.herokuapp.com'

    //public url
    //const CLIENT_URL = 'https://trapmap.eu'

    const redirectToMap = () => {
        window.location.href = `${CLIENT_URL}/map`
    }

    const arrowLeftIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="90%" height="90%"><path fill="none" d="M0 0h24v24H0z"/><path d="M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z" fill="rgba(147,129,255,1)"/></svg>
    
    return (
        <div>
            <div style={{position : 'relative'}}>
                <Image  
                    src={artistPicture}
                    w='100vw'
                    mb='5vh'
                />
                <Center
                    onClick={() => redirectToMap()}
                    w='7.5vw'
                    h='7.5vw'
                    pos='absolute'
                    top='1vh'
                    ml='2vw'

                    backgroundColor='#fff'
                    borderRadius='50%'
                >
                    {arrowLeftIcon}
                </Center>
            </div>
        </div>
    )
}

export default ArtistProfileHeader


