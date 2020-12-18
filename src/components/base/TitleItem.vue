<template>
  <h3>{{ title }}</h3>
</template>

<script>
export default {
  name: 'TitleItem',
  props: {
    title: {
      type: String,
      required: true,
      default: '标题',
    },
  },
}
</script>

<style lang="scss" scoped>
h3 {
  font-weight: normal;
  border-left: 3px solid #dd001b;
  padding-left: 10px;
  margin-bottom: 14px;
}
</style>
