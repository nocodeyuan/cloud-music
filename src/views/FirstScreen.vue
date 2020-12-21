<template>
  <div class="icon">
    <logo class="svg"></logo>
  </div>
</template>

<script>
import Logo from 'components/base/LogoSVG'

export default {
  name: 'FirstScreen',
  mounted() {
    setTimeout(() => {
      this.$router.replace('/home')
    }, 2000)
  },
  components: {
    Logo,
  },
}
</script>

<style lang="scss" scoped>
.icon {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background: linear-gradient(45deg, #d43c33, #ff0e41);
  .svg {
    width: 50%;
    height: 20%;
  }
}
</style>
