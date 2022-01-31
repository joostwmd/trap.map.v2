import React from 'react'
import { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import Nav from '../components/Nav';

import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import 'mapbox-gl/dist/mapbox-gl.css';

function Map() {

    //for development
    // const CLIENT_URL = 'http://localhost:3000'
    // const API_URL = 'http://localhost:5005'

    //for deployment
    const API_URL = 'https://trapmap.herokuapp.com'
    const CLIENT_URL = 'https://trapmap.herokuapp.com'

    //map props
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [currentMap, setCurrentMap] = useState()
    
    const berlinCenter = [13.404954, 52.520008]
    const berlinBounds = [
        [12.75, 52],
        [14, 53.1]
    ]

    const viennaCenter = [16.399278140182776, 48.216024738236314]
    const viennaBounds = [
        [15.75, 47.55],
        [16.95, 48.75]
    ]

    const hamburgCenter = [10.020145509856745, 53.57073340285103]
    const hamburgBounds = [
        [9.5, 53],
        [10.75, 54]
    ]





    //function to disable all bounds/minZoom & map handlers
    const disabelMapInteractions = (currentMap) => {
        currentMap.boxZoom.disable()
        currentMap.doubleClickZoom.disable()
        currentMap.dragPan.disable()
        currentMap.keyboard.disable()
        currentMap.scrollZoom.disable()
        currentMap.touchZoomRotate.disable();
    }

    const enableMapIteractions = (currentMap) => {
        currentMap.boxZoom.enable()
        currentMap.doubleClickZoom.enable()
        currentMap.dragPan.enable()
        currentMap.keyboard.enable()
        currentMap.scrollZoom.enable()
        currentMap.touchZoomRotate.enable();
    }

    //handel city change with mapbox fly to animation
    const flyToCity = (currentMap, city) => {

        currentMap.setMaxBounds(undefined)
        currentMap.setMinZoom(undefined)
        disabelMapInteractions(currentMap)

        if (city === 'berlin') {
            currentMap.flyTo({
                center: berlinCenter,
                zoom : 8.75,
                speed : 1.5
            })

            currentMap.once('moveend', () => {
                enableMapIteractions(currentMap)
                currentMap.setMinZoom(8.65)
                currentMap.setMaxBounds(berlinBounds)
            })
        }

        if (city === 'hamburg') {  
            currentMap.flyTo({
                center: hamburgCenter,
                zoom : 8.75,
                speed : 1.5
            })


            currentMap.once('moveend', () => {
                enableMapIteractions(currentMap)
                currentMap.setMinZoom(8.65)
                currentMap.setMaxBounds(hamburgBounds)
            })
        }

        if (city === 'vienna') {
            currentMap.flyTo({
                center: viennaCenter,
                zoom: 8.75,
                speed : 1.5
            })


            currentMap.once('moveend', () => {
                enableMapIteractions(currentMap)
                currentMap.setMinZoom(8.65)
                currentMap.setMaxBounds(viennaBounds)
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
                    'artistSpotifyId': artist.spotifyID
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
    const redirectToArtistProfilePage = (artistName, artistDatabaseId, artistSpotifyId) => {
        window.location.href = `${CLIENT_URL}/map/${artistName}:${artistDatabaseId}:${artistSpotifyId}`

    }

    // const redirectToHomepage = () => {
    //     window.location.href = `${CLIENT_URL}`
    // }

    // const createHomeButton = (currentMap) => {
    //     const arrowLeftIcon = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"90%\" height=\"90%\"><path fill=\"none\" d=\"M0 0h24v24H0z\"/><path d=\"M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z\" fill=\"rgba(147,129,255,1)\"/></svg>"
    //     const homeButton = document.createElement('div')
    //     homeButton.className = 'homeButton'
    //     homeButton.innerHTML = arrowLeftIcon

    //     homeButton.addEventListener('click', () => {
    //         redirectToHomepage()
    //     })
    //     return new mapboxgl.Marker(homeButton).setLngLat(getTopLeftCoordinates(currentMap)).addTo(currentMap)
    // }

    // const getTopLeftCoordinates = (currentMap) => {
    //     let lng = currentMap.getBounds()._sw.lng
    //     let lat = currentMap.getBounds()._ne.lat

    //     return [lng, lat]
    // }


    useEffect(() => {
        
        //create the map object
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/joostwmd/ckucoygnc51gn18s0xu6mjltv',
            center: berlinCenter,
            zoom: 8.75,
            minZoom: 8.65,
            maxBounds: berlinBounds,
            attributionControl: false,
        })

        //set map.current to currentMap state
        setCurrentMap(map.current)

        //disable roation 
        map.current.dragRotate.disable()
        map.current.touchZoomRotate.disableRotation()

        //get all artist data form db
        axios.get(`${API_URL}/dataBase/map`)
            .then(res => {
                //change data into mapboxgl format with function
                artistToFeatures(res.data)
            })

        //load artist data in mapbox format onto the map object
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
                        redirectToArtistProfilePage(features[i].properties.artistName, features[i].properties.artistDatabaseId, features[i].properties.artistSpotifyId)
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

                        console.log(Number((map.current.getZoom())))
                    })
                }
            }
        })

        // //create home button
        // const homeButtonMarker = createHomeButton(map.current)

        // map.current.on('zoom', () => {
        //     homeButtonMarker.setLngLat(getTopLeftCoordinates(map.current))
        // })

        // map.current.on('move', () => {
        //     homeButtonMarker.setLngLat(getTopLeftCoordinates(map.current))
        // })

    }, [])





    return (
        <div>
            <Nav currentMap={currentMap} flyToCity={flyToCity}  />
            <div ref={mapContainer} className="map-container" />
        </div>
    )
}

export default Map
