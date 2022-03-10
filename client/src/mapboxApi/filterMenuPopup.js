import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import 'mapbox-gl/dist/mapbox-gl.css';
import ReactDOM from 'react-dom';
import FilterMenu from '../components/FilterMenu';
import { getBottomMiddleCoordinates, getCenterCoordinates, disableMapInteractions, enableMapInteractions } from './general'
import { handleZoomArtistMarker } from '../mapboxApi/artistMarkerLayer'
import { ChakraProvider } from '@chakra-ui/react'
import Fonts from '../style/fonts/Fonts'
import theme from '../style/theme'

const popup = []
export const createFilterMenuPopup = (currentMap, artistsArr) => {

    disableMapInteractions(currentMap)

    const marker = document.createElement('div')
    marker.id = 'filterMenu'
    popup.push(marker)
    new mapboxgl.Marker(marker).setLngLat(getCenterCoordinates(currentMap)).addTo(currentMap)
    ReactDOM.render(

        <ChakraProvider theme={theme}>
            <Fonts />
            <FilterMenu currentMap={currentMap} popup={popup} artistsArr={artistsArr} />
        </ChakraProvider>
        , document.getElementById('filterMenu')
    )

}



export const closeFilterMenuPopup = (currentMap, popup) => {
    enableMapInteractions(currentMap)

    if (popup !== null) {
        for (var i = popup.length - 1; i >= 0; i--) {
            popup[i].remove();
        }
    }
}


export const createFilterMenuButton = (currentMap, artistsArr) => {
    const homeButton = document.createElement('div')
    homeButton.className = 'filterMenuButton'
    homeButton.innerHTML = '<p>filter menu</p>'
    homeButton.addEventListener('click', () => {
        createFilterMenuPopup(currentMap, artistsArr)

    })
    return new mapboxgl.Marker(homeButton).setLngLat(getBottomMiddleCoordinates(currentMap)).addTo(currentMap)
}

export const filterArtists = (currentMap, artists, popup, selectedGenres) => {
    const artistMarkers = document.getElementsByClassName('artistMarker')
    console.log(selectedGenres)

    for (let i = 0; i <  artists.length; i++){
        if (artists[i].properties.city !== 'berlin'){
            artists[i].properties.state = 'inactive'
            artistMarkers[i].style.visibility = 'hidden'
        }

        if (artists[i].properties.city === 'berlin'){
            artists[i].properties.state = 'active'
            handleZoomArtistMarker(currentMap, artistMarkers[i], artists[i], 8.75)

        }
    }

    closeFilterMenuPopup(currentMap, popup)
}