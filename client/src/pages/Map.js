import React from 'react'
import { useState, useEffect, useRef } from 'react'
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
    const [lng, setLng] = useState(13.404954);
    const [lat, setLat] = useState(52.520008);
    const [zoom, setZoom] = useState(9);
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
            center: [lng, lat],
            zoom: zoom,
            //ADJUST
            // maxBounds : [[13.192625881080286, 52.38949809002746], [13.659758765765956, 52.64256574061617]]
        })

        //update viewport when interactiong with map
        if (!map.current) return; // wait for map to initialize
        map.current.on('move', () => {
            setLng(map.current.getCenter().lng.toFixed(4));
            setLat(map.current.getCenter().lat.toFixed(4));
            setZoom(map.current.getZoom().toFixed(2))
        });

        //load artist data in mapbox format onto the map object
        map.current.on('load', () => {
            map.current.addSource('artists', {
                'type' : 'geojson', 
                'data' : {
                    'type' : 'FeatureCollection', 
                    'features' : features
                }
            })

        //create a marker for each artists (feature) object
        for (let i = 0; i < features.length; i++){
            //create divs
            const el = document.createElement('div')
            el.className = 'marker'

            //add the divs to mapboxgl marker 
            new mapboxgl.Marker(el).setLngLat(features[i].geometry.coordinates).addTo(map.current)
                    
            //create array for all markers
            const markers = document.getElementsByClassName('marker')
                
                //add functionality and design  
                for (let i = 0; i < markers.length; i++){
                    markers[i].addEventListener('click', () => {
                        sendArtistIds(features[i].properties.artistDatabaseId, features[i].properties.artistSpotifyId)
                        redirectToArtistProfilePage(features[i].properties.artistName)
                    })
                    markers[i].style.backgroundImage = `url(${features[i].properties.artistPicture})`
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
