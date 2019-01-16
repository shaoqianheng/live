<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
}
.video-js {
  width: 375px;
  height: 210.94px;
}
.video-js .vjs-big-play-button {
  background: #000;
  border-radius: 50%;
  height: 3em;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.vjs-icon-play:before,
.video-js .vjs-big-play-button .vjs-icon-placeholder:before,
.video-js .vjs-play-control .vjs-icon-placeholder:before {
  top: 24%;
  font-size: 2.5em;
  color: #fff;
}
</style>
