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


export const getTopLeftCoordinates = (currentMap) => {
    let lng = currentMap.getBounds()._sw.lng
    let lat = currentMap.getBounds()._ne.lat

    return [lng, lat]
}

export const getBottomMiddleCoordinates = (currentMap) => {
    let lng = currentMap.getCenter().lng
    let lat = currentMap.getCenter().lat - (currentMap.getBounds()._ne.lat - currentMap.getBounds()._sw.lat) / 4

    return [lng, lat]
}

export const getBottomRightCoordinates = (currentMap) => {
    let lng = currentMap.getBounds()._ne.lng
    let lat = currentMap.getBounds()._sw.lat

    return [lng, lat]
}

export const getCenterCoordinates = (currentMap) => {
    let lng = currentMap.getCenter().lng
    let lat = currentMap.getCenter().lat
    return [lng, lat]
}