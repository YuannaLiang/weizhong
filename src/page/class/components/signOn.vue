<template>
    <div class="sign-on-page">
        <div class="header" v-if="show">
            <div class="time">
                <div class="day">9</div>
                <div class="month">
                    <p>星期二</p>
                    <p>2018/01</p>
                </div>
            </div>
            <div class="class-name">
                <p>班级名称 XXX</p>
            </div>
        </div>
        <div class="content">
            <div class="click-sign" v-if="show">
                <button class="sign-btn" @click="show=!show">点击签到</button>
            </div>
            <div class="content-btn">
                <div v-if="!show">
                    <div class="pass btn">
                        <span class="iconfont icon-duihao2"></span>
                    </div>
                    <p class="sign-success">签到成功</p>
                </div>
                <div v-if="false">
                    <div class="fail btn">
                        <span class="iconfont icon-cuohao1"></span>
                    </div>
                    <p>签到失败</p>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
export default {
    data(){
        return {
            show:true,//签到
        }
    }
}
</script>

