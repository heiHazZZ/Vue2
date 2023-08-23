<template>
  <div class="container">
    <Count/>
  </div>
</template>

<script>
import Count from './commpents/Count'
export default {
    name:'App',
    components:{Count},
    mounted() {
      console.log(this);
    },
    
}
</script>