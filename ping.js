(function() {
    // Fake network latency
    const originalFetch = window.fetch;
    window.fetch = function(url, options) {
        if (url.includes('game-api')) {
            return new Promise(resolve => {
                setTimeout(() => {
                    originalFetch(url, options).then(resolve);
                }, 30); // Fake low ping
            });
        }
        return originalFetch(url, options);
    };
})();