import axios from 'axios'

import spotifyLogo from '../style/logos/spotifyLogo.png'
import appleMusicLogo from '../style/logos/appleMusicLogo.png'
import youtubeLogo from '../style/logos/youtubeLogo.png'
import instagramLogo from '../style/logos/instagramLogo.png'

import { Image } from '@chakra-ui/react'

function AppLogoWithLink({app, link, artistDatabaseId}) {

    //for develpoment
    //const API_URL = 'http://localhost:5005'
    
    const API_URL = 'https://trapmapversion2.herokuapp.com'

    const addSpotifyProfileVisit = () => {
        let requestBody = {artistDatabaseId}
        axios.post(`${API_URL}/traffic/addSpotifyProfileVisit`, requestBody)
    }

    const addAppleMusicProfileVisit = () => {
        let requestBody = {artistDatabaseId}
        axios.post(`${API_URL}/traffic/addAppleMusicProfileVisit`, requestBody)
    }

    const addYoutubeProfileVisit = () => {
        let requestBody = {artistDatabaseId}
        axios.post(`${API_URL}/traffic/addYoutubeProfileVisit`, requestBody)
    }

    const addInstagramProfileVisit = () => {
        let requestBody = {artistDatabaseId}
        axios.post(`${API_URL}/traffic/addInstagramProfileVisit`, requestBody)
    }


    
    if (app === "spotify"){
        return (
            <a href={link} onClick={() => {addSpotifyProfileVisit()}}>
                <Image className="appLogo" src={spotifyLogo} alt="spotify logo"/>
            </a>
        )
    }

    if (app === "appleMusic"){
        return (
            <a href={link} onClick={() => {addAppleMusicProfileVisit()}}>
                <Image className="appLogo" src={appleMusicLogo} alt="apple music logo"/>
            </a>
        )
    }

    if (app === "youtube"){
        return (
            <a href={link} onClick={() => {addYoutubeProfileVisit()}}>
                <Image className="appLogo" src={youtubeLogo} alt="youtube logo"/>
            </a>
        )
    }

    if (app === "instagram"){
        return (
            <a href={link} onClick={() => {addInstagramProfileVisit()}}>
                <Image  className="appLogo" src={instagramLogo} alt="instagram logo"/>
            </a>
        )
    }
}

export default AppLogoWithLink
