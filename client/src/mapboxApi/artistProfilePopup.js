import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import 'mapbox-gl/dist/mapbox-gl.css';
import ReactDOM from 'react-dom';
import ArtistProfile from '../pages/ArtistProfile'
import { getCenterCoordinates, disableMapInteractions, enableMapInteractions, hideAllButtons, showAllButtons } from './general'
import { ChakraProvider } from '@chakra-ui/react'
import Fonts from '../style/fonts/Fonts'
import theme from '../style/theme'

export const popup = []
export const createArtistProfilePopup = (currentMap, dataBaseId, spotifyId) => {
    disableMapInteractions(currentMap)

    const marker = document.createElement('div')
    marker.id = 'artistProfile'
    popup.push(marker)
    new mapboxgl.Marker(marker).setLngLat(getCenterCoordinates(currentMap)).addTo(currentMap)

    ReactDOM.render(
        <ChakraProvider theme={theme}>
            <Fonts />
            <ArtistProfile currentMap={currentMap} popup={popup} dataBaseId={dataBaseId} spotifyId={spotifyId} />
        </ChakraProvider>
        , document.getElementById('artistProfile')
    )
    hideAllButtons()
}



export const closeArtistProfilePopup = (currentMap, popup) => {
    enableMapInteractions(currentMap)

    if (popup !== null) {
        for (var i = popup.length - 1; i >= 0; i--) {
            popup[i].remove();
        }
    }

    showAllButtons()
}

export const reloadArtistProfile = (artist) => {

}