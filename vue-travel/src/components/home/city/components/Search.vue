<template>
  <div class="search">
    <input class="search-input" type="text" placeholder="请输入城市的名或拼音"/>
  </div>
</template>

<script>
export default {
  name: 'CitySearch'
}
</script>

<style lang="stylus" scoped>
  @import "~common/stylus/index.styl"
  .search
    overflow hidden
    height .64rem
    line-height .64rem
    padding 0 .1rem
    background-color $themecolor
    .search-input
      box-sizing border-box
      color #666
      width 100%
      text-align center
      padding 0 .1rem
      border-radius .03rem
</style>
