<template>
  <div>
    <h2>学生姓名：{{name}}</h2>
    <h2>年龄:{{age}}</h2>
    <input type="text" v-fbind:value="name">
  </div>
</template>

<script>
export default {
    name:'StudentName',
    data() {
        return {
            name:'张三',
            age:18,
        }
    },
}
</script>
