<template>
  <div id="app">
    <Header/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
export default {
  name: "App",

  components:{
    Footer,
    Header
  }

};
</script>

<style scoped>

  @import "res/css/global.css";
  @import "res/layui/css/layui.css";

/*#app {
  !* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; *!
  width:100%;
  hight:100%;
  background:#f5f5f5
}*/
</style>
