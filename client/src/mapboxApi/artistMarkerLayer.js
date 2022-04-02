import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import 'mapbox-gl/dist/mapbox-gl.css';
import artistIcon from '../style/icons/artist.png'

import { createArtistProfilePopup } from './artistProfilePopup'



export const artistToFeatures = (artists, artistsArr) => {
    for (let artist of artists) {
        const feature = {
            'type': 'feature',

            'properties': {
                'artistName': artist.name,
                'artistPicture': artist.picture,
                'artistDatabaseId': artist._id,
                'artistSpotifyId': artist.spotifyID,
                'city': artist.city,
                'genres': artist.genres,
                'state': 'active',
                'spotifyLink': artist.spotifyLink,
                'collaboration': artist.collaboration
            },

            'geometry': {
                'type': 'Point',
                'coordinates': artist.coordinates
            }
        }
        artistsArr.push(feature)
    }
}


const hideMarkersNotInViewport = (currentMap, mapboxMarker, htmlMarker, artistProps) => {
    if (artistProps.properties.state === 'active') {
        if (currentMap.getBounds().contains(mapboxMarker.getLngLat())) {
            htmlMarker.style.visibility = 'visible'
        } else if (!currentMap.getBounds().contains(mapboxMarker.getLngLat()) && htmlMarker.style.visibility === 'visible') {
            htmlMarker.style.visibility = 'hidden'
        }
    }
}


export const handleZoomArtistMarker = (currrentMap, marker, markerProps, initialZoom) => {
    let markerSize = (Number((currrentMap.getZoom()) - initialZoom) * 8) + 22
    let nameSize = (Number((currrentMap.getZoom()) - initialZoom) * 4) + 5

    if (markerProps.properties.state === 'active') {
        if (Number((currrentMap.getZoom() > 9))) {
            marker.style.visibility = 'visible'
            // marker.style.height = `${markerSize}px`
            // marker.style.width = `${markerSize}px`
            marker.innerHTML = `<p>${markerProps.properties.artistName}</p>`
        }

        if (Number((currrentMap.getZoom() <= 9))) {
            marker.style.visibility = 'hidden'
            marker.innerHTML = ''
        }
    }
}

const redirectToSpotifyArtistAcc = (link) => {
    window.location.href = link
}

export const loadArtistMarkers = (currentMap, artistArr) => {

    currentMap.addSource('artists', {
        'type': 'geojson',
        'data': {
            'type': 'FeatureCollection',
            'features': artistArr
        }
    })

    const mapboxMarkerArray = []
    for (let i = 0; i < artistArr.length; i++) {

        const marker = document.createElement('div')
        marker.className = 'artistMarker'
        marker.innerHTML = `<img src=${artistIcon} />`
        new mapboxgl.Marker(marker).setLngLat(artistArr[i].geometry.coordinates).addTo(currentMap)
        mapboxMarkerArray.push(new mapboxgl.Marker(marker).setLngLat(artistArr[i].geometry.coordinates).addTo(currentMap))

        // if (artistArr[i].properties.collaboration === undefined) {
        //     const marker = document.createElement('div')
        //     marker.className = 'artistMarker'
        //     marker.innerHTML = `<img src=${artistIcon} />`
        //     new mapboxgl.Marker(marker).setLngLat(artistArr[i].geometry.coordinates).addTo(currentMap)
        //     mapboxMarkerArray.push(new mapboxgl.Marker(marker).setLngLat(artistArr[i].geometry.coordinates).addTo(currentMap))

        // } else if (artistArr[i].properties.collaboration !== undefined) {
        //     const marker = document.createElement('div')
        //     marker.className = 'artistMarker'
        //     marker.innerHTML = `<img src=${artistIcon} />`
        //     marker.style.outline = '0.25em solid #ff6f59'
        //     new mapboxgl.Marker(marker).setLngLat(artistArr[i].geometry.coordinates).addTo(currentMap)
        //     mapboxMarkerArray.push(new mapboxgl.Marker(marker).setLngLat(artistArr[i].geometry.coordinates).addTo(currentMap))

        // }


        const artistMarkers = document.getElementsByClassName('artistMarker')
        for (let i = 0; i < artistMarkers.length; i++) {
            artistMarkers[i].addEventListener('click', () => {
                createArtistProfilePopup(currentMap, artistArr[i].properties.artistDatabaseId, artistArr[i].properties.artistSpotifyId)
                //redirectToSpotifyArtistAcc(artistArr[i].properties.spotifyLink)
            })

            //artistMarkers[i].style.backgroundImage = `url(${artistIcon})`

            //artistMarkers[i].style.backgroundImage = `url(${artistArr[i].properties.artistPicture})`
            //artistMarkers[i].innerHTML = `<p>${artistArr[i].properties.artistName}</p>`

            // currentMap.on('zoom', () => {
            //     handleZoomArtistMarker(currentMap, artistMarkers[i], artistArr[i], 8.75)
            //     //hideMarkersNotInViewport(currentMap, mapboxMarkerArray[i], artistMarkers[i], artistArr[i])
            // })


            currentMap.on('move', () => {
                hideMarkersNotInViewport(currentMap, mapboxMarkerArray[i], artistMarkers[i], artistArr[i])
            })

            //handleZoomArtistMarker(currentMap, artistMarkers[i], artistArr[i], 8.75)
        }
    }
}