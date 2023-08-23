<template>
  <div class="school">
    <h2>学校名称：{{name}}</h2>
    <h2>学校地址：{{adress}}</h2>
    <button @click="sendSchoolName">发送给app学校名称</button>
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
    methods: {
        sendSchoolName(){
            this.getSchoolName(this.name)
        }
    },
}
</script>

<style scoped>
    .school{
        background-color: skyblue;
    }
</style>