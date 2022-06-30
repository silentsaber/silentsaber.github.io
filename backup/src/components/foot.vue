<template>
    <div id="foot">
        距今码龄已有{{years}}年~
    </div>
</template>

<script>
export default {
    name: "foot",
    data()
    {
        return {
            years:0,
        }
    },
    mounted:function()
    {
        var pre = new Date("2014/10/1");
        var cur = new Date();
        var sY = pre.getFullYear();
        var sM = pre.getMonth() + 1;
        var sD = pre.getDate();
        var eY = cur.getFullYear();
        var eM = cur.getMonth() + 1;
        var eD = cur.getDate();
        
        var yL = eY - sY;
        var mL = eM - sM;
        var dL = eD - sD;
        if (dL < 0) {
		    mL--;
        }
        if (mL < 0) {
            yL--;
        }
        if (yL > 0) {
            this.years = yL;
        }else{
            this.years = 0;
        }

    }
};
</script>
<style>
#foot {
    position: relative;
    height:60px;
    width:100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color:#787d82;
    background: black;
    z-index:1;
    margin-top:20px;
}
</style>