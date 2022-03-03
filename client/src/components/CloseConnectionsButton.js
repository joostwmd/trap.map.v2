import { handleRemoveConnectionsClick } from '../mapboxApi/artistConnectionsLayer'


function CloseConnectionsButton({currentMap, marker}) {
    return (
        <div>
            <button
                onClick={() => {handleRemoveConnectionsClick(currentMap, marker)}}
            >
                close
            </button>
        </div>
    )
}

export default CloseConnectionsButton
