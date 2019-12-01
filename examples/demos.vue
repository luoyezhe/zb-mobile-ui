<template>
  <div>
    demo page
    <!--<section class="page-demo">-->
      <!--<div v-for="(group, index) in navs" :key="index">-->
        <!--<div class="page-title" v-text="group.title"></div>-->
        <!--<zb-cell-->
        <!--v-for="(item, childIndex) in group.list"-->
        <!--:to="item.path"-->
        <!--:key="childIndex"-->
        <!--is-link>-->
        <!--<div slot="title">-->
        <!--<i :class="['indexicon', 'icon-' + item.icon]"></i>-->
        <!--<span>{{ item.name }}</span>-->
        <!--</div>-->
        <!--</zb-cell>-->
      <!--</div>-->
    <!--</section>-->
  </div>
</template>

<script>
import { navs } from './route';
export default {
  data() {
    return {
      navs: []
    }
  },
  created() {
    this.navs = navs
  }
}
</script>
<style lang="scss" scoped>
.page-demo {
  padding-bottom: 50px;
}
</style>
