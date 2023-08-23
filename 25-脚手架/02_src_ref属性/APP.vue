<template>
  <div>
    <h1 v-text="msg" ref="title"></h1>
    <button ref="btn" @click="showDOM">点击输出上方DOM元素</button>
    <SchoolName ref="sch"/>
  </div>
</template>

<script>
import SchoolName from './components/SchoolName.vue'
export default {
    name:'App',
    components:{SchoolName},
    data() {
      return {
        msg:'欢迎学习Vue!'
      }
    },
    methods: {
      showDOM(){
        console.log(this.$refs.title); // 真实DOM元素
        console.log(this.$refs.btn);  // 真实DOM元素
        console.log(this.$refs.sch);  // school组件的实例对象(vc)
        console.log(this.$refs);
      }
    },
}
</script>
