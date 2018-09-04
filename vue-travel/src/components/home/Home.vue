<template>
  <div>
    <h-header></h-header>
    <h-swiper></h-swiper>
    <h-icons></h-icons>
    <home-recommend></home-recommend>
    <home-weekend-where></home-weekend-where>
  </div>

</template>

<script>

import HHeader from 'components/homecomponents/h-header'
import HSwiper from 'components/homecomponents/Swiper'
import HIcons from 'components/homecomponents/Icons'
import HomeRecommend from 'components/homecomponents/Recommend'
import HomeWeekendWhere from 'components/homecomponents/WeekendWhere'

export default {
  name: 'Home',
  components: {
    HSwiper,
    HHeader,
    HIcons,
    HomeRecommend,
    HomeWeekendWhere
  }
}
</script>

<style scoped>

</style>
