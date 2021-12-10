import React from 'react'

function Track({track}) {
    return (
        <div>
            <img src={track.album.images[1].url} />
            <h4>{track.name}</h4>
            <audio controls>
                <source src={track.preview_url} />
            </audio>
        </div>
    )
}

export default Track