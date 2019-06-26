<template>
<div id="app">
  <router-view></router-view>
</div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style scoped lang="scss">
@import "../packages/style/colors.scss";
body {
  color: $text-color;
  font-family: 'PingFang SC', Helvetica, 'STHeiti STXihei', 'Microsoft YaHei', Tohoma, Arial, sans-serif;
  line-height: 1;
  background-color: $background-color;
  -webkit-font-smoothing: antialiased;
}
::-webkit-scrollbar {
  width: 0;
  background: transparent;
}
</style>
