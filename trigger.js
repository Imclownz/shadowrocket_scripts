class TriggerBot {
    constructor() {
        this.reactionTime = 100 + Math.random() * 50; // Human-like delay
        this.accuracy = 0.92;
        document.addEventListener('mousemove', this.onAim.bind(this));
    }

    onAim(e) {
        const target = this.detectTarget();
        if (target && Math.random() < this.accuracy) {
            setTimeout(() => {
                this.autoShoot();
            }, this.reactionTime);
        }
    }

    autoShoot() {
        const event = new MouseEvent('mousedown', {
            bubbles: true,
            button: 0
        });
        document.dispatchEvent(event);
        
        setTimeout(() => {
            document.dispatchEvent(new MouseEvent('mouseup'));
        }, 50);
    }
}

new TriggerBot();