import React from 'react'
import { useEffect, useRef } from 'react'
import axios from 'axios'

import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import 'mapbox-gl/dist/mapbox-gl.css';

function Map() {

    // const API_URL = 'https://trapmapversion2.herokuapp.com'
    // const CLIENT_URL = 'https://trapmapversion2.herokuapp.com'
    
    //for development
    const CLIENT_URL = 'http://localhost:3000'
    const API_URL = 'http://localhost:5005'
    
    
    //map props
    const mapContainer = useRef(null);
    const map = useRef(null);
    const berlinCenter = [13.404954, 52.520008]
    const berlinBounds = [
        [12.75, 52.25],
        [14, 52.75]
    ]

    mapboxgl.accessToken = "pk.eyJ1Ijoiam9vc3R3bWQiLCJhIjoiY2t1NDQ3NmJqMXRwbzJwcGM5a3FuY3B3dCJ9.yyon_mO5Y9sI1WgD-XFDRQ"


    //change the db artist data into mapboxgl format
    const features = []
    const artistToFeatures = (artists) => {
        for (let artist of artists){
            const feature = {
                'type' : 'feature',

                'properties' : {
                    'artistName' : artist.name,
                    'artistPicture' : artist.picture, 
                    'artistDatabaseId' : artist._id,
                    'artistSpotifyId' : artist.spotifyID
                },

                'geometry' : {
                    'type' : 'Point',
                    'coordinates' : artist.coordinates
                }
            }        
            features.push(feature)
        }
    }

    //build redirect url
    const redirectToArtistProfilePage = (artistName, artistDatabaseId, artistSpotifyId) => {
        window.location.href = `${CLIENT_URL}/map/${artistName}:${artistDatabaseId}:${artistSpotifyId}`
        
    }

    useEffect(() => {

       
        //get all artist data form db
        axios.get(`${API_URL}/dataBase/map`)
        .then(res => {
            //change data into mapboxgl format with function
            artistToFeatures(res.data)
        })

    
        //create the map object
        if (map.current) return; // initialize map only once
            map.current = new mapboxgl.Map({        
            container: mapContainer.current,
            style: 'mapbox://styles/joostwmd/ckucoygnc51gn18s0xu6mjltv', 
            center: berlinCenter,
            zoom: 8.5,
            minZoom : 8.5,
            maxBounds : berlinBounds
        })

        //load artist data in mapbox format onto the map object
        map.current.on('load', () => {
            map.current.addSource('artists', {
                'type' : 'geojson', 
                'data' : {
                    'type' : 'FeatureCollection', 
                    'features' : features
                }
            })


        //create a marker(img) for each artists (feature) object
        for (let i = 0; i < features.length; i++){
            //create divs
            const marker = document.createElement('div')
            marker.className = 'marker'

            //add the divs to mapboxgl marker 
            new mapboxgl.Marker(marker).setLngLat(features[i].geometry.coordinates).addTo(map.current)
            
            //create array for all markers
            const markers = document.getElementsByClassName('marker')
            
                //add functionality and design (src for marker img and scaleControl)  
                for (let i = 0; i < markers.length; i++){
                    markers[i].addEventListener('click', () => {
                        redirectToArtistProfilePage(features[i].properties.artistName, features[i].properties.artistDatabaseId, features[i].properties.artistSpotifyId)
                    })
                
                    //add url to background img
                    markers[i].style.backgroundImage = `url(${features[i].properties.artistPicture})`

                    //artistName
                    markers[i].innerHTML = `<p className="artistNameInMarker">${features[i].properties.artistName}</p>`
                    
                    //resize markers in zoom
                    map.current.on('zoom', () => {
                        const initialZoom = 9.255562090280671 //even if zoom is set to 8.5???

                        let markerSize = (Number((map.current.getZoom()) - initialZoom) * 15) + 30
                        markers[i].style.height = `${markerSize}px`
                        markers[i].style.width = `${markerSize}px`

                        let nameSize = ((Number((map.current.getZoom()) - initialZoom) * 5) + 10) 
                        markers[i].innerHTML = `<p className="artistNameInMarker" style='font-size:${nameSize}px'>${features[i].properties.artistName}</p>`
                    })
                }
            }
        })   
}, [])

    



    return (
        <div>
          <div ref={mapContainer} className="map-container" />
        </div>
    )
}

export default Map
