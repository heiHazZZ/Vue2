<template>
  <div class="container">
    <Category title="游戏">
      <template scope="atguigu">
        <ul>
          <li v-for="(item,index) in atguigu.games" :key="index">{{item}}</li>
        </ul>
      </template>
    </Category>
    <Category title="游戏">
      <template scope="{games}">
        <ol>
          <li v-for="(item,index) in games" :key="index">{{item}}</li>
        </ol>
      </template>
    </Category>
    <Category title="游戏">
      <template slot-scope="{games}">
        <h4 v-for="(item,index) in games" :key="index">{{item}}</h4>
      </template>
    </Category>
  </div>
</template>

<script>
import Category from './commpents/Category'
export default {
    name:'App',
    components:{Category},
    
}
</script>

<style>
  .container,.foot {
    display: flex;
    justify-content: space-around;
  }
  .container img {
    width: 100%;
  }
  .container video {
    width: 100%;
  }
  h4 {
    text-align: center;
  }
</style>