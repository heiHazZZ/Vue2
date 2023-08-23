<template>
  <div class="app">
    <h2>{{msg}}</h2>
    <SchoolName/>
    <StudentName/>
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
    }
}
</script>

<style>
  .app{
    background-color: gray;
  }
</style>
