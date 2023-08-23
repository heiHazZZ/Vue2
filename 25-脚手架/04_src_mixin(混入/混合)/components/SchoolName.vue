<template>
  <div>
    <h2 @click="showName">学校名称：{{name}}</h2>
    <h2>学校地址：{{adress}}</h2>
  </div>
</template>

<script>
// 分别暴露要大括号
// 引入混合（mixin）
// import {mixin,mixin2} from '../mixin'
export default {
    data() {
        return {
            name:'尚硅谷',
            adress:'北京', 
            x:666
        }
    },
    // mixins:[mixin,mixin2],
    mounted() {
        console.log('你好啊！！！！！');
    },
}
</script>