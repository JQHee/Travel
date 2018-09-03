<template>
  <div>
    <h-header></h-header>
    <h-swiper></h-swiper>
    <div>test</div>
  </div>

</template>

<script>

import HHeader from 'components/h-header/h-header'
import HSwiper from 'components/swiper/Swiper'

export default {
  name: 'Home',
  components: {
    HSwiper,
    HHeader
  }
}
</script>

<style scoped>

</style>
