<template>
  <div class="list" >
    <div class="item" v-for="(innerItem, key) of cities" :key="key">{{key}}</div>
  </div>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  }
}
</script>

<style lang="stylus" scoped>
  @import "~common/stylus/index.styl"
  .list
    display flex
    flex-direction column
    justify-content center
    position absolute
    top 1.52rem
    bottom 0
    right 0
    width .4rem
    .item
      text-align center
      line-height .44rem
      color $themecolor
</style>
