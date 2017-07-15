// YouTube player tracking
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('yt-about', {
        videoId: 'fprs7b_tOlw',
        height: '100%',
        width: '100%',
        playerVars: {'rel': 0, 'showinfo': 0},
        events: {
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerStateChange(event) {
    // track when user clicks to Play
    if (event.data == YT.PlayerState.PLAYING) {
        ga('send', 'event', 'Videos', 'Play', 'Danube Cloud Introduction');
    }

    // track when user clicks to Pause
    if (event.data == YT.PlayerState.PAUSED) {
        ga('send', 'event', 'Videos', 'Pause', 'Danube Cloud Introduction');
    }

    // track when video ends
    if (event.data == YT.PlayerState.ENDED) {
        ga('send', 'event', 'Videos', 'Finished', 'Danube Cloud Introduction');
    }
}


