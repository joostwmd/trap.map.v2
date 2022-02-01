import { Heading, Flex } from '@chakra-ui/react'
import { CLIENT_URL } from '../clientVariables'

function Nav({ currentMap, currentCity, jumpToCity }) {

    const redirectToHomepage = () => {
        window.location.href = `${CLIENT_URL}`
    }

    const citys = ['hamburg', 'berlin', 'vienna']

    return (
        <div className='mapNav'>
            <Flex
                bg='brand.100'
                w='100vw'
                h='10vw'
                alignItems='center'
                justifyContent='space-around'
            >

                {citys.map(city => {
                    if (currentCity === city) {
                        return (
                            <Heading
                                key={city}
                                onClick={() => jumpToCity(currentMap, city)}
                                fontSize='7.5vw'
                                color='brand.200'
                                letterSpacing='wider'
                                mr='5vw'
                                ml='5vw'
                            >
                                {city}
                            </Heading>
                        )
                    } else {
                        return (
                            <Heading
                                key={city}
                                onClick={() => jumpToCity(currentMap, city)}
                                fontSize='7.5vw'
                                color='#fff'
                                letterSpacing='wider'
                                mr='5vw'
                                ml='5vw'
                            >
                                {city}
                            </Heading>
                        )
                    }

                })}
            </Flex>
        </div>
    )
}

export default Nav