document.getElementById("titleLink").addEventListener("click", function() {
    var audio = document.getElementById("voiceMessage");
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
        audio.currentTime = 0;
    }
});