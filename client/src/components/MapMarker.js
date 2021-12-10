import React from 'react'

function MapMarker({artist}) {
    return (
        <div id="mapMakerWrapper">
            <img src={artist.picture} stlye={{height : 10, width : 10}}/>
        </div>
    )
}

export default MapMarker