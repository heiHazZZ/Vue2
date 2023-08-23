<template>
  <div class="student">
    <h2>学生姓名：{{name}}</h2>
    <h2>年龄:{{age}}</h2>
    <h2>当前数字为：{{number}}</h2>
    <button @click="sendStudentName">点击向app发送学生名</button>
    <button @click="unbind">解绑自定义事件</button>
    <button @click="add">点击number++</button>
    <button @click="death">点击销毁当前实例对象（vc）</button>
  </div>
</template>

<script>
export default {
    name:'StudentName',
    data() {
        return {
            name:'张三',
            age:18,
            number:0
        }
    },
    methods: {
      sendStudentName(){
        // 触发student组件实例vc身上的atguigu事件
        this.$emit('atguigu',this.name,666,888,999)
        // this.$emit('demo')
      },
      unbind(){
        this.$off('atguigu')  // 解绑一个自定义事件
        // this.$off(['atguigu','demo'])  // 解绑多个自定事件
        // this.$off()  // 解绑所有自定义事件
      },
      add(){
        this.number++
      },
      death(){
        this.$destroy()  // 销毁了当前Student组件的实例对象，销毁后所有的Student实例的自定义事件全都不奏效
      }
    },
}
</script>
<style scoped>
  .student{
    background-color: pink;
  }
</style>
