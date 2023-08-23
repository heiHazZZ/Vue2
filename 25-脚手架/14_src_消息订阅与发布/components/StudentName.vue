<template>
  <div class="student">
    <h2>学生姓名：{{name}}</h2>
    <h2>年龄:{{age}}</h2>
    <button @click="sendStudentName">点击向school组件发送student名</button>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
    name:'StudentName',
    data() {
        return {
            name:'张三',
            age:18,
        }
    },
    methods: {
      sendStudentName(){
        // this.$bus.$emit('hello',this.name)

        // 发布消息
        pubsub.publish('hello',666)
      }
    },
}
</script>
<style scoped>
  .student{
    margin-top: 20px;
    background-color: pink;
  }
</style>
