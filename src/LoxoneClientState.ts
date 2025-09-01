enum LoxoneClientState {
    disconnected,
    disconnecting,
    connecting,
    connected,
    authenticating,
    authenticated,
    reconnecting,
    error
}

export default LoxoneClientState;