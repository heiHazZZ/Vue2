<template>
  <div>
    <h1>{{msg}}</h1>
    <!-- 这里的age为字符串类型，直接加为字符串拼接，v-bind属性使age实现age+1 -->
    <StudentName name="李四" sex="男" :age="20" />
  </div>
</template>

<script>
import StudentName from './components/StudentName.vue'
export default {
    name:'App',
    components:{StudentName},
    data() {
      return {
        msg:'男酮名单：',
      }
    },
}
</script>
