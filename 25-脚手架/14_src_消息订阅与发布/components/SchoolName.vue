<template>
  <div class="school">
    <h2>学校名称：{{name}}</h2>
    <h2>学校地址：{{adress}}</h2>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
    name:'SchoolName',
    props:['getSchoolName'],
    data() {
        return {
            name:'尚硅谷atguigu',
            adress:'北京', 
        }
    },
    mounted() {
        // this.$bus.$on('hello',(data) => {
        //     console.log('我是school,收到了数据',data);
        // })

        // 订阅消息
        // msgName为消息名hello，data为形参
        this.pubId = pubsub.subscribe('hello', (msgName,data) => {
            console.log(this);
            console.log('有人发布了hello消息，hello消息的回调被执行了',msgName,data);
        })
    },
    beforeDestroy() {
        // this.$bus.$off('hello')

        // 取消订阅
        pubsub.unsubscribe(this.pubId)
    },
}
</script>

<style scoped>
    .school{
        background-color: skyblue;
    }
</style>