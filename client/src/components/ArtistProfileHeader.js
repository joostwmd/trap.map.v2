import React from 'react'

function ArtistProfileHeader({artistName, artistPicture, releasedMusic}) {
    return (
        <div className="artistProfileHeader">
            <img src={artistPicture} alt="artist profile" />
            <div className="artistNameAndReleasedMusic">
                <h1>{artistName}</h1>
                <h4>{releasedMusic}</h4>
            </div>
        </div>
    )
}

export default ArtistProfileHeader

