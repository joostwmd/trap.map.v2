import { useState, useEffect } from 'react'
import axios from 'axios'

function Home() {
    
    //for development
    const URL = 'http://localhost:3000'
    
    //const URL = 'https://trapmapversion2.herokuapp.com'

    //svg for animation
    const checkIcon = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\"><path fill=\"none\" d=\"M0 0h24v24H0z\"/><path d=\"M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z\"/></svg>"
    const paperPlaneIcon = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\"><path fill=\"none\" d=\"M0 0h24v24H0z\"></path><path d=\"M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z\" fill=\"rgba(255,255,255,1)\"></path></svg>"



    const redirectToMap = () => {
        window.location.href = `${URL}/map/`
        
    }

    const signUpAnimation = () => {    
        if (document.getElementsByClassName('signUpButtonIconContainer')[0].innerHTML === paperPlaneIcon){
            document.getElementsByClassName('signUpButtonIconContainer')[0].innerHTML = checkIcon;
            document.getElementsByClassName('signUpButton')[0].classList.toggle('signUpButton__circle');
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

    useEffect(() => {
        document.getElementsByClassName('signUpButtonIconContainer')[0].innerHTML = paperPlaneIcon
    })

    
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
                        <div className="signUpButtonIconContainer">{paperPlaneIcon}</div>
                    </div>
                </div>
            </div>

            <h2>do you want to get on the map? DM us on insta</h2><a href="https://www.instagram.com/mapmusic.berlin/">insta</a>

        </div>
    )
}

export default Home