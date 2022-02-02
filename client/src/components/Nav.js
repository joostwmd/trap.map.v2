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
                    ml='5vw'
                    mr='5vw'
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
                                    fontSize='6vw'
                                    color='#fff'
                                    letterSpacing='wider'
                                    mr='2.5vw'
                                    ml='2.5vw'
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