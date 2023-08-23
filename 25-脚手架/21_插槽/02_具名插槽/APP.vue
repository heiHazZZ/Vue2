<template>
  <div class="container">
    <Category title="美食">
      <img slot="center" src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="">
      <a slot="footer" href="https://www.bilibili.com/v/food?spm_id_from=333.1007.0.0">更多美食</a>
    </Category>
    <Category title="游戏">
      <ul slot="center">
        <li v-for="(item,index) in games" :key="index">{{item}}</li>
      </ul>
      <div class="foot" slot="footer">
        <a href="https://www.bilibili.com/v/game/stand_alone">单击游戏</a>
        <a href="https://www.bilibili.com/v/game/online">网络游戏</a>
      </div>
    </Category>
    <Category title="电影">
      <!-- controls 给视频添加播放按钮 -->
      <video slot="center" controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
      <template v-slot:footer>
       <div class="foot">
        <a slot="footer" href="">经典</a>
        <a slot="footer" href="">热门</a>
        <a slot="footer" href="">推荐</a>
      </div>
      <h4>欢迎前来观影！</h4>
      </template>
    </Category>
  </div>
</template>

<script>
import Category from './commpents/Category'
export default {
    name:'App',
    components:{Category},
    data() {
      return {
        foods:['火锅','烧烤','小龙虾','牛排'],
        games:['红色警戒','穿越火线','劲舞团','超级玛丽'],
        movies:['《教父》','《拆弹专家》','《你好，李焕英》','《尚硅谷》'],
      }
    },
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