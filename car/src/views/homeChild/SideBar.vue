<template>
  <el-menu
    router
    background-color="#333744"
    text-color="#fff"
    active-text-color="#ffd04b" width="200px">
    <el-menu-item index="/main" >
      <i class="el-icon-document"></i>
      <span slot="title">管理</span>
    </el-menu-item>
    <el-menu-item index="/recycle">
      <i class="el-icon-setting"></i>
      <span slot="title">回收站</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
  export default {
    name: "Sidebar"
  }
</script>

<style scoped>
  .el-menu {
    border: none;
  }
</style>
