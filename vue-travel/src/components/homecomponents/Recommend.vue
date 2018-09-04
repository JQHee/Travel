<template>
  <div>
    <div class="title"> 热销推荐 </div>
    <ul>
      <li v-for="item of list" :key="item.id">
        <div class="item border-bottom">
          <img class="item-img" :src="item.imgUrl"/>
          <div class="item-info">
            <p class="item-title">{{ item.title }}</p>
            <p class="item-desc">{{ item.desc }}</p>
            <button class="item-button">查看详情</button>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
  @import "~common/stylus/index.styl"
  .title
    line-height .8rem
    background-color #ee
    padding-left .13rem
  .item
    display flex
    .item-img
      width 1.7rem
      height 1.7rem
      padding-left .12rem
      padding-top .12rem
    .item-info
      flex 1
      padding .1rem .1rem
      .item-title
        line-height .54rem
        font-size .32rem
        ellipsis()
      .item-desc
        color #ccc
        line-height .54rem
        ellipsis()
      .item-button
        background-color #ff9300
        padding 0 .1rem
        border-radius .03rem
        color #fff

</style>
