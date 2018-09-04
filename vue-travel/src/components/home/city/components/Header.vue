<template>
  <div class="header">
    选择城市
    <router-link to="/">
      <div class="header-back"><div class="iconfont">&#xe624;</div></div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
  @import "~common/stylus/index.styl"
  .header
    overflow hidden
    position relative
    height $headerHeight
    line-height $headerHeight
    text-align center
    background-color $themecolor
    color white
    font-size .32rem
    .header-back
      position absolute
      color #fff
      left 0
      top 0
      bottom 0
      width .64rem
      text-align center

</style>
