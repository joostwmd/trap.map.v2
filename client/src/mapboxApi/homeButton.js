import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import 'mapbox-gl/dist/mapbox-gl.css';

import { ICONS } from '../clientVariables';
import { CLIENT_URL } from '../clientVariables'
import { getHomeButtonCoordinates } from './general';

const redirectToHomepage = () => {
    window.location.href = `${CLIENT_URL}/`
}

export const createHomeButton = (currentMap) => {
    const homeButton = document.createElement('div')
    homeButton.className = 'homeButton'
    homeButton.innerHTML = `<div>${ICONS.home}</div>`
    homeButton.addEventListener('click', () => {
        redirectToHomepage()

    })
    return new mapboxgl.Marker(homeButton).setLngLat(getHomeButtonCoordinates(currentMap)).addTo(currentMap)
}