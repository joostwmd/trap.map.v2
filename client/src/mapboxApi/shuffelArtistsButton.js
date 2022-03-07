import axios from 'axios'
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import 'mapbox-gl/dist/mapbox-gl.css';
import { SERVER_URL } from '../clientVariables'
import { getBottomMiddleCoordinates } from './general';




export const handleZoomRandomArtistMarker = (currentMap) => {
    const marker = document.getElementById('randomArtistButton')
    if (Number((currentMap.getZoom() > 5.25))) {
        marker.style.visibility = 'hidden'
    }

    if (Number((currentMap.getZoom() <= 5.25))) {
        marker.style.visibility = 'visible'
    }
}


export const createRandomArtistButton = (currentMap) => {
    const randomArtistButton = document.createElement('div')
    randomArtistButton.id = 'randomArtistButton'
    randomArtistButton.innerHTML = '<p className="textInRandomArtistButton">shuffle</p>'
    randomArtistButton.addEventListener('click', () => {
        shuffelArtistsHandler(currentMap)
    })
    return new mapboxgl.Marker(randomArtistButton).setLngLat(getBottomMiddleCoordinates(currentMap)).addTo(currentMap)
}


const getRandomArtists = async (artists) => {
    let shuffel = Math.floor(Math.random() * artists.length + 1)
    let res = await [artists[shuffel]]
    return res
}

const jumpToArtist = (currentMap, artistCoors) => {
    currentMap.flyTo({
        center: artistCoors,
        speed: 2.25,
        zoom: 12
    })
}

const shuffelArtistsHandler = async (currentMap) => {
    axios.get(`${SERVER_URL}/dataBase/getArtists`)
        .then(res => {
            getRandomArtists(res.data)
                .then(artist => {
                    jumpToArtist(currentMap, artist[0].coordinates)
                })

        })
}

