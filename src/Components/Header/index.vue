<template>
  <div>
    <div class="header">
      <div class="top">
        <div class="vavtar">
          <img
            width="100px"
            height="100px"
            src="https://fuss10.elemecdn.com/8/40/02872ce8aefe75c16d3190e75ad61jpeg.jpeg"
          />
        </div>
        <div class="info">
          <div class="title">
            <i class="brand"></i>
            <span class="name">狗不理包子(昌平店)</span>
          </div>
          <div class="desc">
            <span class="desc-del">蜂鸟专送/30分钟送达</span>
          </div>
          <div class="support">
            <v-icon class="icon" size="2" type="decrease"></v-icon>
            <span class="text">在线支付满28送老板娘 ></span>
          </div>
        </div>
      </div>
      <div class="btn">
        <span>5個</span>
        <i class="icon-keyboard_arrow_right"></i>
      </div>
      <div class="bulletin" @click="openOrcloseMask">
        <div class="icon">
          <i></i>
        </div>
        <p class="text">
          是以粥为特色的中式营养快餐，自2004年10月18日创立“嘉和一品”品牌至今，不断优化管理，积极创新，立足于“贴近百姓生活，服务千家万户”
        </p>
        <div class="arrow">
          <i class="icon-keyboard_arrow_right"></i>
        </div>
      </div>
      <div class="mask" v-show="flag">
        <div class="mainWrap">
          <div class="main">
            <!-- 遮罩 -->
          </div>
        </div>
        <div class="footer">
          <i class="icon-close" @click="openOrcloseMask"></i>
        </div>
      </div>
      <div class="bg">
        <img
          src="https://fuss10.elemecdn.com/f/5c/ead54394c3de198d3e6d3e9111bbfpng.png"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import icon from "components/icon/icon.vue";
export default {
    name: 'Header',
    components: {
      'v-icon': icon
    },
    data() {
      return {
        flag: false
      }
    },
    methods: {
      openOrcloseMask() {
        this.flag = !this.flag
      }
    },
}
</script>

<style lang="stylus" scoped rel="stylesheet/stylus">
@import "../../common/styuls/mixin.styl"
@import "../../common/styuls/extend";
.header
    width 100%
    height  134px
    overflow hidden
    position relative
    box-sizing border-box
    background-color rgba(7,17,27,0.5)
    .top
        position relative
        box-sizing border-box
        height 106px
        overflow hidden
        padding 24px 12px 18px 24px
        .vavtar
            float left
            margin-right 10px
            img
                width 64px
                height 64px
        .info
            color #fff
            float left
            .title
              .name
                  font-size 16px
                  font-weight bold
                  line-height 18px
              .brand
                 bg-image(brand)
                 display inline-block
                 width 30px
                 height 18px
                 vertical-align middle
                 background-size 100%
                 background-repeat no-repeat
                 margin-right 6px

            .desc
              margin 6px 0
              span
                font-size 12px
                font-weight 200
                line-height 12px
            .support
              .text
                font-size 10px
                font-weight 200
                line-height 12px
              .icon
                vertical-align middle
                font-size 10px
    .bg
      position absolute
      top 0
      left 0
      bottom 0
      right 0
      z-index -1
      filter blur(3px)
      img
        width 100%
        height 100%
    .btn
      width 40px
      height  24px
      font-size 10px
      font-weight 200
      line-height 24px
      border-radius 8px
      color #fff
      display flex
      justify-content space-around
      align-items center
      position absolute
      right 24px
      bottom 44px
      background rgba(0,0,0,.2)
      span
        margin-left 2px

    .bulletin
      height 28px
      color #fff
      display flex
      align-items center
      background rgba(7,17,27,.2)
      font-size 10px
      .icon
        flex-basis 26px
        margin-left 12px
        & > i
          display inline-block
          width 22px
          height 12px
          background-size 100%
          background-repeat no-repeat
          bg-image(bulletin)
      .text
        flex 1
        white-space nowrap
        text-overflow ellipsis
        overflow hidden
      .arrow
        flex-basis 26px
    .mask
      position fixed
      left 0
      top 0
      left 0
      bottom 0
      z-index 9
      background-color rgba(7,17,27,.8)
      overflow auto
      width 100%
      .mainWrap
        min-height 100%
        .main
          @extend .clearfix
          padding-bottom 96px
      .footer
        margin-top -96px
        line-height 96px
        height 96px
        color #fff
        text-align center
        font-size 32px
</style>
