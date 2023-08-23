<template>
  <div>
    <school></school>
    <student></student>
  </div>
</template>

<script>
import School from './school.vue'
import Student from './student.vue'
export default {
    name:'App',
    components:{
        School,
        Student
    }

}
</script>
