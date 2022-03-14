export const disableMapInteractions = (currentMap) => {
    currentMap.boxZoom.disable();
    currentMap.doubleClickZoom.disable();
    currentMap.dragPan.disable();
    currentMap.dragRotate.disable();
    currentMap.keyboard.disable();
    currentMap.scrollZoom.disable();
    currentMap.touchZoomRotate.disable();
}

export const enableMapInteractions = (currentMap) => {
    currentMap.boxZoom.enable();
    currentMap.doubleClickZoom.enable();
    currentMap.dragPan.enable();
    currentMap.dragRotate.enable();
    currentMap.keyboard.enable();
    currentMap.scrollZoom.enable();
    currentMap.touchZoomRotate.enable();
}


export const getCenterCoordinates = (currentMap) => {
    let lng = currentMap.getCenter().lng
    let lat = currentMap.getCenter().lat
    return [lng, lat]
}



export const getHomeButtonCoordinates = (currentMap) => {
    let lng = currentMap.getBounds()._sw.lng
    let lat = currentMap.getBounds()._ne.lat
    return [lng, lat]
}



export const getOpenFilterMenuButtonCoordinares = (currentMap) => {
    let lng = currentMap.getBounds()._ne.lng
    let lat = currentMap.getBounds()._sw.lat
    return [lng, lat]
}

export const getShuffleArtistsButtonCoordinates = (currentMap) => {
    let lng = currentMap.getBounds()._ne.lng
    let lat = currentMap.getBounds()._sw.lat
    return [lng ,lat]
}

export const getCloseConnectionsButtonCoordinates = (currentMap) => {
    let lng = currentMap.getBounds()._ne.lng
    let lat = currentMap.getBounds()._sw.lat
    return [lng, lat]
}

export const hideAllButtons = () => {
    const buttons = [
        document.getElementsByClassName('homeButton')[0],
        document.getElementsByClassName('shuffleArtistButton')[0],
        document.getElementsByClassName('openFilterMenuButton')[0],
    ]

    for (let button of buttons) {
        button.style.visibility = 'hidden'
    }
}


export const showAllButtons = () => {
    const buttons = [
        document.getElementsByClassName('homeButton')[0],
        document.getElementsByClassName('shuffleArtistButton')[0],
        document.getElementsByClassName('openFilterMenuButton')[0],
    ]

    for (let button of buttons) {
        button.style.visibility = 'visible'
    }

}