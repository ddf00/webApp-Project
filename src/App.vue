<template>
  <div>
    <!-- 头部 -->
    <Header />
    <div class="navs">
      <div class="item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="item">
        <router-link to="/ratings">评价</router-link>
      </div>
      <div class="item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <!-- 一级路由显示区域 -->
    <router-view></router-view>
  </div>
</template>

<script>
import axios from "axios";
import Header from "components/Header";
export default {
  name: "App",
  components: {
    Header,
  },
  async mounted() {
    let seller = await axios.get("/api/seller");
    console.log(seller);
  },
};
</script>
<style lang="stylus" scoped rel="stylesheet/stylus">
@import "./common/styuls/mixin.styl";
#app
  width 100%
  height 100%
  overflow hidden
.navs
  one-px(rgb(7,17,27))
  display flex
  height 40px
  line-height 40px
  text-align center
  .item
    flex 1
    & > a
      display block
      width 100%
      height 100%
      font-weight bold
      &.active
        color rgba(240,20,20,1)
</style>
