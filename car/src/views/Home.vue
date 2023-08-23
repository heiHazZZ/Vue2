<template>
  <el-container class="home-container">
    <el-header>
      <div>账单管理</div>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <side-bar></side-bar>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  import SideBar from "./homeChild/SideBar";

  export default {
    name: "home",
    components: {
      SideBar
    }
  }
</script>

<style scoped>
  .home-container {
    height: 100%;
  }

  .el-header {
    background-color: #373D41;
    text-align: center;
    line-height: 60px;
    color: #fff;
    font-size: 20px;
  }

  .el-aside {
    background-color: #333744;
  }

  .el-main {
    background-color: #ededf1;
  }
</style>
