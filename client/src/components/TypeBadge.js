import { Center, Text, Flex, Image } from '@chakra-ui/react'

import artistIcon from '../style/icons/artist.png'
import designerIcon from '../style/icons/designer.png'
import producerIcon from '../style/icons/producer.png'
import studioIcon from '../style/icons/studio.png'
import videographIcon from '../style/icons/videograph.png'


function TypeBadge({ type }) {

    if (type === 'artist') {
        return (
            <Center
                backgroundColor='#fff'
                w='20vw'
                h='20vw'
                borderRadius='90%'
                ml='5vw'
                mr='5vw'
            >
                <Image
                    src={artistIcon}
                    w='15vw'
                    h='15vw'
                />
            </Center>
        )

    } else if (type === 'designer') {
        return (
            <Center
                backgroundColor='#fff'
                w='20vw'
                h='20vw'
                borderRadius='90%'
                ml='5vw'
                mr='5vw'
            >
                <Image
                    src={designerIcon}
                    w='15vw'
                    h='15vw'
                />
            </Center>
        )

    } else if (type === 'producer') {
        return (
            <Center
                backgroundColor='#fff'
                w='20vw'
                h='20vw'
                borderRadius='90%'
                ml='5vw'
                mr='5vw'
            >
                <Image
                    src={producerIcon}
                    w='15vw'
                    h='15vw'
                />
            </Center>
        )

    } else if (type === 'studio') {
        return (
            <Center
                backgroundColor='#fff'
                w='20vw'
                h='20vw'
                borderRadius='90%'
                ml='5wv'
                mr='5wv'
            >
                <Image
                    src={studioIcon}
                    w='15wv'
                    h='15wv'
                />
            </Center>
        )

    } else if (type === 'videograph') {
        return (
            <Center
                backgroundColor='#fff'
                w='20vw'
                h='20vw'
                borderRadius='90%'
                ml='5wv'
                mr='5wv'
            >
                <Image
                    src={videographIcon}
                    w='15wv'
                    h='15wv'
                />
            </Center>
        )
    }
}

export default TypeBadge
