<template>
  <div>
    <Header />
  <!-- 一级路由显示区域 -->
  <router-view></router-view>
  </div>
</template>

<script>
import Header from "./Components/Header";
export default {
  name: 'App',
  components: {
    Header
  },
}
</script>

<style>
h1 {
  color: red;
}
</style>
