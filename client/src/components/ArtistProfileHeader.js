import { Center, Heading, Image } from '@chakra-ui/react'

function ArtistProfileHeader({artistName, artistPicture}) {
    return (
        <div>
            <Image 
                src={artistPicture}
                w="100vw" 
            />
            
            <Center><Heading>{artistName}</Heading></Center>
        </div>
    )
}

export default ArtistProfileHeader

