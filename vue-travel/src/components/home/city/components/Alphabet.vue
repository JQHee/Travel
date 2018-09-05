<template>
  <div class="list" >
    <div class="item"
         v-for="key of letters"
         :key="key"
         :ref="key"
         @touchstart="handleTouchStart"
         @touchmove="handleTouchMove"
         @touchend="handleTouchEnd"
         @click="handleLetterClick"
    > {{key}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  data () {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  updated () {
    this.startY = this.$refs['A'][0].offsetTop
  },
  methods: {
    handleLetterClick: function (e) {
      var letter = e.target.innerText
      this.$emit('change', letter)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.touchStatus) {
        // 函数节流，从而提高性能
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          // 1.获取A元素距离顶部的高度 offsetTop都是固定值
          // 获取手指点击的Y值 79为导航栏的高度
          const touchY = e.touches[0].clientY - 79
          // 向下取整 20 为字母的高度
          const index = Math.floor((touchY - this.startY) / 20)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 16)
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  },
  computed: {
    letters () {
      const letters = []
      for (let key in this.cities) {
        letters.push(key)
      }
      return letters
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~common/stylus/index.styl"
  .list
    display flex
    flex-direction column
    justify-content center
    position absolute
    top 1.52rem
    bottom 0
    right 0
    width .4rem
    text-align center
    .item
      line-height .4rem
      height .4rem
      color $themecolor
</style>
