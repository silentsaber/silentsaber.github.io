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
                <el-link @click="clickCopy('zengr21@mails.tsinghua.edu.cn')">zengr21@mails.tsinghua.edu.cn</el-link>
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
                <div class="iconbox"><img src="../../static/imgs/vscode.svg" width="50" height="50"/><span>vscode</span></div>
                <div class="iconbox"><img src="../../static/imgs/Pycharm.svg" width="50" height="50"/><span>pycharm</span></div>
                <div class="iconbox"><img src="../../static/imgs/pytorch.svg" width="50" height="50"/><span>pytorch</span></div>
                <div class="iconbox"><img src="../../static/imgs/Vue.svg" width="50" height="50"/><span>vue.js</span></div>
                <div class="iconbox"><img src="../../static/imgs/elementui.svg" width="50" height="50"/><span>element-ui</span></div>
                <div class="iconbox"><img src="../../static/imgs/Nodejs.svg" width="50" height="50"/><span>node.js</span></div>
                <div class="iconbox"><img src="../../static/imgs/Mongodb.jpg" width="50" height="50"/><span>mongodb</span></div>
                <div class="iconbox"><img src="../../static/imgs/python.svg" width="50" height="50"/><span>python</span></div>
                <div class="iconbox"><img src="../../static/imgs/matlab.svg" width="50" height="50"/><span>matlab</span></div>
                <div class="iconbox"><img src="../../static/imgs/Android.svg" width="50" height="50"/><span>android</span></div>
                <div class="iconbox"><img src="../../static/imgs/vivado.png" width="50" height="50"/><span>vivado</span></div>
                <div class="iconbox"><img src="../../static/imgs/multisim.jpg" width="50" height="50"/><span>multisim</span></div>
            </el-card>
            </div>
        </div>
        <div style="width:100%;min-height:60vh;display:flex;justify-content: center;align-items: center;flex-direction: column;
        background: #909399; 
        background: -webkit-linear-gradient(to left, #909399, #232526); 
        background: linear-gradient(to left, #909399, #232526); 
        color:white;
        ">
            <p style="font-size:32px;font-weight:bold;">开发案例</p>
            <div class="example" style="display:flex;flex-direction:row;width:80%;justify-content: space-around;margin-bottom:40px;">
                <el-card :body-style="{display: 'flex',flexDirection: 'column'}" style="width:30%;">
                    <span style="font-size:24px; font-weight:bold;">电设网站</span>
                    <el-divider></el-divider>
                </el-card>
                <el-card :body-style="{display: 'flex',flexDirection: 'column'}" style="width:30%;">
                    <span style="font-size:24px; font-weight:bold;">队式网站</span>
                    <el-divider></el-divider>
                </el-card>
                <el-card :body-style="{display: 'flex',flexDirection: 'column'}" style="width:30%;">
                    <span style="font-size:24px; font-weight:bold;">学推论坛推广小程序</span>
                    <el-divider></el-divider>
                </el-card>
            </div>
        </div>
        <div style="width:100%;min-height:60vh;display:flex;justify-content: center;align-items: center;flex-direction: column;
            color:black;
            background: #F2F6FC;
        ">
            <p style="font-size:32px;font-weight:bold;">获奖情况/科研经历</p>
            <div class="example" style="display:flex;flex-direction:row;width:80%;justify-content: space-around;margin-bottom:40px;">

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
@media (max-width: 700px) {
    .skill-left,.skill-right{
        width:100%!important;
    }
    .skill
    {
        flex-direction: column!important;
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
}
</style>