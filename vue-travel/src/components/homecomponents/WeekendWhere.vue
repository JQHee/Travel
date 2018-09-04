<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li v-for="item of weekendList" :key="item.id">
        <div class="item">
          <div class="item-img-wrapper">
            <img class="item-img" :src="item.imageUrl"/>
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
  data () {
    return {
      weekendList: [
        {
          id: '0001',
          imageUrl: 'http://img1.qunarzz.com/sight/source/1507/9f/f8dde5c968f8ac.jpg_r_640x214_83194a9b.jpg',
          title: '白霜涧风景区',
          desc: '描述内容'
        }, {
          id: '0002',
          imageUrl: 'http://img1.qunarzz.com/sight/source/1507/9f/f8dde5c968f8ac.jpg_r_640x214_83194a9b.jpg',
          title: '白霜涧风景区',
          desc: '描述内容'
        }, {
          id: '0003',
          imageUrl: 'http://img1.qunarzz.com/sight/source/1507/9f/f8dde5c968f8ac.jpg_r_640x214_83194a9b.jpg',
          title: '白霜涧风景区',
          desc: '描述内容'
        }, {
          id: '0004',
          imageUrl: 'http://img1.qunarzz.com/sight/source/1507/9f/f8dde5c968f8ac.jpg_r_640x214_83194a9b.jpg',
          title: '白霜涧风景区',
          desc: '描述内容'
        }, {
          id: '0005',
          imageUrl: 'http://img1.qunarzz.com/sight/source/1507/9f/f8dde5c968f8ac.jpg_r_640x214_83194a9b.jpg',
          title: '白霜涧风景区',
          desc: '描述内容'
        }, {
          id: '0006',
          imageUrl: 'http://img1.qunarzz.com/sight/source/1507/9f/f8dde5c968f8ac.jpg_r_640x214_83194a9b.jpg',
          title: '白霜涧风景区',
          desc: '描述内容'
        }, {
          id: '0007',
          imageUrl: 'http://img1.qunarzz.com/sight/source/1507/9f/f8dde5c968f8ac.jpg_r_640x214_83194a9b.jpg',
          title: '白霜涧风景区',
          desc: '描述内容'
        }, {
          id: '0008',
          imageUrl: 'http://img1.qunarzz.com/sight/source/1507/9f/f8dde5c968f8ac.jpg_r_640x214_83194a9b.jpg',
          title: '白霜涧风景区',
          desc: '描述内容'
        }, {
          id: '0009',
          imageUrl: 'http://img1.qunarzz.com/sight/source/1507/9f/f8dde5c968f8ac.jpg_r_640x214_83194a9b.jpg',
          title: '白霜涧风景区',
          desc: '描述内容'
        }, {
          id: '00010',
          imageUrl: 'http://img1.qunarzz.com/sight/source/1507/9f/f8dde5c968f8ac.jpg_r_640x214_83194a9b.jpg',
          title: '白霜涧风景区',
          desc: '描述内容'
        }, {
          id: '00011',
          imageUrl: 'http://img1.qunarzz.com/sight/source/1507/9f/f8dde5c968f8ac.jpg_r_640x214_83194a9b.jpg',
          title: '白霜涧风景区',
          desc: '描述内容'
        }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .title
    margin-top .1rem
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
