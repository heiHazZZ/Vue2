<template>
  <div id="root">
  <Test/>
  <Test2/>
  <Test3/>
</div>
</template>

<script>
import Test from './commpents/Test'
import Test2 from './commpents/Test2'
import Test3 from './commpents/Test3'
export default {
    name:'App',
    components:{Test,Test2,Test3}
}
</script>
