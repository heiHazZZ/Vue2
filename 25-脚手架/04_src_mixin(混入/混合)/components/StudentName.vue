<template>
  <div>
    <h2 @click="showName">学生姓名：{{name}}</h2>
    <h2>年龄:{{age}}</h2>
  </div>
</template>

<script>
// import {mixin,mixin2} from '../mixin'
export default {
    name:'StudentName',
    data() {
        return {
            name:'张三',
            age:18,
        }
    },
    // mixins:[mixin,mixin2]
}
</script>
