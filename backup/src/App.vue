<template>
  <div id="app">
    <el-scrollbar class="default-scrollbar" wrap-class="default-scrollbar__wrap" view-class="p20-scrollbar__view">
    <navbar></navbar>
    <router-view/>
    <foot></foot>
    </el-scrollbar>
  </div>
</template>

<script>
import navbar from './components/navbar'
import foot from './components/foot'
export default {
  name: 'App',
  components:{navbar, foot}
}
</script>

<style>
.default-scrollbar {
  width: 100%;
  height: 100%;
}
.flex-scrollbar {
  width: auto;
  height: auto;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
}
.el-scrollbar__wrap.default-scrollbar__wrap {
  overflow-x: hidden;
}
.el-scrollbar__view.default-scrollbar__view {}
.el-scrollbar__view.p20-scrollbar__view {
  padding: 0px;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -o-box-sizing: border-box;
  -ms-box-sizing: border-box;
}
html,body{
  height:100%;
  width:100%;
  overflow: hidden;
  padding: 0;
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height:100%;
  background-image: url('../static/imgs/bgblock.jpg');
}
</style>
