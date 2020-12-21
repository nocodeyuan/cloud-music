<template>
  <div class="home-page">
    <keep-alive>
      <div class="content-page">
        <!-- 公共头部 -->
        <header-part></header-part>

        <!-- 导航栏 -->
        <nav-bar
          class="nav-bar"
          :titleArr="titleArr"
          @sendIndex="getIndex"
        ></nav-bar>

        <!-- 滚动区 -->
        <scroll class="">
          <scroll-area :thatIndex="currentIndex"></scroll-area>
        </scroll>
      </div>
    </keep-alive>
  </div>
</template>

<script>
import HeaderPart from 'components/base/Header'
import ScrollArea from 'components/base/ScrollArea'

import NavBar from 'components/common/NavBar'
import Scroll from 'components/common/Scroll'

export default {
  name: 'Home',
  data() {
    return {
      titleArr: ['推荐音乐', '热歌榜', '搜索'],
      currentIndex: 0,
    }
  },
  methods: {
    getIndex(index) {
      this.currentIndex = index
    },
  },

  components: {
    HeaderPart,
    ScrollArea,
    NavBar,
    Scroll,
  },
}
</script>

<style lang="scss" scoped>
.home-page {
  position: relative;
  height: 100%;
  padding: 0;
  box-sizing: border-box;
  .content-page {
    height: 100%;
    .nav-bar {
      background-color: #fff;
    }
    .wrapper {
      position: absolute;
      top: 131px;
      left: 0;
      right: 0;
      bottom: 0;
      overflow: hidden;
    }
  }
}
</style>
