var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
  // ページ内に id="player" があれば実行
  if( document.getElementById('player') != null ){
    player = new YT.Player('player', {
      height: '360',
      width: '640',
      videoId: 'rquiYrRaPws',
      playerVars: {
        playsinline: 1,
        fs: 0,
        iv_load_policy: 3,
        modestbranding: 1,
        rel: 0,
      },
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      }
    });
  }
}
function onPlayerReady(event) {
  event.target.mute();
  event.target.playVideo();
}
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.ENDED) {
     event.target.playVideo();
  }
}
