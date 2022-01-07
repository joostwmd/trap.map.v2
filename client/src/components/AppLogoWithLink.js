import axios from 'axios'

import spotifyLogo from '../logos/spotifyLogo.png'
import appleMusicLogo from '../logos/appleMusicLogo.png'
import youtubeLogo from '../logos/youtubeLogo.png'
import instagramLogo from '../logos/instagramLogo.png'

function AppLogoWithLink({app, link, artistDatabaseId}) {

    //for develpoment
    const API_URL = 'http://localhost:5005'
    
    //const API_URL = 'https://trapmapversion2.herokuapp.com'

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
                <img className="appLogo" src={spotifyLogo} alt="spotify logo"/>
            </a>
        )
    }

    if (app === "appleMusic"){
        return (
            <a href={link} onClick={() => {addAppleMusicProfileVisit()}}>
                <img className="appLogo" src={appleMusicLogo} alt="apple music logo"/>
            </a>
        )
    }

    if (app === "youtube"){
        return (
            <a href={link} onClick={() => {addYoutubeProfileVisit()}}>
                <img className="appLogo" src={youtubeLogo} alt="youtube logo"/>
            </a>
        )
    }

    if (app === "instagram"){
        return (
            <a href={link} onClick={() => {addInstagramProfileVisit()}}>
                <img  className="appLogo" src={instagramLogo} alt="instagram logo"/>
            </a>
        )
    }
}

export default AppLogoWithLink
