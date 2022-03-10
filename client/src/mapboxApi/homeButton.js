import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import 'mapbox-gl/dist/mapbox-gl.css';

import { CLIENT_URL } from '../clientVariables'
import { getTopLeftCoordinates } from './general';


const redirectToHomepage = () => {
    window.location.href = `${CLIENT_URL}/`
}

const homeIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M21 20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.49a1 1 0 0 1 .386-.79l8-6.222a1 1 0 0 1 1.228 0l8 6.222a1 1 0 0 1 .386.79V20zm-2-1V9.978l-7-5.444-7 5.444V19h14z"/></svg>

export const createHomeButton = (currentMap) => {
    const homeButton = document.createElement('div')
    homeButton.className = 'homeButton'
    //homeButton.innerHTML = `<div className="homeButtonWrapper">${homeIcon}</div>`
    homeButton.innerHTML = '<p>home</p>'
    homeButton.addEventListener('click', () => {
        redirectToHomepage()

    })
    return new mapboxgl.Marker(homeButton).setLngLat(getTopLeftCoordinates(currentMap)).addTo(currentMap)
}