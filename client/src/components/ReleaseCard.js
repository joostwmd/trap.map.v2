import React from 'react'
import { Flex, Center, Heading, Button, Text } from '@chakra-ui/react'

function ReleaseCard({ release }) {
    return (
        <Flex
            flexDir='column'
            mb='3vh'
        >
            <Center
                alignItems='center'
            >
                <Heading
                    fontSize='12.5vw'
                    color='#fff'
                >
                    {release.title}
                </Heading>
            </Center>

            <Flex
                flexDir='row'
                alignItems='center'
                justifyContent='space-evenly'
            >
                <Text
                    fontSize='5.75vw'
                    mr='5vw'
                >
                    {release.artistName}
                </Text>

                <Text
                    fontSize='5.75vw'
                    mr='5vw'
                >
                    {release.typeOfRelease}
                </Text>

                {release.presafeLink.length > 0 &&
                    <a href={release.presafeLink}>
                        <Text
                            fontSize='5.75vw'
                            textDecorationLine='underline'
                            textDecorationColor='brand.200'
                            textDecorationThickness='1vw'
                        >
                            pre-save
                        </Text>
                    </a>
                }

            </Flex>

        </Flex>
    )
}

export default ReleaseCard
