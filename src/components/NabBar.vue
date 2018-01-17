<template>
    <div class="navbar-page">
        <div v-for="(title,index) in titles" :key="index" class="navbar-tab" :class="{'active':currentIndex===index}" @click="switchTab(index)">
            {{title}}
        </div>
    </div>
</template>

<script>
export default {
    props: {
        titles: {
            type: Array,
            required: true,
        },
        selectedIndex: {
            type: Number,
            default: 0,
        }
    },
    data () {
        return {
            currentIndex: this.selectedIndex
        }
    },
    methods: {
        switchTab(index) {
            this.currentIndex = index;
            this.$emit('switchTab', index);
        },
    },
    wath: {
        selectedIndex: function (newValue, oldValue) {
            this.currentIndex = newValue;
        }
    }
}
</script>

