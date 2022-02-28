// import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
// import 'mapbox-gl/dist/mapbox-gl.css';

// import axios from 'axios'

// import { SERVER_URL, CLIENT_URL, MAPBOX_TOKEN } from '../clientVariables'
// import { CITYS } from '../mapboxCityVariables'


 
//  //map props
 

//  const center = [10.172946185256103, 50.70767729701806]
//  const bounds = [
//      [1.5959956864622256, 44.599918543774685],
//      [19.10264276075604, 57.051410713269455]
//  ]

//  const createMap = (map, mapContainer, coords, zoom) => {
//     if (map.current) return;
//     map.current = new mapboxgl.Map({
//         container: mapContainer.current,
//         style: 'mapbox://styles/joostwmd/ckucoygnc51gn18s0xu6mjltv',
//         center: coords,
//         zoom: zoom,
//         minZoom: 4,
//         maxBounds: bounds,
//         attributionControl: false,
//     })

//     return map.current
// }


//  //handel city change with mapbox fly to animation
//  const jumpToCity = async (currentMap, city) => {

//      currentMap.flyTo({
//          center: city[1],
//          speed: 1.25,
//          zoom: 9
//      })
//  }

//  const jumpToArtist = (currentMap, artistCoors) => {

//      currentMap.flyTo({
//          center: artistCoors,
//          speed: 2.25,
//          zoom: 12
//      })
//  }

//  const shuffelArtistsHandler = async (currentMap) => {
//      axios.get(`${SERVER_URL}/dataBase/map`)
//          .then(res => {
//              getRandomArtists(res.data)
//                  .then(artist => {
//                      jumpToArtist(currentMap, artist[0].coordinates)
//                  })

//          })

//  }

//  const getRandomArtists = async (artists) => {
//      let shuffel = Math.floor(Math.random() * (artists.length + 1))
//      let res = await [artists[shuffel]]
//      return res
//  }

//  //change the db artist data into mapboxgl format
//  const artitsFeatures = []
//  const artistToFeatures = (artists) => {
//      for (let artist of artists) {
//          const feature = {
//              'type': 'feature',

//              'properties': {
//                  'artistName': artist.name,
//                  'artistPicture': artist.picture,
//                  'artistDatabaseId': artist._id,
//                  'artistSpotifyId': artist.spotifyID,
//                  'city': artist.city
//              },

//              'geometry': {
//                  'type': 'Point',
//                  'coordinates': artist.coordinates
//              }
//          }
//          artitsFeatures.push(feature)
//      }
//  }

//  const cityFeatures = []
//  const citysToFeatures = (citys) => {
//      for (let city of citys) {
//          const feature = {
//              'type': 'feature',

//              'properties': {
//                  'cityName': city[0],
//                  'cityCenter': city[1],
//                  'cityMarkerSize': city[2]
//              },

//              'geometry': {
//                  'type': 'Point',
//                  'coordinates': city[1],
//              }
//          }
//          cityFeatures.push(feature)
//      }
//  }


// const handleZoomArtistMarkers = (currrentMap, marker, markerProps, initialZoom) => {
//     let markerSize = (Number((currrentMap.getZoom()) - initialZoom) * 8) + 22
//     let nameSize = (Number((currrentMap.getZoom()) - initialZoom) * 4) + 5

//     if (Number((currrentMap.getZoom() > 7))) {
//         marker.style.visibility = 'visible'
//         marker.style.height = `${markerSize}px`
//         marker.style.width = `${markerSize}px`
//         marker.innerHTML = `<p style='font-size:${nameSize}px'>${markerProps.properties.artistName}</p>`
//     }

//     if (Number((currrentMap.getZoom() <= 7))) {
//         marker.style.visibility = 'hidden'
//         marker.innerHTML = ''
//     }
// }

// const handleZoomCityMarkers = (currrentMap, marker, markerProps, initialZoom) => {
//     let markerSize = (markerProps.properties.cityMarkerSize / 10000) + 100 + (Number(currrentMap.current.getZoom() - initialZoom) * 12.5)
//     let nameSize = 40 + (Number(currrentMap.getZoom() - initialZoom) * 5)

//     if (Number((currrentMap.getZoom() > 7))) {
//         marker.style.visibility = 'hidden'
//     }

//     if (Number((currrentMap.getZoom() <= 7))) {
//         marker.style.visibility = 'visible'
//         marker.style.height = `${markerSize}px`
//         marker.style.width = `${markerSize}px`
//         marker.innerHTML = `<p style='font-size:${nameSize}px'>${markerProps.properties.cityName}</p>`
//     }
// }

// const handleZoomRandomArtistMarker = (currentMap) => {
//     const marker = document.getElementById('randomArtistButton')
//     if (Number((currentMap.getZoom() > 5.25))) {
//         marker.style.visibility = 'hidden'
//     }

//     if (Number((currentMap.getZoom() <= 5.25))) {
//         marker.style.visibility = 'visible'
//     }
// }

// const redirectToHomepage = () => {
//     window.location.href = `${CLIENT_URL}/`
// }
// const createHomeButton = (currentMap) => {
//     const homeButton = document.createElement('div')
//     homeButton.className = 'homeButton'
//     homeButton.innerHTML = '<p className="textInHomeButton">home</p>'
//     homeButton.addEventListener('click', () => {
//         redirectToHomepage()
//     })
//     return new mapboxgl.Marker(homeButton).setLngLat(getTopLeftCoordinates(currentMap)).addTo(currentMap)
// }

// const getTopLeftCoordinates = (currentMap) => {
//     let lng = currentMap.getBounds()._sw.lng
//     let lat = currentMap.getBounds()._ne.lat

//     return [lng, lat]
// }


// const createRandomArtistButton = (currentMap, artists) => {
//     const randomArtistButton = document.createElement('div')
//     randomArtistButton.id = 'randomArtistButton'
//     randomArtistButton.innerHTML = '<p className="textInRandomArtistButton">shuffle</p>'
//     randomArtistButton.addEventListener('click', () => {
//         shuffelArtistsHandler(currentMap, artists)
//     })
//     return new mapboxgl.Marker(randomArtistButton).setLngLat(getTopLeftCoordinates(currentMap)).addTo(currentMap)
// }

// const getBottomMiddleCoordinates = (currentMap) => {
//     let lng = currentMap.getCenter().lng
//     let lat = currentMap.getCenter().lat - (currentMap.getBounds()._ne.lat - currentMap.getBounds()._sw.lat) / 4 

//     return [lng, lat]
// }