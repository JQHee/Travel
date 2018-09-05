<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span> 输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{city}}<span class="iconfont arrow-icon">&#xe6aa;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
// 把state直接映射到计算属性中
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'h-header',
  computed: {
    ...mapState(['city']),
    ...mapGetters(['doubleCity'])
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
      overflow hidden
      min-width: 1.04rem
      padding 0 .1rem
      float: right
      text-align: center
      color #fff
      .arrow-icon
        width: .2rem
        height: .2rem
</style>
