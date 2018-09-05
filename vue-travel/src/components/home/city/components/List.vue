<template>
  <div class="list" ref="wrapper">
    <div class="content">
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper" >
            <div class="button">{{currentCity}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list" >
          <div class="button-wrapper"
               v-for="item of hot"
               :key="item.id"
          >
            <div class="button" @click="handleSeletedCityClick(item.name)">{{ item.name }}</div>
          </div>
        </div>
      </div>
      <div class="list-item">
        <div class="item"
             v-for="(item, key) of cities"
             :key="key"
             :ref="key"
        >
          <div class="title border-topbottom" > {{ key }} </div>
          <div class="item-name border-bottom"
               v-for="innerItem of item"
               :key="innerItem.id"
               @click="handleSeletedCityClick(innerItem.name)"
          >{{ innerItem.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
// 把state直接映射到计算属性中
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'CityList',
  props: {
    cities: Object,
    hot: Array,
    letter: String
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  },
  watch: {
    letter () {
      if (this.letter) {
        const e = this.$refs[this.letter][0]
        this.scroll.scrollToElement(e)
      }
    }
  },
  methods: {
    handleSeletedCityClick (city) {
      // this.$store.commit('changeCity', city)
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  computed: {
    ...mapState({
      currentCity: 'city'
    })
  }
}
</script>

<style lang="stylus" scoped>
  @import "~common/stylus/index.styl"
  .border-topbottom
    &:before
      border-color #ccc
    &:after
      border-color #ccc
  .border-bottom
    &:before
      border-color #ccc
  .list
    overflow hidden
    position absolute
    left 0
    top 1.52rem
    right 0
    bottom 0
    .title
      line-height .4rem
      padding-left .2rem
      color #666
      background-color #eee
      font-size .26rem
    .button-list
      overflow hidden
      padding .1rem .6rem .1rem .1rem
      .button-wrapper
        float left
        width 33.33%
        .button
          margin .1rem
          padding .1rem 0
          text-align center
          border .02rem solid #ccc
          border-radius .06rem
    .item-name
      line-height .70rem
      padding-left .2rem
</style>
