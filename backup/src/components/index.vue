<template>
  <div id="index">
    <el-card class="whole_box" shadow="always" :body-style="{ padding: '0px', height:'100%', display:'flex'}">
          <div class="box_left"> 
            <el-avatar  :size="150" fit="cover" :src="imgurl" class="myimg"></el-avatar>
            <p class="box_name">Rui Zeng</p>
            <p>Ph.D candidate</p>
            <p>major in DL4com</p>
            <p>web development enthusiast</p>
            <el-button type="text" style="padding:0px;color:white;min-width: 160px;font-size: 16px;text-align: center;"><i class="el-icon-message" style=""></i>&nbsp;zeng_r17@163.com</el-button>
          </div>
            <div class="box_right">
            <el-card class="show_box" shadow="never" :body-style="{paddingTop:'0px', paddingBottom:'0px',height:'100%', color:'black'}" style="height:100%;">
              <el-scrollbar class="default-scrollbar" wrap-class="default-scrollbar__wrap" view-class="p20-scrollbar__view">
              <el-collapse >
                <div style="height:20px;"></div>
                <el-collapse-item title="教育背景"> 
                    <div><i class="el-icon-check"></i> 2017 年 8 月-2021 年 7月 清华大学 本科 电子工程系</div>
                    <div><i class="el-icon-check"></i> 2021 年 8 月-至今 清华大学 博士研究生 通信所 电子工程系</div>
                </el-collapse-item>
                <el-collapse-item title="获奖经历"> 
                   <div v-for="reward in rewards"><i class="el-icon-check"></i> {{reward}}</div>
                </el-collapse-item>
                <el-collapse-item title="职业技能"> 
                   <div v-for="skill in skills"><i class="el-icon-check"></i> {{skill}}</div>
                </el-collapse-item>
                <el-collapse-item title="工作经历"> 
                   <div v-for="work in works"><i class="el-icon-check"></i> {{work}}</div>
                </el-collapse-item>
                <el-collapse-item title="社工经历"> 
                   <div v-for="social in socials"><i class="el-icon-check"></i> {{social}}</div> 
                </el-collapse-item>
                 <div style="height:20px;"></div>
              </el-collapse>
              </el-scrollbar>
            </el-card>
            </div>

      </el-card>
  </div>
</template>

<script>
export default {
  name: 'index',
  data(){
      return { 
        imgurl:"../../static/imgs/photo.jpg",
        nav_num:3,
        rewards:[
          "2020 年 10 月 获校级学业优秀奖",
          "2019 年 10 月 获校级综合优秀奖，匹配国家奖学金",
          "2018 年 10 月 获校级科技创新优秀奖",
          "2018 年 10 月 获校级学业优秀奖",
          "2018 年 5 月 获清华大学第一届人工智能挑战赛 B 组二等奖",
        ],
        skills:[
          "高中时期参与 oi 竞赛，熟悉基本算法和 C++实现。",
          "学习 Java 程序设计，完成 Android 新闻 APP 大作业，取得了不错的成绩。",
          "掌握 Python，能编写一些简单的程序，做过 Linkedin 等网站的爬虫。",
          "熟悉 Javascript 语言，简单掌握 Vue.js+node.js+MongoDB，以此为技术栈建立自己的个人网站。",
          "掌握基本的 linux 命令。",
        ],
        works:[
          "2019 年 10 月 上线个人博客网站 silentland，技术栈为 Vue+nodejs，数据库使用 MongoDB",
          "2019 年 2 月-4 月 参与清华大学第二届人工智能挑战赛枪林弹雨组暨第二十届队式设计大赛的前端建设和维护",
          "2018 年 12 月 负责清华大学第一届学术推进论坛宣传工作的小程序“测试你的科研属性”的开发任务。",
          "2018 年 9 月-10 月 参与清华大学第二十届电子设计大赛官方网站的前端建设和维护",
        ],
        socials:[
          "2018 年 3 月 加入清华大学学生科学技术协会（SAST）赛事部",
          "2018 年 7 月 加入电子工程系学生科学技术协会（EESAST）软件部",
        ]
      }
    },
    methods:{
      changenavnum:function(idx)
      {
        this.nav_num=idx;
      }
    }
}
</script>

