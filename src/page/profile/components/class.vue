<template>
    <div class="profile-train-page">
        <div class="list">
            <div class="list-item" @click="toClassSchedule()">
                <div class="content">
                    <p class="schedule-title">项目管理之会议</p>
                    <p>起止时间：2017-12-18至2-17-12-24</p>
                    <p class="status">
                        状态：<span class="status-color">已结束</span>
                    </p>
                </div>
                <div class="right">
                    <span class="iconfont icon-qianjin"></span>
                </div>
            </div>
            <div class="list-item" @click="toClassSchedule()">
                <div class="content">
                    <p class="schedule-title">精英训练营</p>
                    <p>起止时间：2017-12-18至2-17-12-24</p>
                    <p class="status">
                        状态：<span class="status-color">已结束</span>
                    </p>
                </div>
                <div class="right">
                    <span class="iconfont icon-qianjin"></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        toClassSchedule(){
            this.$router.push(`/class-schedule`);
        }
    }
}
</script>

