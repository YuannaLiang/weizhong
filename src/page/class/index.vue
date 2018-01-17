<template>
    <div class="train-class-page">
            <div class="search">
                <input class="search-txt" type="text">
                <button class="search-btn">搜索</button>
            </div>
        <div class="train-list">
            <div class="train-item" @click="toTrainDetail()">
                <p class="title">
                    <span class="left">英才计划</span> 
                    <span class="right">
                        <span class="status">班级状态:</span> <span class="status-color">开班中</span>
                    </span>
                </p>
                <p class="start-time">
                    <span>开始时间:2017-12-10</span>
                </p>
                <p class="end-time">结束时间:2017-12-12</p>
                <p class="train-count">培训人数：<span class="num">10</span></p>
            </div>
            <div class="train-item" @click="toTrainDetail()">
                <p class="title">
                    <span class="left">经营训练营</span> 
                    <span class="right">
                        <span class="status">班级状态:</span> <span class="status-color">开班中</span>
                    </span>
                </p>
                <p class="start-time">
                    <span>开始时间:2017-12-10</span>
                </p>
                <p class="end-time">结束时间:2017-12-12</p>
                <p class="train-count">培训人数：<span class="num">10</span></p>
            </div>
            <div class="train-item" @click="toTrainDetail()">
                <p class="title">
                    <span class="left">英才计划</span> 
                    <span class="right">
                        <span class="status">班级状态:</span> <span class="status-color">开班中</span>
                    </span>
                </p>
                <p class="start-time">
                    <span>开始时间:2017-12-10</span>
                </p>
                <p class="end-time">结束时间:2017-12-12</p>
                <p class="train-count">培训人数：<span class="num">10</span></p>
            </div>
        </div>
        
    </div>
</template>
<script>
import TabButton from '../../components/TabButton.vue'
import TitleBar from '../../components/TitleBar.vue'
export default {
    data(){
        return{
            title:'培训班级'
        }
    },
    components: {
        TabButton,TitleBar
    },
    methods: {
        toTrainDetail(){
            this.$router.push(`train-detail`);
        }
    }
}
</script>

