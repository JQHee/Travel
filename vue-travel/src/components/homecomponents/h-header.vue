<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span> 输入城市/景点/游玩主题
    </div>
    <div class="header-right">
      {{city}}<span class="iconfont arrow-icon">&#xe6aa;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'h-header',
  props: {
    city: String
  }
}
</script>

<style lang="stylus" scoped>
  @import '~common/stylus/index.styl'
  .header
    line-height: .86rem
    color: #fff
    background-color: $themecolor
    display: flex
    .header-left
      float: left
      width: .64rem
      text-align: center
    .header-input
      flex: 1
      background: #fff
      color: #ccc
      margin-top: .12rem
      height: .64rem
      line-height: .64rem
      border-radius: .1rem
      padding-left: .1rem
    .header-right
      width: 1.24rem
      float: right
      text-align: center
      .arrow-icon
        width: .2rem
        height: .2rem
</style>
