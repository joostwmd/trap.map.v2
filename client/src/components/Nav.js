import { Heading, Flex } from '@chakra-ui/react'


function Nav({ currentCity, toggleSetSelectCityMenuOpen, redirectToHomepage }) {

    return (
        <div className='mapNav'>
            <Flex
                bg='brand.100'
                w='100vw'
                h='10vw'
                alignItems='center'
                justifyContent='space-around'
            >
                <Heading
                    onClick={() => {redirectToHomepage()}}
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
                    onClick={() => {toggleSetSelectCityMenuOpen('open')}}
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
}

export default Nav