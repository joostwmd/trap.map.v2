import axios from 'axios'

//icons

function Track({artistName, artistDatabaseId, track, count}) {

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
         
        
        //add visual feedback
        const trackTitle = document.getElementById(`trackTitle:${trackName}`)
        trackTitle.style.color = '#9381FF'

        // //add style attributes to spin
        // const vinylRecord = document.getElementById(`vinylRecordCurve:${trackName}`)
        // vinylRecord.style.animationName = 'spinningVinylRecord'
        // vinylRecord.style.animationDuration = `${track.duration / 5}s`
        // vinylRecord.style.animationIterationCount = "5"
        // vinylRecord.style.animationTimingFunction = 'linear'
        // vinylRecord.style.animationPlayState = 'running'
    }

    const pauseTrack = (trackName) => {
        const track = document.getElementById(`audioPlayer:${trackName}`) 
        track.pause()

        //remove visual feedback
        const trackTitle = document.getElementById(`trackTitle:${trackName}`)
        trackTitle.style.color = 'white'

        // //add style attribute to pause spinning animation
        // const vinylRecord = document.getElementById(`vinylRecordCurve:${trackName}`)
        // vinylRecord.style.animationPlayState = 'paused'
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

        //reset track
        clickedAudio.ontimeupdate = () => {
            if (clickedAudio.currentTime >= 30){
                pauseTrack(trackName)
            }
        }
    }

    
    //traffic
    const addSnippetPlayed = (artistDatabaseId) => {
        let requestBody = {artistDatabaseId}
        axios.post(`${API_URL}/traffic/addSnippetPlayed`, requestBody)
    }


    return (
        <div className="track" onClick={() => {playOrPauseTrack(track.name)}}>
            <p>{count}</p>
            <div id={`trackCover:${track.name}`} className='trackCover' style={{'backgroundImage' : `url(${track.album.images[1].url})`}}/>

            <div className="trackTitleAndAlbum">
                <div><p id={`trackTitle:${track.name}`} className="trackTitle">{`${track.name.toUpperCase()} ${createFeaturesInfo(track.artists).toUpperCase()}`}</p></div>
                {/* <p>{createReleaseInfo(track.album)}</p> */}
            </div>

            <audio id={`audioPlayer:${track.name}`} className='audioPlayer' onPlay={() => {addSnippetPlayed(artistDatabaseId)}}>
                <source src={track.preview_url} type="audio/mp3" />
            </audio>
        </div>
    )
}

export default Track
