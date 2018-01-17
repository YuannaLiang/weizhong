<template>
    <div class="bottom-button">
            <span class="iconfont icon-jianpan"></span>
            <span @click="toTrainClass()">培训班级</span>
            <span><i class="iconfont icon-gengduo"></i>文化</span>
            <span @click="toProfile()">个人中心</span>
    </div>
</template>
<script>
export default {
    methods:{
        toTrainClass(){
            this.$router.push(`/train-class`);
        },
        toProfile(){
            this.$router.push(`/profile`);
        }
    }
}
</script>

