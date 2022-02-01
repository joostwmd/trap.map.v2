import React from 'react'
import { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import Nav from '../components/Nav';

import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import 'mapbox-gl/dist/mapbox-gl.css';

import { SERVER_URL, CLIENT_URL } from '../clientVariables'


function Map({currentCity, setCurrentCity}) {

    //map props
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [currentMap, setCurrentMap] = useState()

    const berlinCenter = [13.404954, 52.520008]
    const viennaCenter = [16.399278140182776, 48.216024738236314]
    const hamburgCenter = [10.020145509856745, 53.57073340285103]

    
    //handel city change with mapbox fly to animation
    const jumpToCity = (currentMap, city) => {

        if (city === 'berlin') {
            currentMap.setCenter(berlinCenter)
            setCurrentCity('berlin')
            currentMap.once('movestart', () => {
                currentMap.setMinZoom(8.65)
                
            })
        }

        if (city === 'hamburg') {

            currentMap.setCenter(hamburgCenter)
            setCurrentCity('hamburg')
            currentMap.once('movestart', () => {
                currentMap.setMinZoom(8.65)
               
            })
        }

        if (city === 'vienna') {
            setCurrentCity('vienna')
            currentMap.setCenter(viennaCenter)

            currentMap.once('movestart', () => {
                currentMap.setMinZoom(8.65)
               
            })

        }
    }


    mapboxgl.accessToken = "pk.eyJ1Ijoiam9vc3R3bWQiLCJhIjoiY2t1NDQ3NmJqMXRwbzJwcGM5a3FuY3B3dCJ9.yyon_mO5Y9sI1WgD-XFDRQ"

    //change the db artist data into mapboxgl format
    const features = []
    const artistToFeatures = (artists) => {
        for (let artist of artists) {
            const feature = {
                'type': 'feature',

                'properties': {
                    'artistName': artist.name,
                    'artistPicture': artist.picture,
                    'artistDatabaseId': artist._id,
                    'artistSpotifyId': artist.spotifyID,
                    'city': artist.city
                },

                'geometry': {
                    'type': 'Point',
                    'coordinates': artist.coordinates
                }
            }
            features.push(feature)
        }
    }

    //build redirect url
    const redirectToArtistProfilePage = (artistName, artistDatabaseId, artistSpotifyId, artistCity) => {
        window.location.href = `${CLIENT_URL}/map/${artistName}:${artistDatabaseId}:${artistSpotifyId}:${artistCity}`

    }

    const getCurrentCity = async () => {
        const city = await sessionStorage.getItem('currentCity')
        
        if (city === null){
            setCurrentCity('berlin')
        } else {
            setCurrentCity(city)
        }

        return city
    }


    const createMap = (city) => {
        if (city === 'berlin' || city === null) {
            if (map.current) return; 
            map.current = new mapboxgl.Map({
                container: mapContainer.current,
                style: 'mapbox://styles/joostwmd/ckucoygnc51gn18s0xu6mjltv',
                center: berlinCenter,
                zoom: 8.75,
                minZoom: 8.65,
               
                attributionControl: false,
            })

            return map.current
        }

        if (city === 'hamburg'){
            if (map.current) return; 
            map.current = new mapboxgl.Map({
                container: mapContainer.current,
                style: 'mapbox://styles/joostwmd/ckucoygnc51gn18s0xu6mjltv',
                center: hamburgCenter,
                zoom: 8.75,
                minZoom: 8.65,
                
                attributionControl: false,
            })

            return map.current
        }

        if (city === 'vienna'){
            if (map.current) return; 
            map.current = new mapboxgl.Map({
                container: mapContainer.current,
                style: 'mapbox://styles/joostwmd/ckucoygnc51gn18s0xu6mjltv',
                center: viennaCenter,
                zoom: 8.75,
                minZoom: 8.65,
                //maxBounds : berlinBounds,
                attributionControl: false,
            })

            return map.current
        }


    }

    useEffect(() => {
        axios.get(`${SERVER_URL}/dataBase/map`)
            .then(res => {
                //change data into mapboxgl format with function
                artistToFeatures(res.data)
            })

        getCurrentCity()
            .then(city => {
                map.current = createMap(city)

                setCurrentMap(map.current)
                map.current.dragRotate.disable()
                map.current.touchZoomRotate.disableRotation()


                map.current.on('load', () => {
                    map.current.addSource('artists', {
                        'type': 'geojson',
                        'data': {
                            'type': 'FeatureCollection',
                            'features': features
                        }
                    })
        
                    //create a marker(img) for each artists (feature) object
                    for (let i = 0; i < features.length; i++) {
        
                        //create divs
                        const marker = document.createElement('div')
                        marker.className = 'marker'
                        //marker.id = `marker${features.properties.artistName}`
        
                        //add the divs to mapboxgl marker 
                        new mapboxgl.Marker(marker).setLngLat(features[i].geometry.coordinates).addTo(map.current)
        
                        //create array for all markers
                        const markers = document.getElementsByClassName('marker')
        
                        //add functionality and design (src for marker img and scaleControl)  
                        for (let i = 0; i < markers.length; i++) {
                            markers[i].addEventListener('click', () => {
                                redirectToArtistProfilePage(features[i].properties.artistName, features[i].properties.artistDatabaseId, features[i].properties.artistSpotifyId, features[i].properties.city)
                            })
        
                            //add url to background img
                            markers[i].style.backgroundImage = `url(${features[i].properties.artistPicture})`
        
                            //artistName
                            markers[i].innerHTML = `<p>${features[i].properties.artistName}</p>`
        
                            //resize markers in zoom
                            map.current.on('zoom', () => {
                                const initialZoom = 8.75
        
                                let markerSize = (Number((map.current.getZoom()) - initialZoom) * 8) + 22
                                let nameSize = (Number((map.current.getZoom()) - initialZoom) * 4) + 5
                                markers[i].style.height = `${markerSize}px`
                                markers[i].style.width = `${markerSize}px`
                                markers[i].innerHTML = `<p style='font-size:${nameSize}px'>${features[i].properties.artistName}</p>`
                            })
                        }
                    }
                })
                
            })
    }, [])





    return (
        <div>
            <Nav currentMap={currentMap} currentCity={currentCity} jumpToCity={jumpToCity} />
            <div ref={mapContainer} className="map-container" />
        </div>
    )
}

export default Map
