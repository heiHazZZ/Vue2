<template>
    <ul>
        <li>news001 <input type="text"> </li>
        <li>news002 <input type="text"> </li>
        <li>news003 <input type="text"> </li>
    </ul>
</template>

<script>
export default {
    name:'News',
    beforeCreate() {
        console.log('New即将被销毁');
    },
}
</script>

<style>

</style>