<template>
  <div class="zb-cell">
    <div class="zb-cell-title" :style="{minWidth: width + 'px'}">{{title}}</div>
    <div class="zb-cell-content">
      {{content}}
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ZbCell',
  props: {
    title: String,
    content: [String, Number],
    width: {
      type: Number,
      default: () => 100
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../index";
</style>
