<template>
  <div class="audio-player">
    <div class="img-area ">
      <img :src="imgUrl" alt="图片请求异常" ref="img" />
    </div>
    <div class="control">
      <audio :src="songUrl" autoplay loop preload="auto" ref="player"></audio>
      <span class="iconfont icon-left"></span>
      <span class="iconfont icon-Pause" v-show="playA" @click="stop"></span>
      <span class="iconfont icon-play1" v-show="!playA" @click="start"></span>
      <span class="iconfont icon-right"></span>
    </div>
  </div>
</template>

<script>
import { getSongUrl, getImgUrl } from '@/api/playlist'

export default {
  name: 'Record',
  /**
   * sid      歌曲id
   * songUrl  音乐文件路径
   * imgUrl   封面图片路径
   * playA    控制音乐播放
   * deg      图片旋转角度
   * interval 图片旋转定时器
   */
  data() {
    return {
      sid: 0,
      songUrl: '',
      imgUrl: '',
      playA: true,
      deg: 0,
      interval: null,
    }
  },
  created() {
    this.clear()
    this.sid = this.$route.params.id
    if (!this.songUrl) {
      getSongUrl(this.sid).then((res) => {
        this.songUrl = res.data.data[0].url
      })
    }
    if (!this.imgUrl) {
      getImgUrl(this.sid).then((res) => {
        this.imgUrl = res.data.songs[0].al.picUrl
      })
    }
  },
  //组件挂载即开启定时器
  mounted() {
    this.clear()
    this.increment(1, 100)
  },
  //监视图片角度变化
  watch: {
    deg() {
      this.$refs.img.style.transform = `rotateZ(${this.deg}deg)`
    },
  },
  methods: {
    //暂停音乐
    stop() {
      this.$refs.player.pause()
      this.playA = !this.playA
      this.clear()
      this.deg = Number(this.$refs.img.style.transform.match(/\d+/g))
    },
    //播放音乐dddd
    start() {
      this.$refs.player.play()
      this.playA = !this.playA
      this.clear()
      this.increment(1, 100)
    },
    //设置定时器
    increment(deg, delay) {
      this.interval = setInterval(() => {
        console.log(this.deg)
        this.deg === 360 ? (this.deg = 0) : (this.deg += deg)
      }, delay)
    },
    clear() {
      if (this.interval) clearInterval(this.interval)
    },
  },

  /**
   *
   * Bad code.
   * CSS做的动画，暂停后重新播放角度数据不好通过js控制，不好
   */

  // computed: {
  //   play() {
  //     return this.playA ? 'routate' : ''
  //   },
  // },
}
</script>

<style lang="scss" scoped>
// .routate {
//   animation: turn 10s linear infinite;
// }

// @keyframes turn {
//   from {
//     transform: rotate(0deg);
//   }
//   to {
//     transform: rotate(360deg);
//   }
// }

.audio-player {
  height: 100%;
  display: flex;
  justify-content: center;
  background: radial-gradient(at 50% 100%, #000, #2b121e, #4d2539, #9b7d81);
  overflow: hidden;

  .img-area {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 110px;
    width: 22em;
    height: 22em;
    background: radial-gradient(
      at 50% 50%,
      #0c0b0b,
      #2b121e,
      #ad989b,
      #756567,
      #9b7d81,
      #756567,
      #ad989b,
      #9b7d81,
      #0c0b0b
    );
    border-radius: 50%;
    box-shadow: -10px, 0, 10px, rgba(187, 180, 180, 0.8);
    &::before {
      content: '';
      width: 20em;
      height: 20em;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 50%;
      background: radial-gradient(at 50% 50%, #000, #191a1b, #000);
      box-shadow: -10px, 10px, 1px, rgba(61, 52, 52, 0.8);
    }
    img {
      position: relative;
      z-index: 2;
      width: 14em;
      height: 14em;
      overflow: hidden;
      border-radius: 50%;
    }
  }
  .control {
    position: absolute;
    left: 50%;
    bottom: 6em;
    transform: translate(-40%);
    width: 60%;
    display: flex;
    justify-content: space-evenly;
    background: transparent;
    span {
      flex: 1;
      font-size: 40px;
      color: #e0e0e0;
    }
  }
}
</style>
