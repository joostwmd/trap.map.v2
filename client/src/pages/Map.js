import React from 'react'
import { useEffect, useRef } from 'react'
import axios from 'axios'


import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax


function Map() {

    const API_URL = 'https://trapmapversion2.herokuapp.com'
    const CLIENT_URL = 'https://trapmapversion2.herokuapp.com'
    
    //for development
    //const CLIENT_URL = 'http://localhost:3000'
    
    
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


    //create function that enables the marker onClick function
    //to send ids to the following page

    const sendArtistIds = (artistDatabaseId, artistSpotifyId) => {

        if (typeof(Storage) !== "undefined") {
            localStorage.setItem('artistIds', `${artistSpotifyId}:${artistDatabaseId}`);
        } else {
            // Sorry! No Web Storage support..
        }
    }   

    //build redirect url
    const redirectToArtistProfilePage = (artistName) => {
        window.location.href = `${CLIENT_URL}/map/${artistName}`
        
    }

    useEffect(() => {

        //get all artist data form db
        axios.get(`${API_URL}/dataBase/map`)
            .then(res => {
                //chnage data into mapboxgl format with function
                artistToFeatures(res.data)
            })

        
        //create the map object
        if (map.current) return; // initialize map only once
            map.current = new mapboxgl.Map({        
            container: mapContainer.current,
            style: 'mapbox://styles/joostwmd/ckvwifepf21kj15pflu8gbkdd',
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
            const el = document.createElement('img')
            el.className = 'marker'

            //add the divs to mapboxgl marker 
            new mapboxgl.Marker(el).setLngLat(features[i].geometry.coordinates).addTo(map.current)
                    
            //create array for all markers
            const markers = document.getElementsByClassName('marker')
                
                //add functionality and design (src for marker img and scaleControl)  
                for (let i = 0; i < markers.length; i++){
                    markers[i].addEventListener('click', () => {
                        sendArtistIds(features[i].properties.artistDatabaseId, features[i].properties.artistSpotifyId)
                        redirectToArtistProfilePage(features[i].properties.artistName)
                    })
                    //add image src
                    markers[i].setAttribute('src', `${features[i].properties.artistPicture}`)
                    

                    //resize markers in zoom
                    map.current.on('zoom', () => {
                        const initialZoom = 9.255562090280671 //even if zoom is set to 8.5???
                        let size = (Number((map.current.getZoom()) - initialZoom) * 10) + 30
                        markers[i].style.height = `${size}px`
                        markers[i].style.width = `${size}px`
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
