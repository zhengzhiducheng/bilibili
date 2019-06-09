<template>
  <div id="app">
    <tabBar />  
    <router-view/>
  </div>
</template>

<script>
import tabBar from '@/components/public/tabBar.vue'
export default {
  name: 'App',
  components:{
    tabBar
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" >
*{
  margin 0
  padding 0
  list-style none
}
#app{
  font-size 16px
}
</style>
