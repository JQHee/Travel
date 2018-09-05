<template>
  <div>
    <h-header></h-header>
    <h-swiper :list="swiperList"></h-swiper>
    <h-icons :list="iconList"></h-icons>
    <home-recommend :list="recommendList"></home-recommend>
    <home-weekend-where :list="weekendList"></home-weekend-where>
  </div>

</template>

<script>

import HHeader from 'components/homecomponents/Header'
import HSwiper from 'components/homecomponents/Swiper'
import HIcons from 'components/homecomponents/Icons'
import HomeRecommend from 'components/homecomponents/Recommend'
import HomeWeekendWhere from 'components/homecomponents/WeekendWhere'
import axios from 'axios'

export default {
  name: 'Home',
  components: {
    HSwiper,
    HHeader,
    HIcons,
    HomeRecommend,
    HomeWeekendWhere
  },
  data () {
    return {
      iconList: [],
      swiperList: [],
      recommendList: [],
      weekendList: []
    }
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json').then(this.getHomeInSuccess)
    },
    getHomeInSuccess (res) {
      console.log(res)
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
    }
  },
  mounted () {
    this.getHomeInfo()
  },
  activated () {
    // 使用keep-alive之后，多的生命周期函数
    // 城市切换后在这做网络请求
  }
}
</script>

<style scoped>

</style>
