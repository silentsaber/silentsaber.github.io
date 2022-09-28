<template>
    <div id="navbar">
      <i class="el-icon-menu" id="menuicon" @click="Showmenu()" style="font-size: 6vh;color:#fff;float:right;"></i>
    <div v-show="whatmode=='vertical'&&showmenu" style="z-index:1999;background:rgb(0,0,0,0.6);width:100vw;height:100vh;position:fixed;top:0;left:0"></div>
        <el-menu v-show="showmenu || whatmode=='horizontal'" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" v-bind:router="true" router
        background-color="#545c64"
        text-color="#fff"
        style="width:100%;"
        active-text-color="#ffF">
          <div id="nav_title" v-show="whatmode=='horizontal'">Silentsaber</div>
          <div v-show="whatmode!='horizontal'" class="cx" style="position:relative;font-size:30px;" @click="Showmenu()"><i class="el-icon-circle-close"></i></div>
          <el-menu-item index="/">index</el-menu-item>    
          <el-menu-item index="/profile">profile</el-menu-item>   
          <div id="spilt"></div>
        </el-menu> 
    </div>
</template>

<script>
export default {
    name: "navbar",
    data(){
      return {
        activeIndex: this.$route.path,
        showmenu:true,
        whatmode:"horizontal",
      }
    },
    watch:{
        $route(to,from){
            console.log(from);
            console.log(to);
            this.activeIndex=to.path;
            this.showmenu=false;
        },
    },
    methods:{
      Showmenu()
        {
          this.showmenu=!this.showmenu;
        },
    },
    mounted()
    {
      var width = document.body.clientWidth;//window.screen.width;
      console.log(width);
      if(width<720)
      {
        this.showmenu=false;
        this.whatmode="vertical";     
      }
      else
      {
        // this.showmenu=false;
        this.whatmode="horizontal"; 
      }
      window.onresize = () => {
        return (() => {
          var width = document.body.clientWidth;//window.screen.width;
          console.log(width);
          if(width<720)
          {
            this.showmenu=false;
            this.whatmode="vertical";     
          }
          else
          {
            // this.showmenu=false;
            this.whatmode="horizontal"; 
          }
        })()
      }
    }
}
</script>

<style>
#menuicon
{
  display: none;
}
#navbar
{
  position: relative;
  /* margin-bottom:20px; */
  height: 60px;
  width: 100vw;
  z-index: 1000;
  font-family:'Times New Roman', Times, serif;
  background: black;
}
.cx
{
  background:#545c64; 
  color:#fff;
  outline: none;margin-right:100px;border:0px;float:left;height:60px;line-height:60px;margin-left:50px;
  font-size:30px;
  background: linear-gradient(to right,#f64f59,#12c2e9, #c471ed, #f64f59,#12c2e9, #c471ed, #f64f59);
  /* #409EFF,white,#F64F59,white,#409EFF,white,#F64F59, white,#409EFF,white,#F64F59,white,#F64F59,white,#409EFF); */
  color: transparent;
  -webkit-background-clip: text;
  animation: masked-animation 120s linear infinite ;
  font-family:Cinder;
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
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
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
.el-menu-demo .el-menu-item.is-active
{
  background-color: #909399 !important;
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
  height:2px;
  width:100vw;
  background: #F2F6FC;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to left, #F2F6FC, #EBEEF5);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to left, #F2F6FC, #EBEEF5) /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
@media (max-width:720px) {
     #navbar .el-menu {
        position: fixed;
        height: 100vh;
        right:0;
        width: 40vw!important;
        z-index: 2000;
        border: none;
    }
    #navbar .el-menu-item {
      font-size:3vh;
      padding-top:0px; 
      height:8vh;
      width:100%;
      text-align: left;
    }
    #navbar
    {
       display: block;
        width: 100%;
        position: fixed;
        top: 0;
        z-index: 2010;
        background-color: #545c64;
        border-bottom: solid 1px #fefefe;
    }
    .cx
    {
      color:white;
      z-index:9999;
      float:none;
    }
    #menuicon
    {
      display: block;
      position: absolute;
      height: 60px;
      line-height: 60px;
      right:6vw;
      color:white;
      z-index: 1011;
    }
}
</style>