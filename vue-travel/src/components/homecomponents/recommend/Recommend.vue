<template>
  <div>
    <div class="title"> 热销推荐 </div>
    <ul>
      <li v-for="item of recommentList" :key="item.id">
        <div class="item border-bottom">
          <img class="item-img" :src="item.imageUrl"/>
          <div class="item-info">
            <p class="item-title">{{ item.title }}}</p>
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
  data () {
    return {
      recommentList: [
        {
          id: '0001',
          imageUrl: 'http://img1.qunarzz.com/sight/p17/201211/03/fb0db8863fa316d993835fbb.jpg_200x200_d338b0f7.jpg',
          title: '白霜涧风景区',
          desc: '描述内容'
        }, {
          id: '0002',
          imageUrl: 'http://img1.qunarzz.com/sight/p17/201211/03/fb0db8863fa316d993835fbb.jpg_200x200_d338b0f7.jpg',
          title: '白霜涧风景区',
          desc: '描述内容'
        }, {
          id: '0003',
          imageUrl: 'http://img1.qunarzz.com/sight/p17/201211/03/fb0db8863fa316d993835fbb.jpg_200x200_d338b0f7.jpg',
          title: '白霜涧风景区',
          desc: '描述内容'
        }, {
          id: '0004',
          imageUrl: 'http://img1.qunarzz.com/sight/p17/201211/03/fb0db8863fa316d993835fbb.jpg_200x200_d338b0f7.jpg',
          title: '白霜涧风景区',
          desc: '描述内容'
        }, {
          id: '0005',
          imageUrl: 'http://img1.qunarzz.com/sight/p17/201211/03/fb0db8863fa316d993835fbb.jpg_200x200_d338b0f7.jpg',
          title: '白霜涧风景区',
          desc: '描述内容'
        }, {
          id: '0006',
          imageUrl: 'http://img1.qunarzz.com/sight/p17/201211/03/fb0db8863fa316d993835fbb.jpg_200x200_d338b0f7.jpg',
          title: '白霜涧风景区',
          desc: '描述内容'
        }, {
          id: '0007',
          imageUrl: 'http://img1.qunarzz.com/sight/p17/201211/03/fb0db8863fa316d993835fbb.jpg_200x200_d338b0f7.jpg',
          title: '白霜涧风景区',
          desc: '描述内容'
        }, {
          id: '0008',
          imageUrl: 'http://img1.qunarzz.com/sight/p17/201211/03/fb0db8863fa316d993835fbb.jpg_200x200_d338b0f7.jpg',
          title: '白霜涧风景区',
          desc: '描述内容'
        }, {
          id: '0009',
          imageUrl: 'http://img1.qunarzz.com/sight/p17/201211/03/fb0db8863fa316d993835fbb.jpg_200x200_d338b0f7.jpg',
          title: '白霜涧风景区',
          desc: '描述内容'
        }, {
          id: '00010',
          imageUrl: 'http://img1.qunarzz.com/sight/p17/201211/03/fb0db8863fa316d993835fbb.jpg_200x200_d338b0f7.jpg',
          title: '白霜涧风景区',
          desc: '描述内容'
        }, {
          id: '00011',
          imageUrl: 'http://img1.qunarzz.com/sight/p17/201211/03/fb0db8863fa316d993835fbb.jpg_200x200_d338b0f7.jpg',
          title: '白霜涧风景区',
          desc: '描述内容'
        }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~common/stylus/index.styl"
  .title
    margin-top .1rem
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
