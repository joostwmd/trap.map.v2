import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

function Home() {
    
    const API_URL = 'https://trapmapversion2.herokuapp.com'

    const [email, setEmail] = useState("")

    const singUpForBetaKey = () => {
        const requestBody = {email}
        axios.post(`${API_URL}/traffic/addSignUpForBetaKey`, requestBody)
    }

    return (
        <div>
            <h1>welcome to trap map</h1>

            <p>new plattfrom to discover music: no algorithms, no playlists, just you and the music</p>
            <Link to="/map">
                <button>check out the demo version</button>
            </Link>
            
            <h2>sign-up for the beta-key of the official trap map app</h2>
            <input 
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="your email adress"
                type="email"
            >
            </input>

            <button onClick={singUpForBetaKey}>sign up</button>

            <h2>do you want to get on the map? DM us on insta</h2><a href="https://www.instagram.com/mapmusic.berlin/">insta</a>

        </div>
    )
}

export default Home