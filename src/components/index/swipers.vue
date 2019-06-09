<template>
     <div class="header-swiper">
       <swiper :options="swiperOption">
            <!-- slides -->
            <swiper-slide v-for ='(item,i) in swiperdata' :key="i" >
                <img :src="item.url">
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
        <div class="box"></div>
    </div>
</template>
<script>
export default {
      data(){
        return {
            swiperdata:[
                {
                    url:'https://i0.hdslb.com/bfs/archive/8aa1fbdfdd55ba9e933768833054fc450667128d.jpg@480w_300h.webp'
                },{
                    url:'https://i0.hdslb.com/bfs/archive/5649f83365e908d6c13cef9170f84142945339fe.jpg@480w_300h.webp'
                },{
                    url:'https://i0.hdslb.com/bfs/archive/5649f83365e908d6c13cef9170f84142945339fe.jpg@480w_300h.webp'
                }
            ],
           swiperOption: {
                pagination: {
                    el: '.swiper-pagination'
                },
                // loop: true,
                speed:300,
                autoplay : {
                    delay:3000
                },
                
            }
        }
    },
    created() {
    },
}
</script>
<style lang="stylus" scoped>
    .header-swiper{
        height: 0;
        background #ccc;
        z-index:0;
        width:96%;
        margin-left 2%;
        margin-right 2%;
        border-radius: 10px 10px 10px 10px;
        padding-bottom: 26.67%;
    }
    .header-swiper img{
        border-radius: 10px 10px 10px 10px;
        width: 100%;
        height: 100%;
        display block;
        z-index:0;
    }
     .header-swiper>>>.swiper-pagination-bullet-active {
        background #fff;
    }
</style>