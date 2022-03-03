import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import 'mapbox-gl/dist/mapbox-gl.css';
import ReactDOM from 'react-dom';
import ArtistProfile from '../pages/ArtistProfile'

const getCenter = (currentMap) => {
    let lng = currentMap.getCenter().lng
    let lat = currentMap.getCenter().lat
    return [lng, lat]
}

const disableMapInteractions = (currentMap) => {
    currentMap.boxZoom.disable();
    currentMap.doubleClickZoom.disable();
    currentMap.dragPan.disable();
    currentMap.dragRotate.disable();
    currentMap.keyboard.disable();
    currentMap.scrollZoom.disable();
    currentMap.touchZoomRotate.disable();
}

const popup = []
export const createArtistProfilePopup = (currentMap, dataBaseId, spotifyId) => {

    disableMapInteractions(currentMap)

    const marker = document.createElement('div')
    marker.id = 'artistProfile'
    popup.push(marker)
    new mapboxgl.Marker(marker).setLngLat(getCenter(currentMap)).addTo(currentMap)
    ReactDOM.render(

        <ArtistProfile currentMap={currentMap} popup={popup} dataBaseId={dataBaseId} spotifyId={spotifyId} />
        , document.getElementById('artistProfile')
    )

}

const enableMapInteractions = (currentMap) => {
    currentMap.boxZoom.enable();
    currentMap.doubleClickZoom.enable();
    currentMap.dragPan.enable();
    currentMap.dragRotate.enable();
    currentMap.keyboard.enable();
    currentMap.scrollZoom.enable();
    currentMap.touchZoomRotate.enable();
}

export const closeArtistProfilePopup = (currentMap, popup) => {
    enableMapInteractions(currentMap)

    if (popup!==null) {
        for (var i = popup.length - 1; i >= 0; i--) {
            popup[i].remove();
        }
    }
}