import { Heading, Flex } from '@chakra-ui/react'

function Nav({ currentMap, currentCity, jumpToCity }) {

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
                <Flex
                    ml='2.5vw'
                    mr='2.5vw'
                >
                    {citys.map(city => {
                        if (currentCity === city) {
                            return (
                                <Heading
                                    key={city}
                                    onClick={() => jumpToCity(currentMap, city)}
                                    fontSize='6vw'
                                    color='brand.200'
                                    letterSpacing='wider'
                                    mr='4.25vw'
                                    ml='4.25vw'
                                >
                                    {city}
                                </Heading>
                            )
                        } else {
                            return (
                                <Heading
                                    key={city}
                                    onClick={() => jumpToCity(currentMap, city)}
                                    fontSize='6vw'
                                    color='#fff'
                                    letterSpacing='wider'
                                    mr='4.25vw'
                                    ml='4.25vw'
                                >
                                    {city}
                                </Heading>
                            )
                        }

                    })}
                </Flex>

            </Flex>
        </div>
    )
}

export default Nav