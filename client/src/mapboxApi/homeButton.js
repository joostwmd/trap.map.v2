import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import 'mapbox-gl/dist/mapbox-gl.css';

import { CLIENT_URL } from '../clientVariables'


const redirectToHomepage = () => {
    window.location.href = `${CLIENT_URL}/`
}

export const getTopLeftCoordinates = (currentMap) => {
    let lng = currentMap.getBounds()._sw.lng
    let lat = currentMap.getBounds()._ne.lat

    return [lng, lat]
}

export const createHomeButton = (currentMap) => {
    const homeButton = document.createElement('div')
    homeButton.className = 'homeButton'
    homeButton.innerHTML = '<p className="textInHomeButton">home</p>'
    homeButton.addEventListener('click', () => {
        redirectToHomepage()

    })
    return new mapboxgl.Marker(homeButton).setLngLat(getTopLeftCoordinates(currentMap)).addTo(currentMap)
}