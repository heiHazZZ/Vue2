<template>
  <div class="container">
    <Search/>
    <List/>
  </div>
</template>

<script>
import Search from './commpents/Search.vue'
import List from './commpents/List.vue'
export default {
    name:'App',
    components:{Search,List}
}
</script>

<style>
  
</style>