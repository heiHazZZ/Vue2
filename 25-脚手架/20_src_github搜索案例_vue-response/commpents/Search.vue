<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
        <input type="text" placeholder="enter the name you search" v-model="keyWords" />&nbsp;
        <button @click="searchTest">Search</button>
    </div>
  </section>
</template>

<script>
export default {
    name:'Search',
    data() {
        return {
            keyWords:''
        }
    },
    methods: {
        searchTest(){
            // 点击请求，但还未成功前
            this.$bus.$emit('updataListData',{isFirst:false,isLoding:true,errMsg:'',users:[]})
            this.$http.get(`https://api.github.com/search/users?q=${this.keyWords}`).then(
                 response => {
                    // 请求成功更新list数据
                    this.$bus.$emit('updataListData',{isLoding:false,errMsg:'',users:response.data.items})
                 },
                 error => {
                    console.log('请求失败',error.message);
                    // 请求失败
                    this.$bus.$emit('updataListData',{isLoding:false,errMsg:error.message,users:[]})
                 }
            )
        }
    },
}
</script>

<style>

</style>