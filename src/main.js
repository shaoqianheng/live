// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueVideoPlayer from 'vue-video-player'
import 'videojs-contrib-hls'

import 'video.js/dist/video-js.css'

Vue.config.productionTip = false

let VConsole = require('vconsole');

var vConsole = new VConsole();

Vue.use(VueVideoPlayer)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
