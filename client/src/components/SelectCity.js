import { Heading, Flex } from '@chakra-ui/react'

function SelectCity({ currentCity, currentMap, toggleSetSelectCityMenuOpen, jumpToCity }) {

    const countrys = ['germany', 'austria', 'switzerland', 'luxembourg']


    const citysGermany = ['berlin', 'hamburg', 'frankfurt', 'stuttgart']
    const citysAustria = ['vienna', 'linz']
    const citysLuxembourg = ['luxenbourg1', 'luxenbourg2']
    const citysSwitzerland = ['bern', 'zuerich']

    const citysArray = [['germany', citysGermany], ['austria', citysAustria], ['luxembourg', citysLuxembourg], ['switzerland', citysSwitzerland]]

    const handleClick = (action, city, cityName) => {
        toggleSetSelectCityMenuOpen(action)
        jumpToCity(currentMap, city, cityName)
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
                {countrys.map(country => {
                    for (let city of citysArray) {
                        if (city[0] === country) {
                            var citys = city[1]
                        }
                    }
                    return (
                        <Flex
                            flexDir='column'
                            alignItems='center'
                        >
                            <Flex>
                                <Heading
                                    key={country}
                                    color='#fff'
                                    fontSize='15vw'
                                    textDecorationLine='underline'
                                    textDecorationColor='brand.200'
                                >
                                    {country}
                                </Heading>
                            </Flex>

                            <Flex
                                flexDir='column'
                                alignItems='center'
                            >
                                {citys.map(city => {
                                    if (city === currentCity) {
                                        return (
                                            <Heading
                                                key={city}
                                                color='brand.200'
                                                fontSize='10vw'
                                                onClick={() => { handleClick('close', city, city) }}
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
                                                onClick={() => { handleClick('close', city, city) }}
                                            >
                                                {city}
                                            </Heading>
                                        )
                                    }
                                })}

                            </Flex>
                        </Flex>
                    )
                })}
            </Flex>
        </div>
    )
}

export default SelectCity
