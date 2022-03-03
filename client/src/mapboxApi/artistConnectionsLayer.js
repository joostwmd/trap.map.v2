import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import 'mapbox-gl/dist/mapbox-gl.css';

import axios from 'axios'
import { SERVER_URL } from '../clientVariables'

import ReactDOM from 'react-dom';
import CloseConnectionsButton from '../components/CloseConnectionsButton';

////TEST 

const testArtist = {
    'name': 'test',
    'coordinates': [13.589783011720522, 52.444243934389924],
    'connections': ['62190272f637e68233425549', '621cf3c4efebccc1638af8e8', '62165502e3cf05875f41287a', '621653c8e3cf05875f412876']
}

const getDataBaseData = async (dataBaseId) => {
    const requestBody = { dataBaseId }

    const response = await axios.post(`${SERVER_URL}/dataBase/artistProfile`, requestBody)
    const data = await response

    return data
}


export const jumpToCenter = (currentMap, artistCoords) => {
    currentMap.flyTo({
        center: artistCoords,
        speed: 1.25,
        zoom: 6.5
    })
}


export const createConnectionLayer = (currentMap, artistDatabaseId, artistConnections) => {
    getDataBaseData(artistDatabaseId)
        .then(artistData => {
            for (let i = 0; i < testArtist.connections.length; i++) {
                getDataBaseData(testArtist.connections[i])
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
                                'line-color': '#888',
                                'line-width': 8
                            }
                        });
        
                    })
            }
        })
}

export const getBottomRightCoordinates = (currentMap) => {
    let lng = currentMap.getBounds()._ne.lng
    let lat = currentMap.getBounds()._sw.lat

    return [lng, lat]
}

const marker = []
export const createCloseConnectionsButton = (currentMap) => {
    const button = document.createElement('div')
    button.id = 'closeConnectionsButton'
    marker.push(button)
    new mapboxgl.Marker(button).setLngLat(getBottomRightCoordinates(currentMap)).addTo(currentMap)
    
    ReactDOM.render(
        <CloseConnectionsButton currentMap={currentMap} marker={marker} />
        , document.getElementById('closeConnectionsButton')
    )
}


const removeConnectionsLayers = (currentMap) => {

    for (let i = 0; i < testArtist.connections.length; i++){
        if (currentMap.getLayer(`connection${i}`)) {
            currentMap.removeLayer(`connection${i}`);
        }
        if (currentMap.getSource(`connection${i}`)) {
            currentMap.removeSource(`connection${i}`);
        }
    }
}

const removeCloseConnectionsButton = (button) => {
    if (button!==null) {
        for (var i = button.length - 1; i >= 0; i--) {
            button[i].remove();
        }
    }
}

export const handleRemoveConnectionsClick = (currentMap, button) => {
    removeConnectionsLayers(currentMap)
    removeCloseConnectionsButton(button)
}



