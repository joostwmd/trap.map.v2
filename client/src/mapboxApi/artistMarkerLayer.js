import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import 'mapbox-gl/dist/mapbox-gl.css';

import { createArtistProfilePopup } from './artistPopupLayer';



export const artistToFeatures = (artists, artistsArr) => {
    for (let artist of artists) {
        const feature = {
            'type': 'feature',

            'properties': {
                'artistName': artist.name,
                'artistPicture': artist.picture,
                'artistDatabaseId': artist._id,
                'artistSpotifyId': artist.spotifyID,
                'city': artist.city
            },

            'geometry': {
                'type': 'Point',
                'coordinates': artist.coordinates
            }
        }
        artistsArr.push(feature)
    }
    console.log('artists', artistsArr)
}


const handleZoomArtistMarkers = (currrentMap, marker, markerProps, initialZoom) => {
    let markerSize = (Number((currrentMap.getZoom()) - initialZoom) * 8) + 22
    let nameSize = (Number((currrentMap.getZoom()) - initialZoom) * 4) + 5

    if (Number((currrentMap.getZoom() > 9))) {
        marker.style.visibility = 'visible'
        marker.style.height = `${markerSize}px`
        marker.style.width = `${markerSize}px`
        marker.innerHTML = `<p style='font-size:${nameSize}px'>${markerProps.properties.artistName}</p>`
    }

    if (Number((currrentMap.getZoom() <= 9))) {
        marker.style.visibility = 'hidden'
        marker.innerHTML = ''
    }
}



export const loadArtistMarkers = (currentMap, artistArr, popup) => {
    currentMap.addSource('artists', {
        'type': 'geojson',
        'data': {
            'type': 'FeatureCollection',
            'features': artistArr
        }
    })

    for (let i = 0; i < artistArr.length; i++) {

        const marker = document.createElement('div')
        marker.className = 'artistMarker'
        new mapboxgl.Marker(marker).setLngLat(artistArr[i].geometry.coordinates).addTo(currentMap)
        
        const artistMarkers = document.getElementsByClassName('artistMarker')

        for (let i = 0; i < artistMarkers.length; i++) {
            artistMarkers[i].addEventListener('click', () => {
                createArtistProfilePopup(currentMap, artistArr[i].properties.artistDatabaseId, artistArr[i].properties.artistSpotifyId)
            })

            artistMarkers[i].style.backgroundImage = `url(${artistArr[i].properties.artistPicture})`
            artistMarkers[i].innerHTML = `<p>${artistArr[i].properties.artistName}</p>`

            currentMap.on('zoom', () => {
                handleZoomArtistMarkers(currentMap, artistMarkers[i], artistArr[i], 8.75)
            })

            handleZoomArtistMarkers(currentMap, artistMarkers[i], artistArr[i], 8.75)
        }
    }
}