import { useState } from 'react'
import axios from 'axios'

function Home() {
    
    const URL = 'https://trapmapversion2.herokuapp.com'

    const redirectToMap = () => {
        window.location.href = `${URL}/map/`
        
    }

    const signUpAnimation = () => {
        let button = document.getElementsByClassName('signUpButton')[0]
        let buttonText = document.getElementsByClassName('tick')[0]
        const tickMark = "<svg width=\"58\" height=\"45\" viewBox=\"0 0 58 45\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"#fff\" fill-rule=\"nonzero\" d=\"M19.11 44.64L.27 25.81l5.66-5.66 13.18 13.18L52.07.38l5.65 5.65\"/></svg>"

        if (buttonText.innerHTML === "sign up"){
            buttonText.innerHTML = tickMark;
            button.classList.toggle('signUpButton__circle');
            document.getElementById('emailInput').disabled = true
            document.getElementById('emailInput').placeholder = 'thank you'
        }
    }

    const [email, setEmail] = useState("")
    const singUpForBetaKey = () => {
        //add email to db
        const requestBody = {email}
        axios.post(`${URL}/traffic/addSignUpForBetaKey`, requestBody)

        //button animation
        signUpAnimation()
    }

    return (
        <div>
            <h1>welcome to trap map</h1>

            <p>new plattfrom to discover music: no algorithms, no playlists, just you and the music</p>
            <button onClick={() => {redirectToMap()}}>check out the demo version</button>
            
            <h2>sign-up for the beta-key of the official trap map app</h2>
           <div id="signUpWithEmailContainer">
                <input 
                    id="emailInput"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="your email adress"
                    type="email"
                />
            

                <div className="signUpButton" onClick={() => singUpForBetaKey()}>
                    <div className="signUpButtonContainer">
                        <div className="tick">sign up</div>
                    </div>
                </div>
            </div>

            <h2>do you want to get on the map? DM us on insta</h2><a href="https://www.instagram.com/mapmusic.berlin/">insta</a>

        </div>
    )
}

export default Home