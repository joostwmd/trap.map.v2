import { Heading, Flex, Select } from '@chakra-ui/react'


function Nav({ currentMap, flyToCity }) {
    //for development
    //const CLIENT_URL = 'http://localhost:3000'

    //for deployment
    const CLIENT_URL = 'https://trapmap.herokuapp.com'


    const redirectToHomepage = () => {
        window.location.href = `${CLIENT_URL}`
    }

    return (
        <div className='mapNav'>
            <Flex
                bg='brand.200'
                w='100vw'
                h='10vw'
                alignItems='center'
                justifyContent='space-around'
            >

                <Heading
                    onClick={() => { redirectToHomepage() }}
                    fontSize='7.5vw'
                    color='#fff'
                    letterSpacing='wider'
                    mr='5vw'
                    ml='5vw'
                >
                    home
                </Heading>

                <Select
                    onChange={e => flyToCity(currentMap, e.target.value)}
                    bg='#fff'
                    fontFamily='PhillySans'
                    letterSpacing='wider'
                    h='8vw'
                    mr='5vw'
                    ml='5vw'
                >
                    <option
                        value='berlin'
                    >
                        berlin
                    </option>

                    <option
                        value='hamburg'
                    >
                        hamburg
                    </option>

                    <option
                        value='vienna'
                    >
                        vienna
                    </option>
                </Select>

            </Flex>
        </div>
    )
}

export default Nav