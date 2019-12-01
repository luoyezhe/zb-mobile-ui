<template>
  <div class="zb-dropdown-menu">
    <van-dropdown-menu>
      <van-dropdown-item v-model="curVal" :options="options" @change="change"/>
    </van-dropdown-menu>
  </div>
</template>

<script>
import { DropdownMenu, DropdownItem } from 'vant'
export default {
  name: 'ZbDropdownMenu',
  components: { DropdownMenu, DropdownItem },
  data () {
    return {
      curVal: null
    }
  },
  props: {
    options: {
      type: Array,
      default: () => []
    },
    value: {
      type: [String, Number]
    }
  },
  created () {

  },
  methods: {
    init () {
      this.curVal = this.value || null
    },
    change (value) {
      this.$emit('input', value)
    }
  }
}
</script>

<style scoped lang="scss">
@import "../index";
</style>
