<template>
    <div id="index">
        <div style="width:100%;min-height:60vh;display:flex;justify-content: center;align-items: center;flex-direction: column;
        background: #232526; 
        background: -webkit-linear-gradient(to left, #414345, #232526); 
        background: linear-gradient(to left, #414345, #232526); 
        color:white;
        ">
            
            <el-avatar class="index_img"  :size="180" fit="contain" src="../../static/imgs/index.jpg" style="box-shadow: white 0 0 10px;"></el-avatar>
            <p style="font-size:26px;" class="index_name">Rui Zeng | THU EE</p>
            <span style="font-size:24px;" class="index_des">Researcher & Programmer</span>
            <br/>
            <span>
            <a href="https://github.com/silentsaber" target="_blank"><img src="../../static/imgs/github.svg" width="30" height="30" style="cursor: pointer;"/></a>
            <a href="https://blog.csdn.net/nikelong0?type=blog" target="_blank"><img src="../../static/imgs/csdn.svg" width="30" height="30" style="cursor: pointer;"/></a>
            <el-popover
                placement="top-start"
                title="邮件"
                width="300"
                trigger="click"
                >
                <el-link @click="clickCopy('zeng_r17@163.com')">zeng_r17@163.com</el-link>
                <img src="../../static/imgs/email.svg" width="30" height="30" style="cursor: pointer;" slot="reference"/>
            </el-popover>
            </span>
            <el-button type="info" style="background: black;top:20px;position: relative; border: 2px solid;" @click="$router.replace('/profile')">More About Me</el-button>
        </div>
        <div style="width:100%;min-height:60vh;display:flex;justify-content: center;align-items: center;flex-direction: column;
            color:black;
            background: #F2F6FC;
        ">
            <p style="font-size:32px;font-weight:bold;">技术栈涉略</p>
            <span style="font-size:20px;margin-bottom:20px;" class="skill_sum"><b>核心定位</b>："DL+通信"研究者，网站开发爱好者</span>
            <div style="display:flex;flex-direction:row;width:70%;justify-content: space-around;margin-bottom:40px;" class="skill">
            <el-card class="skill-left" :body-style="{display: 'flex',flexDirection: 'column'}" style="width:46%;">
                <span style="font-size:24px; font-weight:bold;">编程语言</span>
                <el-divider></el-divider>
                <span><b>算法设计</b>: c/c++ </span><br/>
                <span><b>深度学习</b>: python</span><br/>
                <span><b>前端开发</b>: html/css/js</span><br/>
                <span><b>科研常用</b>: matlab</span><br/>
                <span><b>安卓开发</b>: java/android</span><br/>
                <span><b>硬件描述</b>: verilog</span><br/>
            </el-card>
            <el-card class="skill-right" style="width:46%;">
                <span style="font-size:24px; font-weight:bold;">软件/框架</span>
                <el-divider></el-divider>
                <!-- <div class="iconbox"><img src="../../static/imgs/vscode.svg" width="50" height="50"/><span>vscode</span></div>
                <div class="iconbox"><img src="../../static/imgs/Pycharm.svg" width="50" height="50"/><span>pycharm</span></div> -->
                
                <div class="iconbox"><img src="../../static/imgs/pytorch.svg" width="50" height="50"/><span>pytorch</span></div>
                <div class="iconbox"><img src="../../static/imgs/Vue.svg" width="50" height="50"/><span>vue.js</span></div>
                <div class="iconbox"><img src="../../static/imgs/elementui.svg" width="50" height="50"/><span>element-ui</span></div>
                <div class="iconbox"><img src="../../static/imgs/Nodejs.svg" width="50" height="50"/><span>node.js</span></div>
                <div class="iconbox"><img src="../../static/imgs/Mongodb.jpg" width="50" height="50"/><span>mongodb</span></div>
                <div class="iconbox"><img src="../../static/imgs/qt.svg" width="50" height="50"/><span>QT</span></div>
                <div class="iconbox"><img src="../../static/imgs/python.svg" width="50" height="50"/><span>python</span></div>
                <div class="iconbox"><img src="../../static/imgs/matlab.svg" width="50" height="50"/><span>matlab</span></div>
                <div class="iconbox"><img src="../../static/imgs/android-studio.png" width="50" height="50"/><span>AndroidStudio</span></div>
                <div class="iconbox"><img src="../../static/imgs/vivado.png" width="50" height="50"/><span>vivado</span></div>
                <div class="iconbox"><img src="../../static/imgs/multisim.jpg" width="50" height="50"/><span>multisim</span></div>
            </el-card>
            </div>
        </div>
        <div style="width:100%;min-height:60vh;display:flex;justify-content: center;align-items: center;flex-direction: column;
        background: #909399; 
        background: -webkit-linear-gradient(to right, rgb(144, 147, 153), #909399); 
        background: linear-gradient(to right, rgb(144, 147, 153), #909399);
        color:white;
        ">
            <p style="font-size:32px;font-weight:bold;">开发案例</p>
            <div class="example" style="display:flex;flex-direction:row;width:96%;justify-content: space-around;margin-bottom:40px;">
                <!-- <el-card :body-style="{display: 'flex',flexDirection: 'column'}" style="width:30%;background: ghostwhite;"> -->
                <div style="width:30%;display:flex;flex-direction:column;" class="example_li">
                        <p style="font-size:24px; font-weight:bold;text-align: center;    text-shadow: 0 0 20px lightgoldenrodyellow;">电设网站</p>
                    <el-image src="../../static/imgs/eedesign2.jpg" style="box-shadow: 0 0 20px;height:200px;" fit="cover"></el-image>
                     <span style="padding:20px;">清华大学电子系第二十届电子设计大赛前端开发，主要负责“组队”、“首页”、“介绍”、“文件”等界面及对应界面对接后端。一周培训速成后练手，采用原生html+css+js。</span>
                </div>
                <!-- <el-card :body-style="{display: 'flex',flexDirection: 'column'}" style="width:30%;background: ghostwhite;"> -->
                <div style="width:30%;display:flex;flex-direction:column;" class="example_li">
                    <p style="font-size:24px; font-weight:bold;text-align: center;    text-shadow: 0 0 20px lightgoldenrodyellow;">队式网站</p>
                    <el-image src="../../static/imgs/eeai.JPG" style="box-shadow: 0 0 20px;height:200px;" fit="cover"></el-image>
                    <span style="padding:20px;">清华大学电子系第二十届队式大赛暨第一届人工智能挑战赛“枪林弹雨组”前端开发，主要负责“组队”、“天梯比赛”等界面以及所有界面对接后端。技术栈Vue.js+node.js+mongodb。</span>
                </div>
                <!-- <el-card :body-style="{display: 'flex',flexDirection: 'column'}" style="width:30%;background: ghostwhite;"> -->
                <div style="width:30%;display:flex;flex-direction:column;" class="example_li">
                    <p style="font-size:24px; font-weight:bold;text-align: center;    text-shadow: 0 0 20px lightgoldenrodyellow;">学推论坛小程序</p>
                    <el-image src="../../static/imgs/thusastminiprogram.jpg" style="height:200px;" fit="contain"></el-image>
                    <span style="padding:20px;">清华大学第一届学术推进论坛推广宣传微信小程序开发，负责完整的程序设计流程。一周内(2018.12.16-2018.12.23)累计访问量超过1w，累计访问人数超过3000。</span>
                </div>
            </div>
        </div>
        <div style="width:100%;min-height:60vh;display:flex;justify-content: center;align-items: center;flex-direction: column;
            color:black;
            background: #F2F6FC;
        ">
            <p style="font-size:32px;font-weight:bold;">项目研究</p>
            <div class="experience" style="display:flex;flex-direction:column;width:36%;justify-content: center;margin-bottom:40px; padding:20px;">
                <h2>研究</h2>
                <span>▶ 高考机器人: 基于知识图谱解决"解析几何"问题</span>
                <span>▶ 跨摄像头追踪: 基于不同时间多个摄像头图像追踪同一个对象的行迹(比Re-ID更复杂)</span>
                <span>▶ <a href="https://ieeexplore.ieee.org/document/9791347" target="_blank">低比特纠错编码设计</a>: 基于深度学习实现接收机低比特量化下的纠错编码设计</span>
                <h2>项目</h2>
                <span>▶ 游戏合集: 基于c++实现五子棋、数字华容道(15-puzzle)、贪吃蛇等多个小游戏</span>
                <span>▶ 简易画图: 基于QT实现简单绘图、三维茶壶绘制及立体旋转</span>
                <span>▶ 新闻App: 基于Android Studio实现某新闻RSS消息呈现的Android程序</span>
                <span>▶ 个人网站: 基于Vue.js+Node.js+MongoDB搭建个人主页</span>
                <span>▶ CPU流水线: 基于Verilog在FPGA上实现流水线CPU设计</span>
                <span>▶ SDN防火墙: 基于floodlight和web前端控制“软件定义网络(SDN)”的路由器规则</span>
                <span>▶ 蜘蛛机器人: 树莓派硬件程序控制八足蜘蛛机器人室内自动巡航寻找并扫描二维码</span>
                <span>▶ 机器人竞速: 树莓派硬件程序控制直立机器人穿越崎岖且有障碍的复杂赛道</span>
            </div>
        </div>
        
    </div>
</template>
<script>
export default{
    name:'index',
    data()
    {
        return{

        }
    },
    methods:{
        clickCopy(msg) {
            const save = function(e) {
                e.clipboardData.setData('text/plain', msg)
                e.preventDefault() // 阻止默认行为
            }
            const once = {
                once: true
            }
            document.addEventListener('copy', save, once) // 添加一个copy事件,当触发时执行一次,执行完删除
            document.execCommand('copy') // 执行copy方法
            this.$message({ message: '复制成功', type: 'success' })
        }

    }
}
</script>
<style>
#index img:hover
{
    transform: scale(1.2);
    transition: 0.5s;
}
.skill .iconbox
{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100px;
    height:100px;
    float: left;
}
.example img
{
    object-position: top;
}
/* .example .el-card__header
{
    background:#E4E7ED;
}
.example .el-card__body
{
    padding:0;
} */

@media (max-width: 700px) {
    #index
    {
        padding-top: 60px;    
    }
    .skill-left,.skill-right{
        width:100%!important;
    }
    .skill, .example, .experience
    {
        flex-direction: column!important;
        width: 100% !important;
    }
    .experience h2, .experience span
    {
        padding: 0 20px !important;
    }
    .example .example_li
    {
        width: 100%!important;
    }
    .index_img
    {
        width:160px !important;
        height:160px !important;
    }
    .index_name
    {
        font-size:18px !important;
    }
    .index_des
    {
        font-size:16px !important;
    }
    .skill_sum
    {
        padding: 10px;
    }
}
</style>