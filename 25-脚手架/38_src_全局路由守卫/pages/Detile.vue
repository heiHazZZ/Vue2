<template>
  <ul>
    <li>消息标号：{{id}}</li>
    <li>消息内容：{{title}}</li>
  </ul>
</template>

<script>
export default {
    name:'Detile',
    props:['id','title'],
    mounted() {
        console.log(this.$route);
    },
}
</script>

<style>

</style>