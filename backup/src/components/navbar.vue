<template>
    <div id="navbar">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" 
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffF">
          <div id="nav_title">Silentsaber</div>
          <el-menu-item index="1">index</el-menu-item>    
          <div id="spilt"></div>
        </el-menu> 
    </div>
</template>

<script>
export default {
    name: "navbar",
    data(){
      return {
        activeIndex: '1',
      }
    }
}
</script>

<style>
#navbar
{
  position: relative;
  margin-bottom:20px;
  height: 60px;
  width: 100vw;
  z-index: 1000;
  font-family:Comic Sans MS;
  background: black;
}
#nav_title{
  position: relative;
  float: left;
  width: 200px;
  height: 60px;
  text-align: center;
  line-height: 60px;
  font-size:24px;
  color: white;
  animation: neon2 1.5s ease-in-out infinite alternate;
}
.el-menu-demo{
  position: relative;
  width: 100%;
  height: 60px;
}
.el-menu-demo .el-menu-item
{
  /* left:200px; */
  font-size: 20px;
}
@keyframes neon2 {
    from {
      
      backgroud-position: 0 0;
      text-shadow: 0 0 10px #fff,
                0 0 20px  #fff,
                0 0 30px  #fff,
                0 0 40px  #228DFF,
                0 0 70px  #228DFF,
                0 0 80px  #228DFF,
                0 0 100px #228DFF,
                0 0 150px #228DFF;
    }
    to {
      background-position: 2000px 0;
      text-shadow: 0 0 5px #fff,
                0 0 10px #fff,
                0 0 15px #fff,
                0 0 20px #228DFF,
                0 0 35px #228DFF,
                0 0 40px #228DFF,
                0 0 50px #228DFF,
                0 0 75px #228DFF;
    }
  } 
#spilt{
  position: absolute;
  bottom:0;
  height:5px;
  width:100vw;
  background: #00C9FF;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to left, #92FE9D, #00C9FF);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to left, #92FE9D, #00C9FF); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
</style>