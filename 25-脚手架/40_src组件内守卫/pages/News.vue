<template>
    <ul>
        <li :style="{opacity}">欢迎学习</li>
        <li>news001 <input type="text"> </li>
        <li>news002 <input type="text"> </li>
        <li>news003 <input type="text"> </li>
    </ul>
</template>

<script>
export default {
    name:'News',
    data() {
        return {
            opacity:1
        }
    },
    // mounted() {
    //     this.timer = setInterval(() => {
    //         console.log('@');
    //         this.opacity -= 0.01
    //         if(this.opacity <=0) this.opacity = 1
    //     })
    // },
    // beforeCreate() {
    //     console.log('New即将被销毁');
    //     clearInterval(this.timer)
    // },
    
    // 组件被激活时
    activated() {
        this.timer = setInterval(() => {
            console.log('@');
            this.opacity -= 0.01
            if(this.opacity <=0) this.opacity = 1
        })
    },
    // 组件失活时
    deactivated() {
        clearInterval(this.timer)
    },
}
</script>

<style>

</style>