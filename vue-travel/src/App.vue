<template>
  <div id="app">
    <!--优化，放到内存中 就不会重新渲染了 重复方法axios请求了-->
      <keep-alive>
          <router-view></router-view>
      </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="stylus" scoped>

</style>
