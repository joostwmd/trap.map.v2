import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import ReactMapGl, {Marker} from "react-map-gl"

//components
import MapMarker from '../components/MapMarker'



//deployment bug fix
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';
// eslint-disable-next-line import/no-webpack-loader-syntax
import MapboxWorker from 'worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker';
mapboxgl.workerClass = MapboxWorker




function Map() {

    const berlinViewport = {
        latitude : 52.520008, 
        longitude : 13.404954,
        width : "100w",
        height : "100vh",
        zoom : 9,
        minZoom : 9,
        berlinBounds : [[13.192625881080286, 52.38949809002746], [13.659758765765956, 52.64256574061617]]
    }


    const isOutOfMaxBounds = (latitude, longitude, maxBounds) => {
        const [[swLng, swLat], [neLng, neLat]] = maxBounds;
    
        return longitude < swLng || longitude > neLng || latitude < swLat || latitude > neLat;
    };



    
    const [viewport, setViewport] = useState(berlinViewport)
    const [allArtists, setAllArtists] = useState([])
    //const API_URL = process.env.API_URL
    //const API_URL = 'http://localhost:5005'
    const API_URL = 'https://trapmapversion2.herokuapp.com'



    let size = 40

    useEffect(() => {
        axios.get(`${API_URL}/dataBase/map`)
            .then(res => {
                console.log("all artists", res.data)
                setAllArtists(res.data)
                // => spotify name and picture already in db
            })

        
    }, [])


    return (
    <div>
        <ReactMapGl
            {...viewport}
            mapboxApiAccessToken = "pk.eyJ1Ijoiam9vc3R3bWQiLCJhIjoiY2t1NDQ3NmJqMXRwbzJwcGM5a3FuY3B3dCJ9.yyon_mO5Y9sI1WgD-XFDRQ"
            mapStyle = "mapbox://styles/joostwmd/ckvwifepf21kj15pflu8gbkdd"

            onViewportChange={newViewport => {
                if (!isOutOfMaxBounds(
                    newViewport.latitude,
                    newViewport.longitude,
                    berlinViewport.berlinBounds
                ))
                {
                    setViewport(newViewport)
                }
            }}
        >   
            {allArtists.map(artist => {
                return (
                    <Marker
                        latitude={artist.coordinates[1]}
                        longitude={artist.coordinates[0]}

                    >
                        <div style={{ transform: `translate(${-size / 2}px,${-size}px)` }}>
                            <Link to={`${artist._id}`}>
                                <MapMarker artist={artist} />
                            </Link>
                        </div>
                    </Marker>
            )})}
        </ReactMapGl>
    </div>
    )
}

export default Map