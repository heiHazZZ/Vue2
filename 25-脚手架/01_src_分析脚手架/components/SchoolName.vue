<template>
  <div class="demo">
    <h2>学校名称：{{name}}</h2>
    <h2>学校地址：{{adress}}</h2>
    </div>
</template>

<script>
export default {
    name:'SchoolName',
    data(){
            return{
                name:'尚硅谷',
                adress:'北京昌平'
            }
        }
}
</script>

<style>
    .demo{
        background-color: pink;
    }
</style>