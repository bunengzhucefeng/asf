<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div id="container">
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  mounted(){
    let that = this
    that.fn_resize()
  },
  methods: {
    fn_resize() {
      // var device_width = document.documentElement.clientWidth || window.innerWidth;
      var device_width = $('#container').width()
      var device_height = device_width / 7680 * 3240
      $('#container').height(device_height)

      // let font_size = device_height / 1620 * 18

      // let html = document.getElementsByTagName('html')[0]
      // html.style.font_size = font_size + 'px'
    },
  }
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  // background-color: blue;
  #container {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    // background-color: red;
  }
}
</style>
