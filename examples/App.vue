<template>
  <div id="app">
    <router-link class="page-back" v-if="visible" :to="'/'">
      <i class="mintui mintui-back"></i>
    </router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    visible () {
      return ['/', '/header', '/search'].indexOf(this.$route.path) < 0
    }
  }
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
.page-back {
  display: inline-block;
  /*position: absolute 12px * * 10px;*/
  width: 40px;
  height: 40px;
  text-align: center;
  i {
    font-size: 24px;
    line-height: 40px;
  }
}
</style>
