<template>
  <div
    class="daily-item"
    v-for="item in dailyArr"
    :key="item.id"
    @click="playAudio(item.id)"
  >
    <div class="song-space">
      <div class="song-title">{{ item.name }}</div>
      <div class="song-info">
        <span></span>
        {{ item.ar[0].name }}-{{ item.alia[0] || item.name }}
      </div>
    </div>
    <div class="iconfont icon-play"></div>
  </div>
</template>

<script>
export default {
  name: 'PlayList',
  props: {
    dailyArr: {
      type: Array,
      require: true,
      default: [],
    },
  },
  methods: {
    playAudio(id) {
      this.$router.push('/record/' + id)
    },
  },
}
</script>

<style lang="scss" scoped>
.daily-item {
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #e0e0e0;
  padding: 10px 10px 5px;
  .song-space {
    width: 92%;

    .song-title {
      font-size: 17px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      -o-text-overflow: ellipsis;
    }
    .song-info {
      font-size: 12px;
      color: #888;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      -o-text-overflow: ellipsis;
    }
  }
  .iconfont {
    font-size: 25px;
    color: #888;
  }
}
</style>
