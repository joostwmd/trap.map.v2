import axios from 'axios'
import { useState } from 'react'

function Track({artistName, track, artistDatabaseId}) {

    //for develpoment
    const API_URL = 'http://localhost:5005'
    
    //const API_URL = 'https://trapmapversion2.herokuapp.com'

    const createFeaturesString = (artists) => {

        if (artists.length === 1){
            return ''
        }
        let featuresString = "feat: "
        for (let artist of artists){
            if (artistName !== artist.name){
                featuresString += `${artist.name}, `
            } 
        }
        return featuresString.slice(0, -2)
    }

    const playOrPauseTrack = (trackName) => {
        const audios = document.getElementsByClassName('audioPlayer')
        const clickedAudio = document.getElementById(`audioPlayer:${trackName}`)
        
        const playPauseButtons = document.getElementsByClassName('playPauseButton')
        const clickedPlayPauseButton = document.getElementById(`playPauseButton:${trackName}`)
        
        if (clickedAudio.paused){
            for (let audio of audios){
                audio.pause()
            }
            clickedAudio.play()


            for (let playPauseButton of playPauseButtons){
                playPauseButton.innerHTML = 'play'
            }
            clickedPlayPauseButton.innerHTML = 'pause'
        
        } else {
            clickedAudio.pause()
            clickedPlayPauseButton.innerHTML = 'play'
        }

        
        const currentTime = document.getElementById(`timeInTrack:${trackName}`)
        
        clickedAudio.ontimeupdate = () => {
            if (clickedAudio.currentTime >= 30){
                clickedPlayPauseButton.innerHTML = 'play'
                currentTime.style.width = '0px'
            }

            if (clickedAudio.currentTime < 30){
                let size = (250 / 30) * clickedAudio.currentTime
                currentTime.style.width = `${size}px`
                currentTime.style.height = '10px'
                currentTime.style.backgroundColor = 'black'
            }
        }
    }

    

    const addSnippetPlayed = (artistDatabaseId) => {
        let requestBody = {artistDatabaseId}
        axios.post(`${API_URL}/traffic/addSnippetPlayed`, requestBody)
    }


    return (
        <div className="track">
            <img className="trackCover" src={track.album.images[1].url} alt="track cover"/>

            <div className="trackTitleAndTimebar">
                <h4>{`${track.name} ${createFeaturesString(track.artists)}`}</h4>
                <div className="maxTime">
                    <div id={`timeInTrack:${track.name}`}></div>
                </div>
            </div>

            <audio id={`audioPlayer:${track.name}`} className='audioPlayer' onPlay={() => {addSnippetPlayed(artistDatabaseId)}}>
                <source src={track.preview_url} type="audio/mp3" />
            </audio> 

            <div className="playPauseButtonWrapper">
                <button id={`playPauseButton:${track.name}`} className='playPauseButton' onClick={() => {playOrPauseTrack(track.name)}}>play</button>
            </div>
        </div>
    )
}

export default Track
