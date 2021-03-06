import { Image, Center } from '@chakra-ui/react'
import {closeArtistProfilePopup} from '../mapboxApi/artistProfilePopup'



function ArtistProfileHeader({ artistPicture, currentMap, popup }) {

    const arrowLeftIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="90%" height="90%"><path fill="none" d="M0 0h24v24H0z" /><path d="M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z" fill="rgba(147,129,255,1)" /></svg>

    return (
        <div>
            <div style={{ position: 'relative' }}>
                <Image
                    src={artistPicture}
                    w='100vw'
                    mb='5vh'
                />

                <Center
                    onClick={() => closeArtistProfilePopup(currentMap, popup)}
                    w='7.5vw'
                    h='7.5vw'
                    pos='absolute'
                    top='2vw'
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


