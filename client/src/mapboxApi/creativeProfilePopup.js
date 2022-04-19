import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import 'mapbox-gl/dist/mapbox-gl.css';
import ReactDOM from 'react-dom';
import CreativeProfile from '../pages/CreativeProfile';
import { getCenterCoordinates, disableMapInteractions, enableMapInteractions, hideAllButtons, showAllButtons } from './general'
import { ChakraProvider } from '@chakra-ui/react'
import Fonts from '../style/fonts/Fonts'
import theme from '../style/theme'



const popup = []
export const createCreativeProfilePopup = (currentMap, dataBaseId) => {
    disableMapInteractions(currentMap)

    const marker = document.createElement('div')
    marker.id = 'filterMenu'
    popup.push(marker)
    new mapboxgl.Marker(marker).setLngLat(getCenterCoordinates(currentMap)).addTo(currentMap)
    ReactDOM.render(

        <ChakraProvider theme={theme}>
            <Fonts />
            <CreativeProfile currentMap={currentMap} popup={popup} dataBaseId={dataBaseId} />
        </ChakraProvider>
        , document.getElementById('filterMenu')
    )

    hideAllButtons()

}



export const closeCreativeProfilePopup = (currentMap, popup) => {
    enableMapInteractions(currentMap)

    if (popup !== null) {
        for (var i = popup.length - 1; i >= 0; i--) {
            popup[i].remove();
        }
    }

    showAllButtons()
}

