<template>
  <div id="app">
      <home></home>
  </div>
</template>

<script>

  import Home from "./views/Home";

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style>
  html,body,#app{
    height: 100%;
    margin: 0px;
    padding: 0px;
  }
</style>
