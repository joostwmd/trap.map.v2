import { Heading, Image } from '@chakra-ui/react'


function ArtistProfileHeader({artistName, artistPicture}) {
    return (
        <div>
            <div>
                <Image  
                    src={artistPicture}
                    w='100vw'
                    mb='5vh'
                    />
                <Heading
                    className='artistNameInProfileHeader'
                    fontSize='20vw'
                    color='#fff'
                    
                    ml='5vw'
                    pos='absolute'
                    top='5vw'
                >
                    {artistName}
                </Heading>
            </div>
        </div>
    )
}

export default ArtistProfileHeader

