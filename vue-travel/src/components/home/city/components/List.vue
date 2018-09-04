<template>
  <div class="list" ref="wrapper">
    <div class="content">
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">南宁市</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">南宁市</div>
          </div>
          <div class="button-wrapper">
            <div class="button">南宁市</div>
          </div>
          <div class="button-wrapper">
            <div class="button">南宁市</div>
          </div>
          <div class="button-wrapper">
            <div class="button">南宁市</div>
          </div>
        </div>
      </div>
      <div class="list-item">
        <div class="item">
          <div class="title border-topbottom">A</div>
          <div class="item-name border-bottom">南宁市</div>
          <div class="item-name border-bottom">南宁市</div>
          <div class="item-name border-bottom">南宁市</div>
          <div class="item-name border-bottom">南宁市</div>
        </div>
        <div class="item">
          <div class="title border-topbottom">B</div>
          <div class="item-name border-bottom">南宁市</div>
          <div class="item-name border-bottom">南宁市</div>
          <div class="item-name border-bottom">南宁市</div>
          <div class="item-name border-bottom">南宁市</div>
        </div>
        <div class="item">
          <div class="title border-topbottom">C</div>
          <div class="item-name border-bottom">南宁市</div>
          <div class="item-name border-bottom">南宁市</div>
          <div class="item-name border-bottom">南宁市</div>
          <div class="item-name border-bottom">南宁市</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'CityList',
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  }
}
</script>

<style lang="stylus" scoped>
  @import "~common/stylus/index.styl"
  .border-topbottom
    &:before
      border-color #ccc
    &:after
      border-color #ccc
  .border-bottom
    &:before
      border-color #ccc
  .list
    overflow hidden
    position absolute
    left 0
    top 1.52rem
    right 0
    bottom 0
    .title
      line-height .4rem
      padding-left .2rem
      color #666
      background-color #eee
      font-size .26rem
    .button-list
      overflow hidden
      padding .1rem .6rem .1rem .1rem
      .button-wrapper
        overflow hidden
        float left
        width 33.33%
        .button
          margin .1rem
          padding .1rem 0
          text-align center
          border .02rem solid #ccc
          border-radius .06rem
    .item-name
      line-height .70rem
      padding-left .2rem
</style>
