import React from 'react'
import { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import Nav from '../components/Nav';
import SelectCity from '../components/SelectCity';

import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import 'mapbox-gl/dist/mapbox-gl.css';

import { SERVER_URL, CLIENT_URL, MAPBOX_TOKEN } from '../clientVariables'


function Map() {

    const [selectCityMenuOpen, setSelectCityMenuOpen] = useState(false)

    const toggleSetSelectCityMenuOpen = (action) => {
        if (action === 'open') {
            setSelectCityMenuOpen(true)
        } else if (action === 'close') {
            setSelectCityMenuOpen(false)
        }
    }

    const renderNav = () => {
        if (selectCityMenuOpen === false) {
            return (
                <Nav currentCity={currentCity} toggleSetSelectCityMenuOpen={toggleSetSelectCityMenuOpen} redirectToHomepage={redirectToHomepage} />
            )
        }
    }

    const renderSelectCity = () => {
        if (selectCityMenuOpen === true) {
            return (
                <SelectCity currentCity={currentCity} currentMap={currentMap} toggleSetSelectCityMenuOpen={toggleSetSelectCityMenuOpen} jumpToCity={jumpToCity} />
            )
        }
    }

    //map props
    mapboxgl.accessToken = MAPBOX_TOKEN
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [currentMap, setCurrentMap] = useState()
    const [currentCity, setCurrentCity] = useState('')

    const berlinCenter = [13.404954, 52.520008]
    const viennaCenter = [16.399278140182776, 48.216024738236314]
    const hamburgCenter = [10.020145509856745, 53.57073340285103]
    const frankfurtCenter = [8.676046683139553, 50.119403081008265]
    const stuttgartCenter = [9.190939013758715, 48.79088672173038]


    //handel city change with mapbox fly to animation
    const jumpToCity = (currentMap, city) => {
        if (city === 'berlin') {
            currentMap.setMinZoom(undefined)
            currentMap.flyTo({
                center: berlinCenter,
                speed: 1.25
            })

            setCurrentCity('berlin')
            currentMap.once('moveend', () => {
                //currentMap.setMinZoom(8.65)

            })
        }

        if (city === 'hamburg') {
            currentMap.setMinZoom(undefined)
            currentMap.flyTo({
                center: hamburgCenter,
                speed: 1.25
            })
            setCurrentCity('hamburg')
            currentMap.once('moveend', () => {
                //currentMap.setMinZoom(8.65)

            })
        }

        if (city === 'vienna') {
            currentMap.setMinZoom(undefined)
            currentMap.flyTo({
                center: viennaCenter,
                speed: 1.25
            })
            setCurrentCity('vienna')

            currentMap.once('moveend', () => {
                //currentMap.setMinZoom(8.65)

            })

        }

        if (city === 'frankfurt') {
            currentMap.setMinZoom(undefined)
            currentMap.flyTo({
                center: frankfurtCenter,
                speed: 1.25
            })
            setCurrentCity('frankfurt')

            currentMap.once('moveend', () => {
                //currentMap.setMinZoom(8.65)

            })
        }

        if (city === 'stuttgart') {
            currentMap.setMinZoom(undefined)
            currentMap.flyTo({
                center: stuttgartCenter,
                speed: 1.25
            })
            setCurrentCity('stuttgart')

            currentMap.once('moveend', () => {
                //currentMap.setMinZoom(8.65)

            })
        }
    }

    const getCity = async () => {
        const city = await sessionStorage.getItem('city')

        if (city === null) {
            return 'berlin'
        } else {
            return city
        }

    }

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
    const redirectToArtistProfilePage = (artistDatabaseId, artistSpotifyId, zoom) => {
        sessionStorage.setItem('zoom', zoom)
        window.location.href = `${CLIENT_URL}/map/:${artistDatabaseId}:${artistSpotifyId}`

    }

    const getMapProps = async () => {
        const coords = await sessionStorage.getItem('coords')
        const zoom = await sessionStorage.getItem('zoom')

        if (coords !== null && zoom !== null) {
            return [[Number(coords.split(',')[0]), Number(coords.split(',')[1])], Number(zoom)]
        } else if (coords !== null && zoom === null) {
            return [[Number(coords.split(',')[0]), Number(coords.split(',')[1])], 12]
        } else if (coords === null && zoom === null) {
            return [berlinCenter, 8.75]
        }

    }


    const createMap = (coords, zoom) => {
        if (map.current) return;
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/joostwmd/ckucoygnc51gn18s0xu6mjltv',
            center: coords,
            zoom: zoom,
            //minZoom: 8.65,

            attributionControl: false,
        })

        return map.current
    }

    const redirectToHomepage = () => {
        window.location.href = `${CLIENT_URL}`
    }

    const resizeArtistMarkers = (marker, markerProps, initialZoom) => {
        let markerSize = (Number((map.current.getZoom()) - initialZoom) * 8) + 22
        let nameSize = (Number((map.current.getZoom()) - initialZoom) * 4) + 5
        
        if (Number((map.current.getZoom() > 7.5))) {
            marker.style.visibility = 'visible'
            marker.style.height = `${markerSize}px`
            marker.style.width = `${markerSize}px`
            marker.innerHTML = `<p style='font-size:${nameSize}px'>${markerProps.properties.artistName}</p>`
        }

        if (Number((map.current.getZoom() <= 7.5))) {
            marker.style.visibility = 'hidden'
            marker.innerHTML = ''
        }
    }

    // const createHomeButton = (currentMap) => {
    //     const homeButton = document.createElement('div')
    //     homeButton.className = 'homeButton'
    //     homeButton.innerHTML = '<p>home</p>'
    //     homeButton.addEventListener('click', () => {
    //         redirectToHomepage()
    //     })
    //     return new mapboxgl.Marker(homeButton).setLngLat(getTopMiddleCoordinates(currentMap)).addTo(currentMap)
    // }

    // const getTopMiddleCoordinates = (currentMap) => {
    //     let lng = currentMap.getCenter().lng
    //     let lat = currentMap.getBounds()._ne.lat

    //     return [lng, lat]
    // }

    useEffect(() => {
        axios.get(`${SERVER_URL}/dataBase/map`)
            .then(res => {
                //change data into mapboxgl format with function
                artistToFeatures(res.data)
            })

        getCity()
            .then(city => {
                setCurrentCity(city)
            })



        getMapProps()
            .then(props => {
                map.current = createMap(props[0], props[1])
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
                                redirectToArtistProfilePage(features[i].properties.artistDatabaseId, features[i].properties.artistSpotifyId, map.current.getZoom())
                            })

                            //add url to background img
                            markers[i].style.backgroundImage = `url(${features[i].properties.artistPicture})`

                            //artistName
                            markers[i].innerHTML = `<p>${features[i].properties.artistName}</p>`

                            //resize markers in zoom
                            map.current.on('zoom', () => {
                                resizeArtistMarkers(markers[i], features[i], 8.75)
                                //hideArtistMarkers(map.current)
                            })

                            resizeArtistMarkers(markers[i], features[i], 8.75)
                        }
                    }
                })
            })
    }, [])





    return (
        <div>
            {/* <Nav currentMap={currentMap} currentCity={currentCity} jumpToCity={jumpToCity} /> */}
            {renderNav()}
            {renderSelectCity()}
            <div ref={mapContainer} className="map-container" />
        </div>
    )
}

export default Map
