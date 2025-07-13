(function() {
    // Force 90FPS mode
    const originalRAF = window.requestAnimationFrame;
    window.requestAnimationFrame = function(callback) {
        return originalRAF(function(timestamp) {
            callback(timestamp);
            originalRAF(callback); // Double call for higher FPS
        });
    };

    // Reduce graphics quality
    document.querySelectorAll('*').forEach(el => {
        el.style.transition = 'none !important';
        el.style.animation = 'none !important';
    });
})();