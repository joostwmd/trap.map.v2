import React, { useState } from 'react'
import { useEffect, useRef } from 'react'
import axios from 'axios'
//import Nav from '../components/Nav';
import { ICONS } from '../clientVariables';

import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import 'mapbox-gl/dist/mapbox-gl.css';

import { SERVER_URL, MAPBOX_TOKEN } from '../clientVariables'

// import { citysToFeatures, loadCityMarker, handleZoomCityMarkers } from '../mapboxApi/cityMarkerLayer'
import { artistToFeatures, loadArtistMarkers } from '../mapboxApi/artistMarkerLayer'
import { createHomeButton } from '../mapboxApi/homeButton'
import { createShuffleArtistButton } from '../mapboxApi/shuffelArtistsButton';
import { createCloseConnectionsButton } from '../mapboxApi/artistConnectionsLayer'
import { getHomeButtonCoordinates, getShuffleArtistsButtonCoordinates, getOpenFilterMenuButtonCoordinares, getCloseConnectionsButtonCoordinates } from '../mapboxApi/general'
import { createFilterMenuButton } from '../mapboxApi/filterMenuPopup'
//import { createOpenSearchBarButton } from '../mapboxApi/searchBar'
import { creativesToFeatures, loadCreativeMarkers } from '../mapboxApi/creativeMarkerLayer'


function Map() {
    //map props
    mapboxgl.accessToken = MAPBOX_TOKEN
    const mapContainer = useRef(null);
    const map = useRef(null);

    const center = [10.172946185256103, 50.70767729701806]
    const bounds = [
        [-2.6751938897195346, 41.314258227976836],
        [33.44692831623758, 60.83696282472915]
    ]


    const creativeFeatures = []
    const artistFeatures = []
    //const cityFeatures = []

    const createMap = (mapContainer) => {
        //if (map.current) return;
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

        axios.get(`${SERVER_URL}/dataBase/getCreatives`)
            .then(res => {
                creativesToFeatures(res.data, creativeFeatures)
            })

        axios.get(`${SERVER_URL}/dataBase/getArtists`)
            .then(res => {
                artistToFeatures(res.data, artistFeatures)
            })

        // axios.get(`${SERVER_URL}/dataBase/getCities`)
        //     .then(res => {
        //         citysToFeatures(res.data, cityFeatures)
        //     })


        map.current = createMap(mapContainer)
        map.current.dragRotate.disable()
        map.current.touchZoomRotate.disableRotation()

        map.current.on('load', () => {
            //loadCityMarker(map.current, cityFeatures)
            loadArtistMarkers(map.current, artistFeatures)
            loadCreativeMarkers(map.current, creativeFeatures)
        })

        const homeButtonMarker = createHomeButton(map.current)
        const shuffleArtistMarker = createShuffleArtistButton(map.current)
        const closeConnectionsButton = createCloseConnectionsButton(map.current)
        //const openFilterMenuBotton = createFilterMenuButton(map.current, artitsFeatures)
        const openFilterMenuBotton = createFilterMenuButton(map.current, artistFeatures)

        map.current.on('zoom', () => {
            homeButtonMarker.setLngLat(getHomeButtonCoordinates(map.current))
            shuffleArtistMarker.setLngLat(getShuffleArtistsButtonCoordinates(map.current))
            openFilterMenuBotton.setLngLat(getOpenFilterMenuButtonCoordinares(map.current))
            closeConnectionsButton.setLngLat(getCloseConnectionsButtonCoordinates(map.current))
        })

        map.current.on('move', () => {
            homeButtonMarker.setLngLat(getHomeButtonCoordinates(map.current))
            shuffleArtistMarker.setLngLat(getShuffleArtistsButtonCoordinates(map.current))
            openFilterMenuBotton.setLngLat(getOpenFilterMenuButtonCoordinares(map.current))
            closeConnectionsButton.setLngLat(getCloseConnectionsButtonCoordinates(map.current))
        })

        // const marker = new mapboxgl.Marker({
        //     draggable: true
        // }).setLngLat(center).addTo(map.current);
    
        // function dragEnd() {
        //     const lngLat = marker.getLngLat();
        //     console.log(lngLat.lng,lngLat.lat )
            
        // }
    
        // marker.on('dragend', dragEnd);
    }, [])

    return (
        <div>
            <div ref={mapContainer} className="map-container" />
        </div>
    )

}
export default Map
