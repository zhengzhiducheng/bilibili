<template>
<div>
  <ul class="app">
      <li class="header">
        <img src="/static/img/bili.png" alt="">
        <div class="input">
          <img src="/static/img/s.png" alt="">
          <input type="text" value='毕业照证件照。。。'>
        </div>
        <img src="/static/img/tx.png" alt="">
        <div class="download">下载App</div>
      </li>
    </ul>
    <navs></navs>
</div>
    
</template>

<script>
import navs from '@/components/public/navs.vue'
export default {
  components:{
    navs
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.app{
  .header{
    display flex
    width 100%
    height 44px
    justify-content space-around
    align-items center
    .input{
      width 140px
      height 25px
      background #F4F4F4
      border-radius 15px
      display flex
      align-items center
      input{
        border none 
        outline none
        background rgba(0,0,0,0)
        color #BFA4A5
        font-size 12px
      }
    }
    .download{
      border-radius 5px
      font-size 14px
      display flex
      justify-content center
      align-items center
      width 80px
      height 25px
      color #ffffff
      background #FB7299
    }
  }
  .nav{
    width 100%
    height 45px
    overflow hidden
    ul{
      display flex
      width: 85%;
      // 处理ios 
      // overflow-x: scroll; 兼容的
      // -webkit-overflow-scrolling: touch;
      li{
        line-height 45px
        padding 0 1em
        border 1px solid #eeeeee
      }
    }
  }
}
</style>
