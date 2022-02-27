import { Heading, Flex, Accordion, AccordionItem, AccordionButton, AccordionPanel } from '@chakra-ui/react'
import { CITYS } from '../mapboxCityVariables'
import { CLIENT_URL } from '../clientVariables'
import { useState, useEffect } from 'react'

function Nav({ currentMap, currentCity, currentCountry, jumpToCity }) {

    const countrys = ['germany', 'austria', 'switzerland', 'luxembourg']

    const [isOpen, setIsOpen] = useState(false)

    //BERLIN IS KING
    let citys = []
    for (let city of CITYS){
        if (city[0] !== 'berlin'){
            citys.push(city)
        }
    }
    citys.unshift(['berlin', [13.404954, 52.520008], 230000, 'germany'])

    const handleClick = (action, city) => {
        window.scrollTo({ top: 0 });
        setIsOpen(action)
        jumpToCity(currentMap, city)
    }

    const redirectToHomepage = () => {
        window.location.href = `${CLIENT_URL}/home`
    }

    if (isOpen === false) {
        return (
            <div>
                <Flex
                    bg='brand.100'
                    w='100vw'
                    h='10vw'
                    alignItems='center'
                    justifyContent='space-around'
                >
                    <Heading
                        onClick={() => { redirectToHomepage() }}
                        color='#fff'
                        fontSize='7.5vw'
                        textDecorationLine='underline'
                        textDecorationColor='brand.200'
                    >
                        home
                    </Heading>

                    <Heading
                        color='brand.200'
                        fontSize='7.5vw'
                    >
                        {currentCity}
                    </Heading>

                    <Heading
                        onClick={() => { setIsOpen(true) }}
                        color='#fff'
                        fontSize='7.5vw'
                        textDecorationLine='underline'
                        textDecorationColor='brand.200'
                    >
                        areas
                    </Heading>

                </Flex>
            </div>
        )
    } else if (isOpen === true) {
        return (
            <div>
                <Accordion
                    allowToggle
                    bg='brand.100'
                    ml='5vw'
                    mr='5vw'
                    pb='10vh'
                    w='90vw'
                    minH='100vh'
                    flexDir='column'
                    alignItems='center'
                >

                    {countrys.map(country => {

                        return (
                            <AccordionItem
                                flexDir='column'
                                alignItems='center'
                            >
                                <AccordionButton>
                                    <Heading
                                        key={country}
                                        color='#fff'
                                        fontSize='15vw'
                                    >
                                        {country}
                                    </Heading>
                                </AccordionButton>

                                <AccordionPanel
                                    flexDir='column'
                                    alignItems='center'
                                >
                                    {citys.map(city => {
                                        if (country === city[3]) {
                                            if (city[0] === currentCity) {
                                                return (
                                                    <Heading
                                                        key={city}
                                                        color='brand.200'
                                                        fontSize='10vw'
                                                        onClick={() => { handleClick(false, city) }}
                                                    >
                                                        {city[0]}
                                                    </Heading>
                                                )
                                            } else {
                                                return (
                                                    <Heading
                                                        key={city}
                                                        color='#fff'
                                                        fontSize='10vw'
                                                        onClick={() => { handleClick(false, city) }}
                                                    >
                                                        {city[0]}
                                                    </Heading>
                                                )
                                            }

                                        }
                                    })}

                                </AccordionPanel>
                            </AccordionItem>
                        )
                    })}
                </Accordion>
            </div>
        )
    }



}

export default Nav