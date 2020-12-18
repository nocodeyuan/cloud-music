<template>
  <div class="list-container">
    <div class="list-item" v-for="item in commendList" :key="item.id">
      <a :href="'https://y.music.163.com/m/playlist?id=' + item.id">
        <div class="img-container">
          <img :src="item.coverImgUrl" :alt="item.copywriter" />
          <span>{{ item.copywriter }}</span>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
import { getCommendList } from '@/api/recommend'

export default {
  name: 'RecommendItem',
  data() {
    return {
      commendList: [],
    }
  },
  created() {
    if (!(this.commendList.length > 0)) {
      getCommendList().then((res) => {
        this.commendList = res.data.playlists
      })
    }
  },
}
</script>

<style lang="scss" scoped>
.list-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-bottom: 40px;
  .list-item {
    width: 135px;
    height: 180px;
    box-sizing: border-box;
    margin: 5px 0 0;
    a {
      display: flex;
      flex-direction: column;
      font-size: 12px;
      color: #000;
      outline: none;
      text-decoration: none;
      img {
        width: 100%;
      }
      span {
        display: inline-block;
        padding: 4px;
        width: 100%;
        overflow: hidden;
      }
    }
  }
}
</style>