<style>
.show_box .el-scrollbar__bar.is-vertical
{
  right:-20px;
}
#index
{
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;

}
.whole_box
{
  width:850px;
  height: 100%;
  position: relative;
}
.box_nav
{
  width: max(5vw,5vh);
  height: max(25vh,16vw);
  margin-left: 2vw;
  position: relative;
  background-color: white;
  text-align: center;
  display: flex;
}
.button_nav
{
  position: relative;
  width: max(5vh,3vw);
  height: max(5vh,3vw);
  text-align: center;
  justify-content: center;
  padding: 0;
  margin-top: 1vh;
}
.box_left
{
  position: relative;
  width:250px;
  height:100%;
  min-width:120px;
  padding-top:10%;
  justify-content: center;
  text-align:center;
  background: #00C9FF;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to bottom, #92FE9D, #00C9FF);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to bottom, #92FE9D, #00C9FF); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
.box_right
{
  position: relative;
  width:600px;
  height:100%;
  /* overflow-y: scroll; */
}

.el-collapse-item__content
{
  margin-top:2vh;
  width: 100%;
  font-family: "Comic Sans MS" !important;
  background: #485563 !important;  /* fallback for old browsers */
  /*! autoprefixer: off */
  background: -webkit-linear-gradient(to right, #29323c, #485563) !important;  /* Chrome 10-25, Safari 5.1-6 */
   /* autoprefixer: on */
  background: linear-gradient(to right, #29323c, #485563) !important; /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  color: transparent !important;
  -webkit-background-clip: text !important;
  font-size:18px !important;
}
.el-collapse-item__content .el-icon-check
{
  display: inline !important;
}
.el-collapse-item__header
{
  background: #00C9FF !important;  /* fallback for old browsers */
  /*! autoprefixer: off */
  background: -webkit-linear-gradient(to bottom, #92FE9D, #00C9FF) !important;  /* Chrome 10-25, Safari 5.1-6 */
   /* autoprefixer: on */
  background: linear-gradient(to bottom, #92FE9D, #00C9FF) !important; /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  color: transparent !important;
  -webkit-background-clip: text !important;
  /* font-family: "Comic Sans MS"; */
  font-family: "Helvetica Neue" !important;
  font-size: 24px !important;
}
.myimg
{
  position: relative;
  width: 100%;
  height: 100%;
}
.box_left p
{
  color:white;
  font-family: "Helvetica Neue";
}
.box_name
{
  position: relative;
  font-weight:bold;
  font-size: 24px;
}

.box_right .el-card
{
  border: none;
}

@media (max-width: 700px) {
  .box_nav
  {
    position: fixed;
    bottom: 0;
    width:100%;
    left:0;
    margin-left: 0;
    border-radius: 0;
    height:40px;
    justify-content: space-evenly;
    display: flex;
  }
  .box_nav .el-card__body
  {
    justify-content: space-evenly;
    display: flex;
    width: 100%;
  }
  .button_nav
  {
    margin-top:0;
    width: 40px;
    height: 40px;
    font-size: 40px !important;
  }
  .whole_box
  {
    width: 100%;
  }
  .whole_box .el-card__body
  {
    
    flex-flow: column;
    display: flex;
  }
  #index
  {
    padding-top: 0;
    padding-left: 0;
  }
  .box_left
  {
    width:100%;
    height: 250px;
    padding-top: 20px;
    padding-bottom: 20px;
    text-align: justify;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .myimg
  {
    width:60px !important;
    height:60px !important;
    line-height: 60px !important;
    margin-right:10px;
  }
  .box_left p
  {
    margin: 0px;
    font-weight: 100;
    font-size:20px;
  }
  .box_title
  {
    border-left: 2px solid;
    padding: 5px;
  }
  .box_name
  {
    font-size: 30px;
  }
  .box_right
  {
    width:100%;
    height:calc(100% - 250px);
  }
}
</style>


