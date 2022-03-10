import { closeFilterMenuPopup, filterArtists } from '../mapboxApi/filterMenuPopup'
import { Switch, Flex, Text, Heading, Button, Center } from '@chakra-ui/react'


function FilterMenu({ artistsArr, popup, currentMap }) {

    const arrowLeftIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="90%" height="90%"><path fill="none" d="M0 0h24v24H0z" /><path d="M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z" fill="rgba(147,129,255,1)" /></svg>

    const genres = ['genre1', 'genre2']
    const selectedGenres = []

    const handleGenreToggle = (genre) => {
        if (selectedGenres.includes(genre) === false) {
            selectedGenres.push(genre)
        } else if (selectedGenres.includes(genre)) {
            const index = selectedGenres.indexOf(genre)
            selectedGenres.splice(index, 1)
        }
    }

    return (
        <div className='mapBlur'>
            <div className='filterMenu'>
                <Flex
                    w='90vw'
                >
                    <Flex
                        onClick={() => closeFilterMenuPopup(currentMap, popup)}
                        w='7.5vw'
                        h='7.5vw'
                        backgroundColor='#fff'
                        borderRadius='50%'
                        ml='1vw'
                        mt='1vw'
                    >
                        {arrowLeftIcon}
                    </Flex>
                </Flex>


                <Flex
                    flexDir='row'
                    alignItems='center'
                >
                    {/* <Center
                        //onClick={() => closeArtistProfilePopup(currentMap, popup)}
                        w='7.5vw'
                        h='7.5vw'
                        // pos='absolute'
                        // top='7.5vh'
                        mr='5vw'

                        backgroundColor='#fff'
                        borderRadius='50%'
                    >
                        {arrowLeftIcon}
                    </Center> */}

                    <Heading
                        pt='2.5vh'
                        fontSize='12.5vw'
                        letterSpacing='wide'
                    >
                        filter menu
                    </Heading>
                </Flex>

                <Flex
                    flexDir='column'
                    alignItems='center'
                >
                    {genres.map(genre => {
                        return (
                            <Flex
                                w='70vw'
                                key={genre}
                                flexDir='row'
                                alignItems='center'
                                justifyContent='space-between'
                            >
                                <Text
                                    fontSize='7.5vw'
                                    mr='20vw'
                                >
                                    {genre}
                                </Text>

                                <Flex
                                    alignItems='center'
                                >
                                    <Switch
                                        value={false}
                                        onChange={() => { handleGenreToggle(genre) }}
                                        size='lg'
                                        colorScheme='purple'
                                        mb='2vh'
                                    />
                                </Flex>
                            </Flex>
                        )
                    })}
                </Flex>


                <Button
                    onClick={() => { filterArtists(currentMap, artistsArr, popup, selectedGenres) }}
                    bg='brand.200'
                    rounded='md'
                    w='50vw'
                    mt='5vh'
                >
                    <Heading

                    >
                        filter
                    </Heading>
                </Button>
            </div>
        </div>
    )
}

export default FilterMenu
