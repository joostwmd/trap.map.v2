import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import 'mapbox-gl/dist/mapbox-gl.css';

import axios from 'axios'
import { ICONS } from '../clientVariables';
import { SERVER_URL } from '../clientVariables'
import { getCloseConnectionsButtonCoordinates } from './general';


const getDataBaseData = async (dataBaseId) => {
    const requestBody = { dataBaseId }

    const response = await axios.post(`${SERVER_URL}/dataBase/artistProfile`, requestBody)
    const data = await response

    return data
}


const jumpUp = (currentMap, artistCoords) => {
    currentMap.flyTo({
        center: artistCoords,
        speed: 0.5,
        zoom: 11
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
    const button = document.getElementsByClassName('closeConnectionsButton')[0]
    button.style.visibility = 'visible'
}


export const handleShowConnectionsClick = (currentMap, artistDatabaseId, artistCoords) => {
    createConnectionLayer(currentMap, artistDatabaseId)
    showRemoveConnectionsButton()
    jumpUp(currentMap, artistCoords)
    sessionStorage.setItem('artistID', artistDatabaseId)
}

export const createCloseConnectionsButton = (currentMap) => {
    const button = document.createElement('div')
    button.className = 'closeConnectionsButton'
    button.innerHTML = `${ICONS.closeWhite}`
    button.style.visibility = 'hidden'
    button.addEventListener('click', () => {
        handleRemoveConnectionsClick(currentMap)

    })
    return new mapboxgl.Marker(button).setLngLat(getCloseConnectionsButtonCoordinates(currentMap)).addTo(currentMap)
    
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
    const button = document.getElementsByClassName('closeConnectionsButton')[0]
    button.style.visibility = 'hidden'
}

const handleRemoveConnectionsClick = (currentMap) => {
    const artistID = sessionStorage.getItem('artistID')
    removeConnectionsLayers(currentMap, artistID)
    hideCloseConnectionsButton()  
}



