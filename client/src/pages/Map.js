import React from 'react'
import { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import Nav from '../components/Nav';

import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import 'mapbox-gl/dist/mapbox-gl.css';

import { SERVER_URL, CLIENT_URL, MAPBOX_TOKEN } from '../clientVariables'
import { CITYS } from '../mapboxCityVariables'


function Map() {

    //map props
    mapboxgl.accessToken = MAPBOX_TOKEN
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [currentMap, setCurrentMap] = useState()
    const [currentCity, setCurrentCity] = useState('')
    const berlinCenter = [13.404954, 52.520008]


    //nav
    const [endOfNav, setEndOfNav] = useState(Number)

    //handel city change with mapbox fly to animation
    const jumpToCity = async (currentMap, city) => {

        currentMap.flyTo({
            center: city[1],
            speed: 1.25,
            zoom: 9
        })
        setCurrentCity(city[0])
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
        window.location.href = `${CLIENT_URL}/VPcpfJADsmwQqmurzmhr/:${artistDatabaseId}:${artistSpotifyId}`

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

        let markerSize = (markerProps.properties.cityMarkerSize / 10000) + 100 + (Number(map.current.getZoom() - initialZoom) * 12.5)
        let nameSize = 40 + (Number(map.current.getZoom() - initialZoom) * 5)

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

    const getHeightOfNav = (el) => {
        setEndOfNav(el.getBoundingClientRect().height)
    }

    const preventScrollDown = () => {
        if (window.scrollY > 25){
            console.log(window.scrollY - 25, endOfNav)
            // if (window.scrollY >= endOfNav){
            //     window.scrollTo({ top: 0, behavior : 'smooth' })
            // }
        }
    }

    document.addEventListener('scroll', () => {
        preventScrollDown()
    })

    useEffect(() => {

        const nav = document.getElementById('mapNav')
        new ResizeObserver(() => getHeightOfNav(nav)).observe(nav);

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
                                jumpToCity(map.current, [cityFeatures[i].properties.cityName, cityFeatures[i].properties.cityCenter])
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
            <div id='mapNav'>
                <Nav currentMap={currentMap} currentCity={currentCity} jumpToCity={jumpToCity} />
            </div>

            <div ref={mapContainer} className="map-container" />
        </div>
    )

}
export default Map
