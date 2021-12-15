import React from 'react'

function MapMarker({artist}) {
    return (
        <div>
            <img 
                alt="mapmarker" 
                src={artist.picture} 
                style={{
                width : 42 ,
                height : 42 ,
                borderRadius : 90
                }}
            />
        </div>
    )
}

export default MapMarker