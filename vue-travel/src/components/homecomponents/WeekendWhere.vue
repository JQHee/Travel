<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li v-for="item of list" :key="item.id">
        <div class="item">
          <div class="item-img-wrapper">
            <img class="item-img" :src="item.imgUrl"/>
          </div>
          <div class="item-info">
            <p class="item-title">{{ item.title }}</p>
            <p class="item-desc">{{ item.desc }}</p>
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
  .title
    line-height .8rem
    background-color #ee
    padding-left .13rem
  .item-img-wrapper
    overflow hidden
    height 0
    padding-bottom 33.44%
    .item-img
      width 100%
  .item-info
    padding .1rem .1rem
  .item-title
    line-height .54rem
    font-size .32rem
    ellipsis()
  .item-desc
    color #ccc
    line-height .54rem
    ellipsis()

</style>
