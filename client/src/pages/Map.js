import React from 'react'
import { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import Nav from '../components/Nav';
import SelectCity from '../components/SelectCity';

import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import 'mapbox-gl/dist/mapbox-gl.css';

import { SERVER_URL, CLIENT_URL, MAPBOX_TOKEN } from '../clientVariables'
import { CITYS } from '../mapboxCityVariables'


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



    const handleJumpWithNav = (cityCenter) => {

        if (typeof (cityCenter) === 'string') {
            for (let city of CITYS) {
                if (city[0] === cityCenter) {
                    return city[1]
                }
            }
        } else {
            return cityCenter
        }
    }

    //handel city change with mapbox fly to animation
    const jumpToCity = async (currentMap, cityCenter, cityName) => {

        let center = await handleJumpWithNav(cityCenter)

        currentMap.flyTo({
            center: center,
            speed: 1.25,
            zoom: 9
        })
        setCurrentCity(cityName)
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
    const artitsFeatures = []
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
            artitsFeatures.push(feature)
        }
    }

    const cityFeatures = []
    const citysToFeatures = (citys) => {
        for (let city of citys) {
            const feature = {
                'type': 'feature',

                'properties': {
                    'cityName': city[0],
                    'cityCenter': city[1],
                    'cityMarkerSize': city[2]
                },

                'geometry': {
                    'type': 'Point',
                    'coordinates': city[1],
                }
            }
            cityFeatures.push(feature)
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

  
    const handleZoomArtistMarkers = (marker, markerProps, initialZoom) => {
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

    const handleZoomCityMarkers = (marker, markerProps, initialZoom) => {
        let markerSize = (Number((map.current.getZoom()) - initialZoom) * 8) + (markerProps.properties.cityMarkerSize / 100)
        let nameSize = (Number((map.current.getZoom()) - initialZoom) * 4) + (markerProps.properties.cityMarkerSize / 1000)

        if (Number((map.current.getZoom() > 7.5))) { 
            marker.style.visibility = 'hidden'
        }

        if (Number((map.current.getZoom() <= 7.5))) {
            marker.style.visibility = 'visible'
            marker.style.height = `${markerSize}px`
            marker.style.width = `${markerSize}px`
            marker.innerHTML = `<p style='font-size:${nameSize}px'>${markerProps.properties.cityName}</p>`
        }
    }

    useEffect(() => {
        axios.get(`${SERVER_URL}/dataBase/map`)
            .then(res => {
                //change data into mapboxgl format with function
                artistToFeatures(res.data)
            })

        citysToFeatures(CITYS)

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
                            'features': artitsFeatures
                        }
                    })

                    //create a marker(img) for each artists (feature) object
                    for (let i = 0; i < artitsFeatures.length; i++) {

                        //create divs
                        const marker = document.createElement('div')
                        marker.className = 'artistMarker'
                        //marker.id = `marker${features.properties.artistName}`

                        //add the divs to mapboxgl marker 
                        new mapboxgl.Marker(marker).setLngLat(artitsFeatures[i].geometry.coordinates).addTo(map.current)

                        //create array for all markers
                        const artistMarkers = document.getElementsByClassName('artistMarker')

                        //add functionality and design (src for marker img and scaleControl)  
                        for (let i = 0; i < artistMarkers.length; i++) {
                            artistMarkers[i].addEventListener('click', () => {
                                redirectToArtistProfilePage(artitsFeatures[i].properties.artistDatabaseId, artitsFeatures[i].properties.artistSpotifyId, map.current.getZoom())
                            })

                            //add url to background img
                            artistMarkers[i].style.backgroundImage = `url(${artitsFeatures[i].properties.artistPicture})`

                            //artistName
                            artistMarkers[i].innerHTML = `<p>${artitsFeatures[i].properties.artistName}</p>`

                            //resize markers in zoom
                            map.current.on('zoom', () => {
                                handleZoomArtistMarkers(artistMarkers[i], artitsFeatures[i], 8.75)
                            })

                            handleZoomArtistMarkers(artistMarkers[i], artitsFeatures[i], 8.75)
                        }
                    }


                    map.current.addSource('citys', {
                        'type': 'geojson',
                        'data': {
                            'type': 'FeatureCollection',
                            'features': cityFeatures
                        }
                    })

                    //create a marrker for each city (feature) object
                    for (let i = 0; i < cityFeatures.length; i++) {
                        const marker = document.createElement('div')
                        marker.className = 'cityMarker'

                        new mapboxgl.Marker(marker).setLngLat(cityFeatures[i].geometry.coordinates).addTo(map.current)

                        //create array for all markers
                        const cityMarkers = document.getElementsByClassName('cityMarker')

                        for (let j = 0; j < cityMarkers.length; j++) {
                            cityMarkers[i].innerHTML = `<p>${cityFeatures[i].properties.cityName}</p>`

                            cityMarkers[i].addEventListener('click', () => {
                                jumpToCity(map.current, cityFeatures[i].properties.cityCenter, cityFeatures[i].properties.cityName)
                            })


                            map.current.on('zoom', () => {
                                handleZoomCityMarkers(cityMarkers[i], cityFeatures[i], 8.75)
                            })

                            handleZoomCityMarkers(cityMarkers[i], cityFeatures[i], 8.75)

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
