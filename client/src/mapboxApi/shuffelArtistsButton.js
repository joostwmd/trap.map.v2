import axios from 'axios'
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import 'mapbox-gl/dist/mapbox-gl.css';
import { SERVER_URL } from '../clientVariables'
import { getShuffleArtistsButtonCoordinates } from './general';
import { ICONS } from '../clientVariables';
import { createArtistProfilePopup } from './artistProfilePopup';



export const handleZoomRandomArtistMarker = (currentMap) => {
    const marker = document.getElementsByClassName('shuffleArtistButton')[0]
    if (Number((currentMap.getZoom() > 5.25)) && marker.style.visibility !== 'hidden') {
        marker.style.visibility = 'hidden'
    }

    if (Number((currentMap.getZoom() <= 5.25)) && marker.style.visibility !== 'visible') {
        marker.style.visibility = 'visible'
    }
}


export const createShuffleArtistButton = (currentMap) => {
    const randomArtistButton = document.createElement('div')
    randomArtistButton.className = 'shuffleArtistButton'
    randomArtistButton.innerHTML = `${ICONS.shuffleWhite}`
    randomArtistButton.addEventListener('click', () => {
        shuffelArtistsHandler(currentMap)
    })
    return new mapboxgl.Marker(randomArtistButton).setLngLat(getShuffleArtistsButtonCoordinates(currentMap)).addTo(currentMap)
}


const getRandomArtists = async (artists) => {
    let shuffel = Math.floor(Math.random() * artists.length + 1)
    let res = await [artists[shuffel]]
    return res
}

const jumpToArtist = (currentMap, artistCoors, artistDatabaseId, artistSpotifyId) => {
    currentMap.flyTo({
        center: artistCoors,
        speed: 2.25,
        zoom: 12
    })

    currentMap.once('moveend', () => {
        createArtistProfilePopup(currentMap, artistDatabaseId, artistSpotifyId)
    })
}

const shuffelArtistsHandler = async (currentMap) => {
    axios.get(`${SERVER_URL}/dataBase/getArtists`)
        .then(res => {
            getRandomArtists(res.data)
                .then(artist => {
                    jumpToArtist(currentMap, artist[0].coordinates, artist[0]._id, artist[0].spotifyID)
                })

        })
}

