<template>
  <div class="demo">
    <h2 class="title">学校名称：{{name | mySlice}}</h2>
    <h2>学校地址：{{adress}}</h2>
  </div>
</template>

<script>
export default {
    data() {
        return {
            name:'尚硅谷atguigu',
            adress:'北京', 
        }
    },
}
</script>

<style scoped>
    .demo{
        background-color: skyblue;
    }
</style>