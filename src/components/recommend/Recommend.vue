<template>
  <div class="item-container">
    <!-- 推荐列表 -->
    <title-item title="推荐歌单"></title-item>
    <recommend-item></recommend-item>
    <!-- 最新列表 -->
    <title-item title="每日推荐"></title-item>
    <play-list :dailyArr="dailyArr"></play-list>
  </div>
</template>

<script>
import TitleItem from '@/components/base/TitleItem'
import PlayList from '@/components/common/PlayList'
import RecommendItem from './RecommendItem'

import { getDailyList } from '@/api/recommend'

export default {
  name: 'Recommend',
  components: {
    TitleItem,
    RecommendItem,
    PlayList,
  },
  data() {
    return {
      dailyArr: [],
    }
  },
  created() {
    if (this.dailyArr.length === 0) {
      getDailyList().then((res) => {
        // console.log(res.data.data.dailySongs)
        this.dailyArr = res.data.data.dailySongs
      })
    }
  },
}
</script>

<style lang="scss" scoped></style>
