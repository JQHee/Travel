<template>
  <div>
    <h-header></h-header>
    <h-swiper></h-swiper>
    <h-icons></h-icons>
    <home-recommend></home-recommend>
  </div>

</template>

<script>

import HHeader from 'components/homecomponents/h-header/h-header'
import HSwiper from 'components/homecomponents/swiper/Swiper'
import HIcons from 'components/homecomponents/icons/Icons'
import HomeRecommend from 'components/homecomponents/recommend/Recommend'

export default {
  name: 'Home',
  components: {
    HSwiper,
    HHeader,
    HIcons,
    HomeRecommend
  }
}
</script>

<style scoped>

</style>
