<template>
  <div class="container">
    <Count/>
    <hr>
    <Person/>
  </div>
</template>

<script>
import Count from './commpents/Count'
import Person from './commpents/Person'
export default {
    name:'App',
    components:{Count,Person},
    mounted() {
      console.log(this);
    },
    
}
</script>