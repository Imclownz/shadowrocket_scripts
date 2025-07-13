class HeadshotAssistant {
    constructor() {
        this.successRate = 0.85;
        document.addEventListener('mousedown', this.onShoot.bind(this));
    }

    onShoot(e) {
        if (e.button === 0) { // Left click
            if (Math.random() < this.successRate) {
                this.adjustToHead();
            }
        }
    }

    adjustToHead() {
        // Micro-adjustment for headshot
        const adjustment = {
            x: Math.random() * 2 - 1,
            y: -15 + (Math.random() * 5)
        };
        
        const event = new MouseEvent('mousemove', {
            bubbles: true,
            clientX: adjustment.x,
            clientY: adjustment.y
        });
        document.dispatchEvent(event);
    }
}

new HeadshotAssistant();