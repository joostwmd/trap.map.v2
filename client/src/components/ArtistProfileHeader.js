function ArtistProfileHeader({artistName, artistPicture, releasedMusic, links}) {
    return (
        <div id="artistProfileHeader">
            <h1>{artistName}</h1>
            <img src={artistPicture} />
            <h4>{releasedMusic}</h4>

            <a href={links.spotify}>spotify</a>
            <a href={links.youtube}>youtube</a>
            <a href={links.instagram}>insta</a>
        </div>
    )
}

export default ArtistProfileHeader