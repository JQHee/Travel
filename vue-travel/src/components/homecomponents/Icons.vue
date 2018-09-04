<template>

  <div class="icons" v-if="showIcon">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide  v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-image">
            <img class="icon-image-content" :src="item.imgUrl">
          </div>
          <p class="icon-des">{{ item.desc }}</p>
        </div>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>

</template>

<script>
export default {
  name: 'Icons',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: false,
        autoplay: false
      }
    }
  },
  // 计算属性
  computed: {
    pages () {
      const pages = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    },
    showIcon () {
      return this.list.length
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~common/stylus/index.styl"
  .icons >>> .swiper-container
    height: 0
    padding-bottom: 50%
  .icons >>> .swiper-pagination-bullet-active
    background: $themecolor
  .icons
    margin-top .1rem
  .icon
    overflow: hidden
    width: 25%
    float: left
    height: 0
    padding-bottom: 25%
    position: relative
    .icon-image
      position: absolute
      left: 0
      top: 0
      right: 0
      bottom: .44rem
      box-sizing: border-box
      padding-top: .1rem
      .icon-image-content
        display: block
        margin: 0 auto
        height: 100%
    .icon-des
      position: absolute
      left: 0
      right: 0
      bottom: 0
      line-height: .44rem
      color: #333
      height: .44rem
      text-align: center
      ellipsis()
</style>
