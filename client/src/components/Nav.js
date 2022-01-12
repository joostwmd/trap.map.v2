import { Link } from 'react-router-dom'

function Nav() {
    //for development
    //const CLIENT_URL = 'http://localhost:3000'

    const CLIENT_URL = 'https://trapmapversion2.herokuapp.com'

    const redirectToHomepage = () => {
        window.location.href = `${CLIENT_URL}/`
        
    }

    const redirectToMap = () => {
        window.location.href = `${CLIENT_URL}/map/`
        
    }

    return (
        <div id="nav">
            <button onClick={() => {redirectToHomepage()}}>home</button>

            <button onClick={() => {redirectToMap()}}>map</button>
        </div>
    )
}

export default Nav