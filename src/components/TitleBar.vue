<template>
    <div class="title-bar">
        <span class="iconfont icon-fanhui"></span>
        <span class="title">{{heading}}</span>
    </div>
</template>
<script>
export default {
    props:[
        'heading',//标题
    ]
}
</script>
