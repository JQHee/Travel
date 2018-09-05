<template>
  <div>
    <div class="search">
      <input v-model="keywords" class="search-input" type="text" placeholder="请输入城市的名或拼音"/>
    </div>
    <div class="search-content" v-show="keywords" ref="search">
      <ul>
        <li class="search-content-item border-bottom"
            v-for="item of list"
            :key="item.id"
            @click="handleSeletedCityClick(item.name)"
        >{{ item.name }}</li>
        <li class="search-content-item" v-show="nodata">没有匹配内容</li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keywords: '',
      list: [],
      timer: null
    }
  },
  computed: {
    nodata () {
      return !this.list.length
    }
  },
  watch: {
    keywords () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keywords) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.name.indexOf(this.keywords) > -1 || value.spell.indexOf(this.keywords) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  methods: {
    handleSeletedCityClick (city) {
      this.$store.commit('changeCity', city)
      this.$router.push('/')
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.search)
  }
}
</script>

<style lang="stylus" scoped>
  @import "~common/stylus/index.styl"
  .search
    overflow hidden
    height .64rem
    line-height .64rem
    padding 0 .1rem
    background-color $themecolor
    .search-input
      box-sizing border-box
      color #666
      width 100%
      text-align center
      padding 0 .1rem
      border-radius .03rem
  .search-content
    z-index 1
    overflow hidden
    position absolute
    top 1.52rem
    left 0
    right 0
    bottom 0
    background-color #eee
    .search-content-item
      line-height .8rem
      height .8rem
      background-color #fff
      color #666
      padding-left .2rem
</style>
