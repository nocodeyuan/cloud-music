<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'App',
}
</script>
<style lang="scss">
#app {
  width: 100vw;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html,
body,
div,
h1,
h2,
h3,
h4,
h5,
h6,
input,
button,
span,
ul,
li {
  margin: 0;
  padding: 0;
}

html,
body,
#app {
  height: 100%;
}

li {
  list-style: none;
}

input {
  outline-style: none;
  border: none;
}
</style>
