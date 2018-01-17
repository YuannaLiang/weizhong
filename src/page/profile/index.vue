<template>
    <div class="profile-page">
        <div class="profile-head">
            <div class="head-left">
                <div><span class="img">头像</span></div>
            </div>
            <div class="head-right">
                <p class="user-name">张三</p>
                <p class="name-bottom">
                    <span class="time">总课时：<span class="num">6</span></span>
                    <span class="credit">总学分：<span class="num">18</span></span>
                </p>
            </div>
        </div>
        <div class="profile-main">
            <div class="main-list" @click="toCourse()">
                <div class="main-list-left">
                    <p class="list-top">
                        <i class="iconfont icon-kecheng"></i>
                        <span class="list-title">在线课程</span>
                    </p>
                    <p class="list-bottom">
                        <span class="time">课时：<i class="num">3</i></span>
                        <span class="credit">学分：<i class="num">6</i></span>
                    </p>
                </div>
                <div class="main-list-icon">
                    <i class="iconfont icon-qianjin"></i>
                </div>
            </div>
            <div class="main-list" @click="toTrain()">
                <div class="main-list-left">
                    <p class="list-top">
                        <i class="iconfont icon-peixunguanli"></i>
                        <span class="list-title">培训班级</span>
                    </p>
                    <p class="list-bottom">
                        <span class="time">课时：<i class="num">3</i></span>
                        <span class="credit">学分：<i class="num">6</i></span>
                    </p>
                </div>
                <div class="main-list-icon">
                    <i class="iconfont icon-qianjin"></i>
                </div>
            </div>
            <div class="main-list" @click="toExam()">
                <div class="main-list-left">
                    <p class="list-top">
                        <i class="iconfont icon-exam"></i>
                        <span class="list-title">考试</span>
                    </p>
                    <p class="list-bottom">
                        <span class="time">课时：<i class="num">--/--</i></span>
                        <span class="credit">学分：<i class="num">6</i></span>
                    </p>
                </div>
                <div class="main-list-icon">
                    <i class="iconfont icon-qianjin"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        toExam(){
            this.$router.push(`/profile/exam/`);
        },
        toTrain(){
            this.$router.push(`/profile/class/`);
        },
        toCourse(){
            this.$router.push(`/profile/online-course/`);
        }
    }
}
</script>

<style lang="sass">

</style>


