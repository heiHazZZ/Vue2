<template>
  <div>
    <h2>学校名称：{{name | mySlice}}</h2>
    <h2>学校地址：{{adress}}</h2>
    <button @click="test">点我测试hello</button>
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
    methods: {
        test(){
            this.hello()
        }
    },

}
</script>