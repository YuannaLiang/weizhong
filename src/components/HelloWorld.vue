<template>
    <div class="hello">
        <!-- <nav-bar :titles="titleArray"></nav-bar> -->
        <h1 class="text">{{ msg }}</h1>
        <a>测试。。。</a>
    </div>
</template>

<script>
import NavBar from './NabBar.vue';
export default {
    name: 'HelloWorld',
    data () {
        return {
          msg: 'Welcome to Your Vue.js App',
          titleArray: ['进行中', '已结束'],
        }
    },
    components: {
        NavBar
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
