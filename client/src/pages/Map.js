import React from 'react'
import { useEffect, useRef } from 'react'
import axios from 'axios'

import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import 'mapbox-gl/dist/mapbox-gl.css';

function Map() {

    //for development
    // const CLIENT_URL = 'http://localhost:3000'
    // const API_URL = 'http://localhost:5005'

    //for deployment
    const API_URL = 'https://trapmap.herokuapp.com'
    const CLIENT_URL = 'https://trapmap.herokuapp.com'


    //public url
    // const API_URL = 'https://trapmap.eu'
    // const CLIENT_URL = 'https://trapmap.eu'

    //map props
    const mapContainer = useRef(null);
    const map = useRef(null);
    const berlinBounds = [
        [12.25, 51.75],
        [14.75, 53.25]
    ]


    const berlinCenter = [13.404954, 52.520008]
    // const hamburgCenter = [10.020145509856745, 53.57073340285103]
    // const wienCenter = [16.399278140182776, 48.216024738236314]


    //handel city change with mapbox fly to animation
    // const flyToCity = (currentMap, city) => {
    //     if (city === 'berlin') {
    //         currentMap.setMaxBounds(undefined)
    //         currentMap.setMinZoom(undefined)

    //         currentMap.flyTo({
    //             center: berlinCenter,
    //             zoom: 9.255562090280671
    //         })

    //         currentMap.once('moveend', () => {
    //             currentMap.setMaxBounds(berlinBounds)
    //         })
    //     }

    //     if (city === 'hamburg') {
    //         currentMap.setMaxBounds(undefined)
    //         currentMap.setMinZoom(undefined)

    //         //disable bounds and minZoom
    //         currentMap.flyTo({
    //             center: hamburgCenter,
    //         })


    //         currentMap.once('moveend', () => {
    //             currentMap.setMaxBounds()
    //         })
    //     }

    //     if (city === 'wien') {
    //         currentMap.setMaxBounds(undefined)
    //         currentMap.setMinZoom(undefined)

    //         //disable bounds and min zoom
    //         currentMap.flyTo({
    //             center: wienCenter,
    //             zoom: 9.255562090280671
    //         })


    //         currentMap.once('moveend', () => {
    //             currentMap.setMaxBounds()
    //         })

    //     }
    // }

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

    const redirectToHomepage = () => {
        window.location.href = `${CLIENT_URL}`
    }

    const createHomeButton = (currentMap) => {
        const arrowLeftIcon = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"90%\" height=\"90%\"><path fill=\"none\" d=\"M0 0h24v24H0z\"/><path d=\"M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z\" fill=\"rgba(147,129,255,1)\"/></svg>"
        const homeButton = document.createElement('div')
        homeButton.className = 'homeButton'
        homeButton.innerHTML = arrowLeftIcon

        homeButton.addEventListener('click', () => {
            redirectToHomepage()
        })
        return new mapboxgl.Marker(homeButton).setLngLat(getTopLeftCoordinates(currentMap)).addTo(currentMap)
    }

    const getTopLeftCoordinates = (currentMap) => {
        let lng = currentMap.getBounds()._sw.lng
        let lat = currentMap.getBounds()._ne.lat

        return [lng, lat]
    }


    useEffect(() => {
        
        

        //create the map object
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/joostwmd/ckucoygnc51gn18s0xu6mjltv',
            center: berlinCenter,
            zoom: 8,
            minZoom: 8,
            maxBounds: berlinBounds,
            attributionControl: false,
        })


        console.log(map.current.getZoom())

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
                    markers[i].innerHTML = `<p className="artistNameInMarker">${features[i].properties.artistName}</p>`

                    //resize markers in zoom
                    map.current.on('zoom', () => {
                        const initialZoom = 8 

                        let markerSize = (Number((map.current.getZoom()) - initialZoom) * 15) + 30
                        let nameSize = ((Number((map.current.getZoom()) - initialZoom) * 5) + 10)
                        markers[i].style.height = `${markerSize}px`
                        markers[i].style.width = `${markerSize}px`
                        markers[i].innerHTML = `<p className="artistNameInMarker" style='font-size:${nameSize}px'>${features[i].properties.artistName}</p>`
                    })
                }
            }
        })

        //create home button
        const homeButtonMarker = createHomeButton(map.current)

        map.current.on('zoom', () => {
            homeButtonMarker.setLngLat(getTopLeftCoordinates(map.current))
        })

        map.current.on('move', () => {
            homeButtonMarker.setLngLat(getTopLeftCoordinates(map.current))
        })

    }, [])





    return (
        <div>
            {/* <div>
                <Flex
                    bg='brand.200'
                    w='100vw'
                    h='10vw'
                    alignItems='center'
                    justifyContent='space-around'
                >
                    <Text
                        onClick={() => { redirectToHomepage() }}
                        fontSize='5vw'
                    >
                        home
                    </Text>

                    <select
                        // onChange={e => flyToCity(map.current, e.target.value)}
                    >
                        <option
                            value='berlin'
                        >
                            berlin
                        </option>

                        <option
                            value='hamburg'
                            disabled
                        >
                            hamburg - coming soon
                        </option>

                        <option
                            value='wien'
                            disabled
                        >
                            wien - coming soon
                        </option>
                    </select>

                </Flex>
            </div> */}


            <div ref={mapContainer} className="map-container" />
        </div>
    )
}

export default Map
