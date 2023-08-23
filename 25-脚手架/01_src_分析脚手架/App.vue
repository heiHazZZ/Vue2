<template>
  <div>
    <img src="./assets/logo.png" alt="logo">
    <school></school>
    <student></student>
  </div>
</template>

<script>
import School from './components/SchoolName'
import Student from './components/StudentName'
export default {
    name:'App',
    components:{
        School,
        Student
    }

}
</script>
