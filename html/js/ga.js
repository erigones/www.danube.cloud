      // generic GA

      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

      ga('create', 'UA-87330218-1', 'auto');
      ga('send', 'pageview');

      var ua = navigator.userAgent || navigator.vendor || window.opera;

      if ((ua.indexOf('FBAN') > -1) || (ua.indexOf('FBAV') > -1)) {
        document.getElementById('menu').style.display = 'none';
      }

      
      // YouTube player tracking

      var tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      var player;
      function onYouTubeIframeAPIReady() {
          player = new YT.Player('youTubePlayer', {
              videoId: 'fprs7b_tOlw',
              height: '315',
              width: '560',
              playerVars: {'rel': 0, 'showinfo': 0},
              events: {
                  'onReady': onPlayerReady,
                  'onStateChange': onPlayerStateChange
              }
          });
      }

      function onPlayerReady(event) {
          //event.target.playVideo();
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

      // Outbound clicks
    
    var trackOutboundLink = function(url) {
        ga('send', 'event', 'outbound', 'click', url, {
            'transport': 'beacon',
            'hitCallback': function(){document.location = url;}
        });
    }