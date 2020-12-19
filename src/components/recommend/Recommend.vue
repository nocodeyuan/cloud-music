<template>
  <div class="item-container">
    <!-- 推荐列表 -->
    <title-item title="推荐歌单"></title-item>
    <recommend-item></recommend-item>
    <!-- 最新列表 -->
    <title-item title="最新音乐"></title-item>
  </div>
</template>

<script>
import TitleItem from '@/components/base/TitleItem'
import RecommendItem from './RecommendItem'

export default {
  name: 'Recommend',
  components: {
    TitleItem,
    RecommendItem,
  },
}
</script>

<style lang="scss" scoped></style>
