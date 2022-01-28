import { Text, Flex } from '@chakra-ui/react'

function Nav({currentMap, hamburgCenter, wienCenter}) {
    //for development
    //const CLIENT_URL = 'http://localhost:3000'

    //for deployment
    const CLIENT_URL = 'https://trapmap.herokuapp.com'

    //public url
    //const CLIENT_URL = 'https://trapmap.eu'

    const redirectToHomepage = () => {
        window.location.href = `${CLIENT_URL}`
        
    }

    const flyToCity = (city) => {
        if (city === 'berlin'){
            console.log('berlin')
        }

        if (city === 'hamburg'){
            console.log('hamburg')
            console.log(currentMap)
            // currentMap.flyTo({
            //     center : hamburgCenter
            // })
        }

        if (city === 'wien'){
            console.log('wien')
        }
    }

    return (
        <div>
            <Flex  
                bg='brand.200'
                w='100vw'
                h='10vw'
                alignItems='center'
                justifyContent='space-around'
            >
                <Text 
                    onClick={() => {redirectToHomepage()}}
                    fontSize='5vw'
                >
                    home
                </Text>

            <select 
                onChange={e => flyToCity(e.target.value)}
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
                    value='wien'
                >
                    wien
                </option>
            </select>
            
            </Flex>
        </div>
    )
}

export default Nav