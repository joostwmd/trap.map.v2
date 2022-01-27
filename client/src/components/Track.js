import axios from 'axios'
import { Center, Text, Flex, Image } from '@chakra-ui/react'


function Track({ artistName, artistDatabaseId, track, count }) {

    //for develpoment
    //const API_URL = 'http://localhost:5005'

    const API_URL = 'https://trapmapversion2.herokuapp.com'


    //create strings for additional trackrelated info 
    // const createFeaturesInfo = (artists) => {
    //     if (artists.length === 1) {
    //         return ''
    //     }
    //     let featuresString = `feat: `
    //     for (let artist of artists) {
    //         if (artistName !== artist.name) {
    //             featuresString += `${artist.name}, `
    //         }
    //     }
    //     return featuresString.slice(0, -2)
    // }

    // const createReleaseInfo = (album) => {
    //     if (album.album_type === "single") {
    //         return `single`
    //     }

    //     if (album.album_type === "album") {
    //         return `on album: ${album.name}`
    //     }
    // }


    //functions to handle track behavior
    const playTrack = (trackName) => {
        const track = document.getElementById(`audioPlayer:${trackName}`)
        track.play()

        //add visual feedback
        const trackTitle = document.getElementById(`trackTitle:${trackName}`)
        trackTitle.style.color = '#9381FF'

        const trackCount = document.getElementById(`trackCount:${trackName}`)
        trackCount.style.color = '#9381FF'

    }

    const pauseTrack = (trackName) => {
        const track = document.getElementById(`audioPlayer:${trackName}`)
        track.pause()

        //remove visual feedback
        const trackTitle = document.getElementById(`trackTitle:${trackName}`)
        trackTitle.style.color = '#fff'

        const trackCount = document.getElementById(`trackCount:${trackName}`)
        trackCount.style.color = '#fff'

    }

    //handle click on play/pause button => All the track functions are used here
    const playOrPauseTrack = (trackName) => {
        const audios = document.getElementsByClassName('audioPlayer')
        const clickedAudio = document.getElementById(`audioPlayer:${trackName}`)

        if (clickedAudio.paused) {
            //pause all other tracks
            for (let audio of audios) {
                pauseTrack(audio.id.split(":")[1])
            }
            //play clicked track
            playTrack(trackName)

        } else {
            //pause the track 
            pauseTrack(trackName)
        }

        //reset track
        clickedAudio.ontimeupdate = () => {
            if (clickedAudio.currentTime >= 30) {
                pauseTrack(trackName)
            }
        }
    }


    //traffic
    const addSnippetPlayed = (artistDatabaseId) => {
        let requestBody = { artistDatabaseId }
        axios.post(`${API_URL}/traffic/addSnippetPlayed`, requestBody)
    }


    return (
        <div onClick={() => { playOrPauseTrack(track.name) }}>
            <Flex
                alignItems='center'
                mb='7.5vh'
            >
                <Flex
                    alignItems='center'
                    mr="10vw"
                    ml='5vw'
                >
                    <Center
                        w='10vw'
                        h='10vw'
                    >
                        <Text
                            id={`trackCount:${track.name}`}
                            marginRight="5vw"
                            fontSize='5vw'
                        >
                            {count}
                        </Text>
                    </Center>
                    <Image
                        src={track.album.images[1].url}
                        width='12.5vw'
                        height='12.5vw'
                    />
                </Flex>

                <Flex
                    flexDir='column'
                    alignItems='left'
                >
                    <Text
                        id={`trackTitle:${track.name}`}
                        fontSize='5vw'
                    >
                        {`${track.name}`}
                    </Text>
                </Flex>
            </Flex>


            <audio id={`audioPlayer:${track.name}`} className='audioPlayer' onPlay={() => { addSnippetPlayed(artistDatabaseId) }}>
                <source src={track.preview_url} type="audio/mp3" />
            </audio>
        </div>
    )
}

export default Track
