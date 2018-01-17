<template>
    <div class="profile-course-page">
        <div class="main-list" @click="toDetail()">
            <div class="main-list-left">
                <p class="list-top">
                    <span class="list-title">如何克服沟通障碍</span>
                    <span  class="status">
                        状态：<i class="status-color">完成</i>
                    </span>
                </p>
                <p class="list-bottom">
                    <span class="time">课时：<i class="num">1</i></span>
                    <span class="credit">学分：<i class="num">1</i></span>
                    <span class="core">成绩：<i class="num">80</i></span>
                </p>
                <p>完成时间：2017-09-25</p>
            </div>
        </div>
        <div class="main-list" @click="toDetail()">
            <div class="main-list-left">
                <p class="list-top">
                    <span class="list-title">如何克服沟通障碍</span>
                    <span  class="status">
                        状态：<i class="status-color">完成</i>
                    </span>
                </p>
                <p class="list-bottom">
                    <span class="time">课时：<i class="num">1</i></span>
                    <span class="credit">学分：<i class="num">1</i></span>
                    <span class="core">成绩：<i class="num">80</i></span>
                </p>
                <p>完成时间：2017-09-25</p>
            </div>
        </div>
        <div class="main-list" @click="toDetail()">
            <div class="main-list-left">
                <p class="list-top">
                    <span class="list-title">如何克服沟通障碍</span>
                    <span  class="status">
                        状态：<i class="status-color">完成</i>
                    </span>
                </p>
                <p class="list-bottom">
                    <span class="time">课时：<i class="num">1</i></span>
                    <span class="credit">学分：<i class="num">1</i></span>
                    <span class="core">成绩：<i class="num">80</i></span>
                </p>
                <p>完成时间：2017-09-25</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        toDetail(){
            this.$router.push(`/profile/courseDetail/`);
        }
    }
}
</script>

