import { Center, Heading, Text, Flex } from '@chakra-ui/react'
import { CLIENT_URL } from '../clientVariables'

function Impressum() {


    const redirectToHome = () => {
        window.location.href = `${CLIENT_URL}/`
    }

    const arrowLeftIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="90%" height="90%"><path fill="none" d="M0 0h24v24H0z" /><path d="M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z" fill="rgba(147,129,255,1)" /></svg>


    return (
        <div>
            <Center
                onClick={() => redirectToHome()}
                w='7.5vw'
                h='7.5vw'
                pos='absolute'
                top='2vw'
                ml='2vw'
                backgroundColor='#fff'
                borderRadius='50%'
            >
                {arrowLeftIcon}
            </Center>

            <Center>
                <Heading
                    fontSize='7.5vw'
                    color='#fff'
                    letterSpacing='wider'
                >
                    impressum TrapMap
                </Heading>
            </Center>

            <Flex
                ml='7.5vw'
                mr='7.5vw'
                flexDir='column'
            >
                <Text
                    mt='10vh'
                >
                    Die Trapmap Website ist ein Angebot der TrapMap UG (haftungsbeschränkt) i.G. 
                </Text>

                <Text
                    mt='5vh'
                >
                    Postadresse: Hüningerstraße 12, 14195 Berlin
                </Text>

                <Text
                    mt='5vh'
                >
                    Mailadresse: trapmap.eu@gmail.com
                </Text>

                <Text
                    mt='5vh'
                >
                    Redaktionell verantwortlich sind:
                </Text>

                <Text
                    mt='2.5vh'
                >
                    - Joost Windmöller
                </Text>

                <Text
                    mt='2.5vh'
                >
                    - Maximilian Pohl
                </Text>

            </Flex>
        </div>
    )
}

export default Impressum
