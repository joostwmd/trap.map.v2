import { Heading, Flex } from '@chakra-ui/react'

function SelectCity({ currentCity, currentMap, toggleSetSelectCityMenuOpen, jumpToCity }) {

    const citys = ['berlin', 'hamburg', 'vienna', 'frankfurt', 'stuttgart']

    const handleClick = (action, city) => {
        toggleSetSelectCityMenuOpen(action)
        jumpToCity(currentMap, city)
    }

    return (
        <div>
            <Flex
                bg='brand.100'
                ml='5vw'
                mr='5vw'
                pb='10vh'
                w='90vw'
                h='auto'
                flexDir='column'
                alignItems='center'
            >

                <Heading
                    fontSize='12.5vw'
                    color='#fff'
                    mb='10vh'
                    letterSpacing='wider'
                    textDecorationLine='underline'
                    textDecorationColor='brand.200'
                >
                    select the city
                </Heading>
                {citys.map(city => {
                    if (city === currentCity) {
                        return (
                            <Heading
                                key={city}
                                color='brand.200'
                                fontSize='10vw'
                                onClick={() => { handleClick('close', city) }}
                            >
                                {city}
                            </Heading>
                        )
                    } else {
                        return (
                            <Heading
                                key={city}
                                color='#fff'
                                fontSize='10vw'
                                onClick={() => { handleClick('close', city) }}
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

export default SelectCity
