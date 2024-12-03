
threeSixty = {
    init: function () {
    this._vr = new AC.VR('viewer', 'images/Frame######.png', [48, 1], {
            invert: false
        let isDragging = false;
let startX = 0;

document.getElementById('viewer').addEventListener("touchstart", (event) => {
    isDragging = true;
    startX = event.touches[0].clientX;
});

document.getElementById('viewer').addEventListener("touchmove", (event) => {
    if (!isDragging) return;

    const deltaX = event.touches[0].clientX - startX;
    startX = event.touches[0].clientX;

    const frameChange = Math.floor(deltaX / 10); // Adjust sensitivity
    if (frameChange !== 0) {
        threeSixty._vr.updateFrame(frameChange); // Ensure `updateFrame` updates the display
    }
});

document.getElementById('viewer').addEventListener("touchend", () => {
    isDragging = false;
        });
    },
    didShow: function() {
        this.init();
    },
    willHide: function() {
        recycleObjectValueForKey(this, "_vr");
    },
    shouldCache: function() {
        return false;
    }
}
if (!window.isLoaded) {
    window.addEventListener("load", function() {
        threeSixty.init();
    }, false);
}
