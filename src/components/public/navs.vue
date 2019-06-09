<template>
  <div class="activity">
      <div class="menu none">
           <div v-for="(v, i) in activitys" :key="i" class="item">
                <div :class="{on: $route.path===v.path}" class="old" @click="displayBlock(v.path)">
                    {{v.name}}
                </div>
            </div>
           <div class="line" @click="upward">上拉</div>
      </div>
      <div class="nav">
        <!--左右滑动触发回调-->
        <v-touch  class="wrapper">
            <div class="menu-container" ref="menuContainer">
                <div v-for="(v, i) in activitys" :key="i" class="item">
                    <span :class="{on: $route.path===v.path}" class="oldprice" @click="$router.push(v.path)">{{v.name}}</span>
                </div>
            </div>
        </v-touch>
      </div>
      <div class="pull-down" @click="pull">下拉</div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            path:'index',
            activitys:
            [{name:"首页",path:"/index"},
            {name:"动画",path:"/animation"},
            {name:"番剧",path:"/drama"},
            {name:"国创",path:"/aimtron"},
            {name:"音乐",path:"/music"},
            {name:"舞蹈",path:"/dance"}]
        }
    },
    methods:{
        pull(){
            let none = document.querySelector('.menu')
            none.className = none.className.replace('none','')
        },
        upward(){
            let none = document.querySelector('.menu')
            none.className=none.className + ' none'
        },
        displayBlock(path){
            let none = document.querySelector('.menu')
            none.className=none.className + ' none'
            this.$router.push(path)
        }
    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.activity{
    position relative
    display flex
    .menu{
        // 元素隐藏
        position absolute
        z-index 100
        width 100%
        display flex
        flex-wrap wrap
        background #eeeeee
        transition display 2s linear 
        .old{
            padding 15px
        }
        .line{
            width 100%
            text-align center
        }
        .item{
            .on{
                color red
            }
        }
    }
    .none{
        display none
    }
    .nav{
        margin-bottom 10px
        width 85%
        height 40px
        line-height 40px
        .wrapper{
            .menu-container{
                display flex
                white-space nowrap
                overflow scroll 
                &::-webkit-scrollbar {
                    width: 0px;
                    height: 0px;
                }
                .item{
                    padding 0 15px
                }
                .on{
                    color red
                    border-bottom 1px red solid
                }
            }
        }
    }
    .pull-down{
        width 100px
        height 40px
        display flex
        justify-content center
        align-items center
    }
}
</style>