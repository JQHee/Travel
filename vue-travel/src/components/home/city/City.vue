<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list :cities="cities" :hot="hotCityList"></city-list>
    <city-alphabet :cities="cities"></city-alphabet>
  </div>
</template>

<script>

import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
import axios from 'axios'

export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data () {
    return {
      hotCityList: [],
      cities: {}
    }
  },
  methods: {
    getCityInfo () {
      axios.get('/api/city.json').then(this.handGetCitySuccess)
    },
    handGetCitySuccess (res) {
      console.log(res)
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.hotCityList = data.hotCities
        this.cities = data.cities
        this.name = 'hjq'
      }
    }
  },
  mounted () {
    this.getCityInfo()
  }
}
</script>

<style lang="stylus" scoped>

</style>
