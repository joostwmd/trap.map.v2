import { Center, Heading, Image } from '@chakra-ui/react'

function ArtistProfileHeader({artistName, artistPicture}) {
    return (
        <div>
            <div>
                <Image  
                    src={artistPicture}
                    w='100vw'
                    mb='-25vh'
                    roundedBottom='5%'
                    />
                <Heading
                    fontSize='4.2em'
                    color='brand.200'
                    ml='5vw'
                    mb='25vh'
                >
                    {artistName}
                </Heading>
            </div>
        </div>
    )
}

export default ArtistProfileHeader

