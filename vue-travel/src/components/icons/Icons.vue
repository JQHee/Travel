<template>

  <div class="icons">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide  v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-image">
            <img class="icon-image-content" :src="item.imageUrl">
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
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: false,
        autoplay: false
      },
      iconsList: [
        {
          id: '0001',
          imageUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          desc: '景点门票景点门票景点门票'
        }, {
          id: '0002',
          imageUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          desc: '景点门票'
        }, {
          id: '0003',
          imageUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          desc: '景点门票'
        }, {
          id: '0004',
          imageUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          desc: '景点门票'
        }, {
          id: '0005',
          imageUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          desc: '景点门票'
        }, {
          id: '0006',
          imageUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          desc: '景点门票'
        }, {
          id: '0007',
          imageUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          desc: '景点门票'
        }, {
          id: '0008',
          imageUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          desc: '景点门票'
        }, {
          id: '0009',
          imageUrl: 'http://img1.qunarzz.com/piao/fusion/1803/96/c70f1e85ae4a4f02.png',
          desc: '自然风光'
        }]
    }
  },
  // 计算属性
  computed: {
    pages () {
      const pages = []
      this.iconsList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
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
