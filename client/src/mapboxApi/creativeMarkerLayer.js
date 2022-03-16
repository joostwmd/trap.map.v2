import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import 'mapbox-gl/dist/mapbox-gl.css';
import { createCreativeProfilePopup } from './creativeProfilePopup';

import producerIcon from '../style/icons/producer.png'
import designerIcon from '../style/icons/designer.png'
import studioIcon from '../style/icons/studio.png'
import videographIcon from '../style/icons/videograph.png'

export const creativesToFeatures = (creatives, creativesArr) => {
    for (let creative of creatives) {
        const feature = {
            'type': 'feature',

            'properties': {
                'artistName': creative.name,
                'artistDatabaseId': creative._id,
                'type' : creative.type,
                'state': 'active'
                
            },

            'geometry': {
                'type': 'Point',
                'coordinates': creative.coordinates
            }
        }
        creativesArr.push(feature)
    }
}




const hideMarkersNotInViewport = (currentMap, mapboxMarker, htmlMarker, artistProps) => {
    if (artistProps.properties.state === 'active'){
        if (currentMap.getBounds().contains(mapboxMarker.getLngLat())) {
            htmlMarker.style.visibility = 'visible'
        } else if (!currentMap.getBounds().contains(mapboxMarker.getLngLat()) && htmlMarker.style.visibility === 'visible') {
            htmlMarker.style.visibility = 'hidden'
        }
    }
}


export const loadCreativeMarkers = (currentMap, creativeArr) => {

    currentMap.addSource('creatives', {
        'type': 'geojson',
        'data': {
            'type': 'FeatureCollection',
            'features': creativeArr
        }
    })

    const mapboxMarkerArray = []
    for (let i = 0; i < creativeArr.length; i++) {

        const marker = document.createElement('div')
        marker.className = 'creativeMarker'
        
        if (creativeArr[i].properties.type[0] === 'producer'){
            marker.innerHTML = `<img src=${producerIcon} />`
        } else if (creativeArr[i].properties.type[0] === 'designer'){
            marker.innerHTML = `<img src=${designerIcon} />`
        } else if (creativeArr[i].properties.type[0] === 'studio'){
            marker.innerHTML = `<img src=${studioIcon} />`
        } else if (creativeArr[i].properties.type[0] === 'videograph'){
            marker.innerHTML = `<img src=${videographIcon} />`
        }

        new mapboxgl.Marker(marker).setLngLat(creativeArr[i].geometry.coordinates).addTo(currentMap)
        mapboxMarkerArray.push(new mapboxgl.Marker(marker).setLngLat(creativeArr[i].geometry.coordinates).addTo(currentMap))

        const creativeMarkers = document.getElementsByClassName('creativeMarker')
        for (let i = 0; i < creativeMarkers.length; i++) {
            creativeMarkers[i].addEventListener('click', () => {
                createCreativeProfilePopup(currentMap, creativeArr[i].properties.artistDatabaseId)
                //redirectToSpotifyArtistAcc(artistArr[i].properties.spotifyLink)
            })

            //artistMarkers[i].style.backgroundImage = `url(${artistArr[i].properties.artistPicture})`
            //artistMarkers[i].innerHTML = `<p>${artistArr[i].properties.artistName}</p>`

            // currentMap.on('zoom', () => {
            //     handleZoomArtistMarker(currentMap, artistMarkers[i], artistArr[i], 8.75)
            //     //hideMarkersNotInViewport(currentMap, mapboxMarkerArray[i], artistMarkers[i], artistArr[i])
            // })


            currentMap.on('move', () => {
                hideMarkersNotInViewport(currentMap, mapboxMarkerArray[i], creativeMarkers[i], creativeArr[i])
            })

            //handleZoomArtistMarker(currentMap, artistMarkers[i], artistArr[i], 8.75)
        }
    }
}