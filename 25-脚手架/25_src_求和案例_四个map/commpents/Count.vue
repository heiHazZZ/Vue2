<template>
  <div class="demo">
    <h1>当前求和为:{{sum}}</h1>
    <h1>放大十倍后为:{{bigSum}}</h1>
    <h1>我在{{school}},学习{{subject}}</h1>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">当前求和为奇数再加</button>
    <button @click="incrementWait(n)">等一等再加</button>
  </div>
</template>

<script>
 import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
export default {
    name:'Category',
    data() {
      return {
        n:1
      }
    },
    methods: {
      // 程序员亲自写方法
      // increment(){
      //   this.$store.commit('JIA',this.n)
      // },
      // decrement(){
      //   this.$store.commit('JIAN',this.n)
      // },

      // 借助mapMutations生成对应方法，方 
      //   this.$store.dispatch('wait',this.n)
      // }

      // 借助mapActions生成对应方法，方法中会调用dispath去联系actions （对象写法）
      ...mapActions({incrementOdd:'odd',incrementWait:'wait'})
      // 借助mapActions生成对应方法，方法中会调用dispath去联系actions （数组写法）
      // ...mapActions(['odd','wait'])
    },
    computed:{ 
      // 程序员自己编写计算属性
      // sum(){
      //   return this.$store.state.sum
      // },
      // school(){
      //   return this.$store.state.school
      // },
      // subject(){
      //   return this.$store.state.subject
      // },

      // 借助mapState生成计算属性，从state中读取数据（对象写法）
      // ...mapState({he:'sum',xuexiao:'school',xueke:'subject'}),

      // 借助mapState生成计算属性，从state中读取数据（数组写法）
      // 数组写法只能使用state里数据的原名，不能像对象写法一样改名
      ...mapState(['sum','school','subject']),

      // ************************************************************
      // bigSum(){
      //   return this.$store.getters.bigSum
      // },
      // 借助mapGetters生成计算属性，从getters中读取数据（对象写法）
      // ...mapGetters({bigSum:'bigSum'})
      // 借助mapGetters生成计算属性，从getters中读取数据（数组写法）
      ...mapGetters(['bigSum'])
      
    }
}
</script>

<style scoped>
  button {
    margin-left: 10px;
  }
</style>