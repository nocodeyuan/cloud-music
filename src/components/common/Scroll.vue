<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: 'Scroll',
  data() {
    return {
      scroll: null,
    }
  },
  mounted() {
    //$refs绑定元素
    if (!this.scroll) {
      this.scroll = new BScroll(this.$refs.wrapper, {
        mouseWheel: true,
        click: true,
        tap: true,
      })
      this.scroll.refresh()
      // console.log(this.scroll)
    } else if (!this.$refs.wrapper) {
      return
    } else {
      this.scroll.refresh()
    }
  },
}
</script>

<style lang="scss" scoped></style>
