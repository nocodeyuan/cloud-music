<template>
  <div>
    <div class="container" v-show="thatIndex === 0">
      <recommend></recommend>
    </div>
    <div class="container" v-show="thatIndex === 1">
      <hot-list></hot-list>
    </div>
    <div class="container" v-show="thatIndex === 2">
      <search-for></search-for>
    </div>
  </div>
</template>

<script>
import Recommend from 'components/recommend/Recommend'
import HotList from 'components/hotList/HotList'
import SearchFor from 'components/searchFor/SearchFor'

export default {
  name: 'ScrollArea',
  props: {
    thatIndex: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  components: { Recommend, HotList, SearchFor },
}
</script>

<style lang="scss" scoped>
.container {
  padding-top: 20px;
}
</style>
