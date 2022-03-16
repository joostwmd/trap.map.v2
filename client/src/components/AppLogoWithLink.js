import axios from 'axios'

import spotifyLogo from '../style/logos/spotifyLogo.png'
import appleMusicLogo from '../style/logos/appleMusicLogo.png'
import youtubeLogo from '../style/logos/youtubeLogo.png'
import instagramLogo from '../style/logos/instagramLogo.png'

import { Image } from '@chakra-ui/react'

import { SERVER_URL } from '../clientVariables'

function AppLogoWithLink({ app, link, dataBaseId }) {


    const addSpotifyProfileVisit = () => {
        let requestBody = { dataBaseId }
        axios.post(`${SERVER_URL}/traffic/addSpotifyProfileVisit`, requestBody)
    }

    const addAppleMusicProfileVisit = () => {
        let requestBody = { dataBaseId }
        axios.post(`${SERVER_URL}/traffic/addAppleMusicProfileVisit`, requestBody)
    }

    const addYoutubeProfileVisit = () => {
        let requestBody = { dataBaseId }
        axios.post(`${SERVER_URL}/traffic/addYoutubeProfileVisit`, requestBody)
    }

    const addInstagramProfileVisit = () => {
        let requestBody = { dataBaseId }
        axios.post(`${SERVER_URL}/traffic/addInstagramProfileVisit`, requestBody)
    }



    if (app === "spotify") {
        return (
            <a href={link} onClick={() => { addSpotifyProfileVisit() }}>
                <Image
                    src={spotifyLogo}
                    alt="spotify logo"
                    w='15vw'
                    h='15vw'
                    ml='7.5vw'
                    mr='7.5vw'
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
                    w='15vw'
                    h='15vw'
                    ml='7.5vw'
                    mr='7.5vw'
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
                    w='15vw'
                    h='15vw'
                    ml='7.5vw'
                    mr='7.5vw'
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
                    w='15vw'
                    h='15vw'
                    ml='7.5vw'
                    mr='7.5vw'
                />
            </a>
        )
    }
}

export default AppLogoWithLink
