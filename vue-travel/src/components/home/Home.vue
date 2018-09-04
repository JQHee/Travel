<template>
  <div>
    <h-header></h-header>
    <h-swiper></h-swiper>
    <h-icons></h-icons>
  </div>

</template>

<script>

import HHeader from 'components/h-header/h-header'
import HSwiper from 'components/swiper/Swiper'
import HIcons from 'components/icons/Icons'

export default {
  name: 'Home',
  components: {
    HSwiper,
    HHeader,
    HIcons
  }
}
</script>

<style scoped>

</style>
