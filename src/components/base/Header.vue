<template>
  <div class="header-item">
    <div class="top">
      <logo class="svg"></logo>
      <img
        :src="imgUrl"
        alt="avatarImg"
        :title="nickname"
        @click="jumpSetting"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import Logo from 'components/base/LogoSVG'

export default {
  name: 'Header',
  methods: {
    jumpSetting() {
      this.$router.push('/avatar')
    },
  },
  components: {
    Logo,
  },
  computed: {
    ...mapState('login', {
      imgUrl(state) {
        return state.pro_file.avatarUrl
      },
      nickname(state) {
        return state.pro_file.nickname
      },
    }),
  },
}
</script>

<style lang="scss" scoped>
.header-item {
  position: relative;
  box-sizing: border-box;
  height: 80px;
  line-height: 80px;
  width: 100vw;
  background: linear-gradient(45deg, #d43c33, #f00011, #ff0000);
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);

  .svg {
    height: 100%;
  }

  img {
    position: absolute;
    right: 10px;
    top: 14px;
    width: 50px;
    height: 50px;
    border: 2px soild #fff;
    background-color: #fff;
    border-radius: 50%;
  }
}
</style>
