import axios from 'axios'

import spotifyLogo from '../style/logos/spotifyLogo.png'
import appleMusicLogo from '../style/logos/appleMusicLogo.png'
import youtubeLogo from '../style/logos/youtubeLogo.png'
import instagramLogo from '../style/logos/instagramLogo.png'

import { Image, Flex } from '@chakra-ui/react'

function AppLogoWithLink({ app, link, artistDatabaseId }) {

    //for develpoment
    //onst API_URL = 'http://localhost:5005'

    const API_URL = 'https://trapmapversion2.herokuapp.com'

    const addSpotifyProfileVisit = () => {
        let requestBody = { artistDatabaseId }
        axios.post(`${API_URL}/traffic/addSpotifyProfileVisit`, requestBody)
    }

    const addAppleMusicProfileVisit = () => {
        let requestBody = { artistDatabaseId }
        axios.post(`${API_URL}/traffic/addAppleMusicProfileVisit`, requestBody)
    }

    const addYoutubeProfileVisit = () => {
        let requestBody = { artistDatabaseId }
        axios.post(`${API_URL}/traffic/addYoutubeProfileVisit`, requestBody)
    }

    const addInstagramProfileVisit = () => {
        let requestBody = { artistDatabaseId }
        axios.post(`${API_URL}/traffic/addInstagramProfileVisit`, requestBody)
    }



    if (app === "spotify") {
        return (
            <a href={link} onClick={() => { addSpotifyProfileVisit() }}>
                <Image
                    src={spotifyLogo}
                    alt="spotify logo"
                    w='12vw'
                    h='12vw'
                    ml='6vw'
                    mr='6vw'
                />
            </a>
        )
    }

    if (app === "appleMusic") {
        return (
            <a href={link} onClick={() => { addAppleMusicProfileVisit() }}>
                    <Image
                        src={appleMusicLogo}
                        alt="apple music logo"
                        w='12vw'
                        h='12vw'
                        ml='6vw'
                        mr='6vw'
                    />
            </a>
        )
    }

    if (app === "youtube") {
        return (
            <a href={link} onClick={() => { addYoutubeProfileVisit() }}>
                <Image
                    src={youtubeLogo}
                    alt="youtube logo"
                    w='12vw'
                    h='12vw'
                    ml='6vw'
                    mr='6vw'
                />
            </a>
        )
    }

    if (app === "instagram") {
        return (
            <a href={link} onClick={() => { addInstagramProfileVisit() }}>
                <Image
                    src={instagramLogo}
                    alt="instagram logo"
                    w='12vw'
                    h='12vw'
                    ml='6vw'
                    mr='6vw'
                />
            </a>
        )
    }
}

export default AppLogoWithLink
