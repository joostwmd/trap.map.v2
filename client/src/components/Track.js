import axios from 'axios'

//icons

function Track({artistName, artistDatabaseId, track}) {

    //for develpoment
    //const API_URL = 'http://localhost:5005'
    
    const API_URL = 'https://trapmapversion2.herokuapp.com'


    //create strings for additional trackrelated info 
    const createFeaturesInfo = (artists) => {
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

    const createReleaseInfo = (album) => {
        if (album.album_type === "single"){
            return `single`
        }

        if (album.album_type === "album"){
            return `on album: ${album.name}`
        }
    }


    //functions to handle track behavior
    const playTrack = (trackName) => {
        const track = document.getElementById(`audioPlayer:${trackName}`)
        track.play()
        
        const playPauseButton = document.getElementById(`playPauseButton:${trackName}`)
        playPauseButton.innerHTML = 'pause'

        
        //add style attributes to spin
        const trackCover = document.getElementById(`trackCover:${trackName}`)
        trackCover.style.animationName = 'spinningCover'
        trackCover.style.animationDuration = `${track.duration / 5}s`
        trackCover.style.animationIterationCount = "5"
        trackCover.style.animationTimingFunction = 'linear'
        trackCover.style.animationPlayState = 'running'
    }

    const pauseTrack = (trackName) => {
        const track = document.getElementById(`audioPlayer:${trackName}`) 
        track.pause()

        const playPauseButton = document.getElementById(`playPauseButton:${trackName}`)
        playPauseButton.innerHTML = 'play'

        //add style attribute to pause spinning animation
        const trackCover = document.getElementById(`trackCover:${trackName}`)
        trackCover.style.animationPlayState = 'paused'
    }

    const resetTrack = (trackName) => {
        const playPauseButton = document.getElementById(`playPauseButton:${trackName}`)
        playPauseButton.innerHTML = 'play'
    }


    //handle click on play/pause button => All the track functions are used here
    const playOrPauseTrack = (trackName) => {
        const audios = document.getElementsByClassName('audioPlayer')
        const clickedAudio = document.getElementById(`audioPlayer:${trackName}`)
             
        if (clickedAudio.paused){
            //pause all other tracks
            for (let audio of audios){
                pauseTrack(audio.id.split(":")[1])
            }
            //play clicked track
            playTrack(trackName)
                
        } else {
            //pause the track 
            pauseTrack(trackName)
        }

        //reset track after its finished
        clickedAudio.ontimeupdate = () => {
            if (clickedAudio.currentTime === clickedAudio.duration){
                resetTrack(trackName)
            }
        }
    }

    
    //traffic
    const addSnippetPlayed = (artistDatabaseId) => {
        let requestBody = {artistDatabaseId}
        axios.post(`${API_URL}/traffic/addSnippetPlayed`, requestBody)
    }


    return (
        <div className="track">
            <div className="trackCoverWrapper">
                <div id={`trackCover:${track.name}`} className='trackCover' style={{'backgroundImage' : `url(${track.album.images[1].url})`}}>
                    <div className="trackCoverInnerCircle"></div>
                </div>
            </div>

            <div className="trackTitleAndAlbum">
                <h4>{`${track.name} ${createFeaturesInfo(track.artists)}`}</h4>
                <p>{createReleaseInfo(track.album)}</p>
            </div>

            <audio id={`audioPlayer:${track.name}`} className='audioPlayer' onPlay={() => {addSnippetPlayed(artistDatabaseId)}}>
                <source src={track.preview_url} type="audio/mp3" />
            </audio> 

            <div className="playPauseButtonWrapper">
                <div id={`playPauseButton:${track.name}`} className='playPauseButton' onClick={() => {playOrPauseTrack(track.name)}}>play</div>
            </div>
        </div>
    )
}

export default Track
