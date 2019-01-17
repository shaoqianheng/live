<template>
  <md-card>
    <md-card-media>
      <div class="item">
        <div class="player">
          <video-player class="vjs-custom-skin"
                        :options="playerOptions"
                        @ready="playerReadied">
          </video-player>
        </div>
      </div>
      <div class="item" v-for="item in logInfo">
        {{item}}
      </div>
    </md-card-media>
  </md-card>
</template>

<script>
  // custom skin css
  // import '../src/custom-theme.css'
  // videojs
  // hls plugin for videojs6
  // export
  export default {
    data() {
      return {
        logInfo: ['默认值'],
        playerOptions: {
          // videojs and plugin options
          height: '360',
          sources: [{
            withCredentials: false,
            type: "application/x-mpegURL",
            src: "https://logos-channel.scaleengine.net/logos-channel/live/biblescreen-ad-free/playlist.m3u8"
          }],
          controlBar: {
            timeDivider: false,
            durationDisplay: false
          },
          flash: { hls: { withCredentials: false }},
          html5: { hls: { withCredentials: false }},
          poster: "https://surmon-china.github.io/vue-quill-editor/static/images/surmon-5.jpg"
        }
      }
    },
    methods: {
      playerReadied(player) {
        var hls = player.tech({ IWillNotUseThisInPlugins: true }).hls
        player.tech_.hls.xhr.beforeRequest = function(options) {
          this.logInfo.push(options);
          return options
        }
      }
    }
  }
</script>
