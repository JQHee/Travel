<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="item of swiperList" :key="item.id">
          <img class="swipe-img" :src="item.imageUrl" alt="去哪儿门票" >
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [
        {
          id: '0001',
          imageUrl: 'http://img1.qunarzz.com/piao/fusion/1808/8a/1957a0fb58ad0402.jpg_750x200_e72b8c0f.jpg'
        },
        {
          id: '0002',
          imageUrl: 'http://img1.qunarzz.com/piao/fusion/1808/18/2dbce82b07a23402.jpg_750x200_14356b03.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background: #fff
  .wrapper
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 26.67%
    background-color: #eee
    .swipe-img
      width: 100%
</style>
