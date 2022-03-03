import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import 'mapbox-gl/dist/mapbox-gl.css';

const jumpToCity = async (currentMap, cityCenter) => {
    currentMap.flyTo({
        center: cityCenter,
        speed: 1.25,
        zoom: 9.5
    })
}

const handleZoomCityMarkers = (currentMap, marker, markerProps, initialZoom) => {
    let size = 0
    if (markerProps.properties.cityMarkerSize === 'sm'){
        size += 25
    } else if (markerProps.properties.cityMarkerSize === 'md'){
        size += 50
    } else if (markerProps.properties.cityMarkerSize === 'lg'){
        size += 75
    }

    let markerSize = size + (Number(currentMap.getZoom()) - initialZoom)
    
    if (Number(currentMap.getZoom() > 9)) {
        marker.style.visibility = 'hidden'
    }

    if (Number(currentMap.getZoom() <= 9)) {
        marker.style.visibility = 'visible'
        marker.style.height = `${markerSize}px`
        marker.style.width = `${markerSize}px`
    }
}

export const citysToFeatures = (citys, cityArr) => {
    for (let city of citys) {
        const feature = {
            'type': 'feature',

            'properties': {
                'cityName': city.name,
                'cityCenter': city.center,
                'cityMarkerSize': city.size
            },

            'geometry': {
                'type': 'Point',
                'coordinates': city.center
            }
        }
        cityArr.push(feature)
    }
}


export const loadCityMarker = (currentMap, cityArr) => {
    currentMap.addSource('citys', {
        'type': 'geojson',
        'data': {
            'type': 'FeatureCollection',
            'features': cityArr
        }
    })

    for (let i = 0; i < cityArr.length; i++) {
        const marker = document.createElement('div')
        marker.className = 'cityMarker'

        new mapboxgl.Marker(marker).setLngLat(cityArr[i].geometry.coordinates).addTo(currentMap)

        const cityMarkers = document.getElementsByClassName('cityMarker')

        for (let j = 0; j < cityMarkers.length; j++) {
            //cityMarkers[i].innerHTML = `<p>${cityFeatures[i].properties.cityName}</p>`

            cityMarkers[i].addEventListener('click', () => {
                jumpToCity(currentMap, cityArr[i].properties.cityCenter)
            })


            currentMap.on('zoom', () => {
                handleZoomCityMarkers(currentMap, cityMarkers[i], cityArr[i], 8.75)
            })

            handleZoomCityMarkers(currentMap, cityMarkers[i], cityArr[i], 8.75)
        }
    }
}
