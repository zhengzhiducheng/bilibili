<template>
    <div class="list">
        <ul>
            <li v-for="(v,i) in data" :key="i">
                <img :src="v.image" alt="">
                <p>{{v.title}}</p>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
      data(){
          return{
            data:[
                    {
                        image:"https://i1.hdslb.com/bfs/archive/0f96eea6760907492f7db26c908ac1513c6a02ff.jpg@320w_200h.webp",
                        title:"“宝贝！中国报道我了！”"
                    },
                    {
                    image:"https://i1.hdslb.com/bfs/archive/07cbd9b67411693954fd54d8070b6ae522cb7933.jpg@320w_200h.webp",
                        title:"我都快笑死了，你竟然告诉我这是一个广告？" 
                    },
                    {
                        image:"https://i2.hdslb.com/bfs/archive/d03ddd5a0434069faa85d8d7c38e5aec9dd091c7.jpg@320w_200h.webp",
                        title:"【B站核心文化之一或将受到威胁】怎样才能让社区环境更加和谐，我们的长足发展在何处？"
                    },
                    {
                        image:"https://i0.hdslb.com/bfs/archive/063cac7033c6d7d793de04c8f46b49724860f8c1.jpg@320w_200h.webp",
                        title:"【党妹】出圈神款！一条上万？lo股领跑者Baby樱茶/极光之夜/花葬夜超华丽开箱试穿！｜LolitaFashion"
                    },
                    {
                        image:"https://i1.hdslb.com/bfs/archive/aa7a695f3e2334c1a02a253b7166028fe9120053.jpg@320w_200h.webp",
                        title:"【高能Rap】疯狂踩点！我们有特殊的辩论技巧！"
                    },
                    {
                        image:"https://i0.hdslb.com/bfs/archive/c3eda2242f1b58cd36bbe33e3fc29de32ed6b49e.jpg@320w_200h.webp",
                        title:"衡水中学“学霸”励志演讲：这世间，唯有青春与梦想不可辜负"
                    },
                    {
                        image:"https://i2.hdslb.com/bfs/archive/3f1d88c0abd8eb5496b70b4f23fb5514b0585f8a.jpg@320w_200h.webp",
                        title:"10000英尺一边高空跳伞一边单手打游戏！只有俄国教练敢一起！"
                    },
                    {
                        image:"https://i0.hdslb.com/bfs/archive/98e0b0613ff429c6a93043689a43b35d516f9ab8.jpg@320w_200h.webp",
                        title:"【全明星】心如止水"
                    },
                    {
                        image:"https://i2.hdslb.com/bfs/archive/0941ae1105f2d2ee5a054276024f6de059feb1f7.jpg@320w_200h.webp",
                        title:"【特效向】全明星の追鸡之战"
                    },
                    {
                        image:"https://i1.hdslb.com/bfs/archive/b1559c314a8d5dc79286a7ff9744351e28fded59.jpg@320w_200h.webp",
                        title:"【雨女无瓜】轮到游乐王子给你洗脑了"
                    }
                ]  
          }
      }
}
</script>
<style lang="stylus" scoped>
.list{
    width 100%
    ul{
        margin-top 15px
        width 100%
        display flex
        justify-content space-between
        flex-wrap wrap
        li{
            width 50%
            img{
                border-radius 10px
                width 170px
                height 100px
                display block
                margin auto
            }
            p{
                box-sizing border-box
                padding 2px 10px
                color #212121
                font-size 14px
            }
        }
    }
}
</style>