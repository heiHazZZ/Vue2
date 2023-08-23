<template>
  <div class="school">
    <h2>学校名称：{{name}}</h2>
    <h2>学校地址：{{adress}}</h2>
  </div>
</template>

<script>
export default {
    name:'SchoolName',
    props:['getSchoolName'],
    data() {
        return {
            name:'尚硅谷atguigu',
            adress:'北京', 
        }
    },
    mounted() {
        this.$bus.$on('hello',(data) => {
            console.log('我是school,收到了数据',data);
        })
    },
    beforeDestroy() {
        this.$bus.$off('hello')
    },
}
</script>

<style scoped>
    .school{
        background-color: skyblue;
    }
</style>