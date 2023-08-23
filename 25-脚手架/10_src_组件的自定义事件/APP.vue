<template>
  <div class="app">
    <h2>{{msg}}</h2>
    <!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
    <SchoolName :getSchoolName="getSchoolName" />
    <hr>
    <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据 （第一种写法：使用v-on或@） -->
    <StudentName @atguigu="getStudentName" @demo="m1" @click.native="show" />

    <!-- <StudentName ref="student"></StudentName> -->
  </div>
</template>

<script>
import StudentName from './components/StudentName.vue'
import SchoolName from './components/SchoolName.vue'
export default {
    name:'App',
    components:{
      StudentName,
      SchoolName
    },
    data() {
      return {
        msg:'你好啊！'
      }
    },
    methods: {
      getSchoolName(name){
        console.log('app收到了学校名',name);
      },
      getStudentName(name,...person){
        console.log('app收到了学生名',name,person);
      },
      m1(){
        console.log('m1事件被执行了');
      },
      show(){
        alert('123')
      }
    },
    mounted() {
      // this.$refs.student.$on('atguigu',this.getStudentName)  // 绑定自定义事件
      // this.$refs.student.$once('atguigu',this.getStudentName)  // 绑定自定义事件（执行一次）
    },
}
</script>

<style>
  .app{
    background-color: gray;
  }
</style>
