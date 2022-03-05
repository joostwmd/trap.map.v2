import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import 'mapbox-gl/dist/mapbox-gl.css';

import axios from 'axios'
import { SERVER_URL } from '../clientVariables'


const getDataBaseData = async (dataBaseId) => {
    const requestBody = { dataBaseId }

    const response = await axios.post(`${SERVER_URL}/dataBase/artistProfile`, requestBody)
    const data = await response

    return data
}


const jumpUp = (currentMap, artistCoords) => {
    currentMap.flyTo({
        center: artistCoords,
        speed: 1.25,
        zoom: 9.1
    })
}

const createConnectionLayer = (currentMap, artistDatabaseId) => {
    getDataBaseData(artistDatabaseId)
        .then(artistData => {
            for (let i = 0; i < artistData.data.connections.length; i++) {
                getDataBaseData(artistData.data.connections[i])
                    .then(connetionsData => {
                        currentMap.addSource(`connection${i}`, {
                            'type': 'geojson',
                            'data': {
                                'type': 'Feature',
                                'properties': {},
                                'geometry': {
                                    'type': 'LineString',
                                    'coordinates': [
                                        artistData.data.coordinates,
                                        connetionsData.data.coordinates
                                    ]
                                }
                            }
                        });
        
                        currentMap.addLayer({
                            'id': `connection${i}`,
                            'type': 'line',
                            'source': `connection${i}`,
                            'layout': {
                                'line-join': 'round',
                                'line-cap': 'round'
                            },
                            'paint': {
                                'line-color': '#ff6f59',
                                'line-width': 3
                            }
                        });
        
                    })
            }
        })
}

const showRemoveConnectionsButton = () => {
    const button = document.getElementById('closeConnectionsButton')
    button.style.visibility = 'visible'
}


export const handleShowConnectionsClick = (currentMap, artistDatabaseId, artistCoords) => {
    createConnectionLayer(currentMap, artistDatabaseId)
    showRemoveConnectionsButton()
    jumpUp(currentMap, artistCoords)
    sessionStorage.setItem('artistID', artistDatabaseId)
}



export const getBottomRightCoordinates = (currentMap) => {
    let lng = currentMap.getBounds()._ne.lng
    let lat = currentMap.getBounds()._sw.lat

    return [lng, lat]
}


export const createCloseConnectionsButton = (currentMap) => {
    const button = document.createElement('div')
    button.id = 'closeConnectionsButton'
    button.innerHTML = '<p>close</p>'
    button.style.visibility = 'hidden'
    button.addEventListener('click', () => {
        handleRemoveConnectionsClick(currentMap)

    })
    return new mapboxgl.Marker(button).setLngLat(getBottomRightCoordinates(currentMap)).addTo(currentMap)
    
}

const removeConnectionsLayers = (currentMap, artistDatabaseId) => {
    getDataBaseData(artistDatabaseId)
        .then(artistData => {
            for (let i = 0; i < artistData.data.connections.length; i++){
                if (currentMap.getLayer(`connection${i}`)) {
                    currentMap.removeLayer(`connection${i}`);
                }
                if (currentMap.getSource(`connection${i}`)) {
                    currentMap.removeSource(`connection${i}`);
                }
            }
        })
}

const hideCloseConnectionsButton = () => {
    const button = document.getElementById('closeConnectionsButton')
    button.style.visibility = 'hidden'
}

const handleRemoveConnectionsClick = (currentMap) => {
    const artistID = sessionStorage.getItem('artistID')
    removeConnectionsLayers(currentMap, artistID)
    hideCloseConnectionsButton()  
}


