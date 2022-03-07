function connectionsButton({ hasConnections }) {
    if (hasConnections === false) {
        return (
            //<div />
            <div
                className='noConnectionsButton'
            >
                <h1 className='noConnectionsButtonText'>
                    no connections
                </h1>
            </div>
        )
    } else if (hasConnections === true) {
        return (
            <div
                className='connectionsButton'
            >
                <h1 className='connectionsButtonText'>
                    connections
                </h1>
            </div>
        )
    }
}

export default connectionsButton
