<template>
  <div class="content">
    <!-- 导航部分 -->
    <div class="nav-title">
      <span
        :class="index === currentIndex ? 'selected' : ''"
        v-for="(item, index) in titleArr"
        :key="index"
        @click="changeIndex(index)"
        >{{ item }}</span
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    titleArr: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      currentIndex: 0,
    }
  },
  methods: {
    changeIndex(index) {
      this.currentIndex = index
      this.$emit('sendIndex', index)
    },
  },
}
</script>

<style lang="scss" scoped>
.content {
  width: 100%;
  .nav-title {
    display: flex;
    justify-content: space-around;
    border-bottom: 1px solid #e0e0e0;
    height: 50px;
    line-height: 50px;
    .selected {
      color: #ff0000;
      border-bottom: 3px solid #dd001b;
    }
  }
}
</style>
