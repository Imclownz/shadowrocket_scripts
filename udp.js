(function() {
    // UDP traffic optimization
    const originalWS = WebSocket;
    WebSocket = function(url) {
        if (url.includes('game')) {
            return new originalWS(url.replace('wss://', 'ws://'));
        }
        return new originalWS(url);
    };
})();