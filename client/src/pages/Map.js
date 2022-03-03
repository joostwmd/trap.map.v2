import React from 'react'
import { useEffect, useRef } from 'react'
import axios from 'axios'
//import Nav from '../components/Nav';

import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import 'mapbox-gl/dist/mapbox-gl.css';

import { SERVER_URL, MAPBOX_TOKEN } from '../clientVariables'

import { citysToFeatures, loadCityMarker } from '../mapboxApi/cityMarkerLayer'
import { artistToFeatures, loadArtistMarkers } from '../mapboxApi/artistMarkerLayer'
import { createHomeButton, getTopLeftCoordinates } from '../mapboxApi/homeButton'
// import { createRandomArtistButton, getBottomMiddleCoordinates, handleZoomRandomArtistMarker } from '../mapboxApi/shuffelArtistsButton';
// import { getBottomRightCoordinates } from '../mapboxApi/artistConnectionsLayer'


function Map() {

    //map props
    mapboxgl.accessToken = MAPBOX_TOKEN
    const mapContainer = useRef(null);
    const map = useRef(null);

    const center = [10.172946185256103, 50.70767729701806]
    const bounds = [
        [1.5959956864622256, 44.599918543774685],
        [19.10264276075604, 57.051410713269455]
    ]

    const artitsFeatures = []
    const cityFeatures = []

    const createMap = (mapContainer) => {
        if (map.current) return;
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/joostwmd/ckucoygnc51gn18s0xu6mjltv',
            center: center,
            zoom: 4.2,
            minZoom: 4,
            maxBounds: bounds,
            attributionControl: false,
        })

        return map.current
    }


    useEffect(() => {

        axios.get(`${SERVER_URL}/dataBase/getArtists`)
            .then(res => {
                artistToFeatures(res.data, artitsFeatures)
            })

        axios.get(`${SERVER_URL}/dataBase/getCities`)
            .then(res => {
                citysToFeatures(res.data, cityFeatures)
            })


        map.current = createMap(mapContainer)
        map.current.dragRotate.disable()
        map.current.touchZoomRotate.disableRotation()

        map.current.on('load', () => {
            loadCityMarker(map.current, cityFeatures)
            loadArtistMarkers(map.current, artitsFeatures)


        })

        const homeButtonMarker = createHomeButton(map.current)
        //const randomArtistMarker = createRandomArtistButton(map.current)

        //set correct visiblity on map load
        //handleZoomRandomArtistMarker(map.current, randomArtistMarker)

        map.current.on('zoom', () => {
            homeButtonMarker.setLngLat(getTopLeftCoordinates(map.current))

            // randomArtistMarker.setLngLat(getBottomMiddleCoordinates(map.current))
            // handleZoomRandomArtistMarker(map.current, randomArtistMarker)

        })

        map.current.on('move', () => {
            homeButtonMarker.setLngLat(getTopLeftCoordinates(map.current))
            //randomArtistMarker.setLngLat(getBottomMiddleCoordinates(map.current))

        })
    }, [])

    return (
        <div>
            <div ref={mapContainer} className="map-container" />
        </div>
    )

}
export default Map
