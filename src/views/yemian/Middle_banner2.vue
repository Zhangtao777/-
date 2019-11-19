<template>
    <div class="middle2">
        <div class="middle2-header">
            <van-icon name="arrow-left" @click="back"/>
            <span>商品详情</span>
        </div>
        <van-swipe :autoplay="0" indicator-color="#ff7e00" >
        <van-swipe-item v-for="(p, i) in pictures" :key="i" >
            <img :src="p.img_url" alt="" class="pimg">
        </van-swipe-item>
        </van-swipe>
        <div class="g_des">
            <span class="g_des-span1">众筹中</span><span>{{data_name}}</span>
            <div class="bar">
                <div style="height:1rem" class="aaaa">
                    <div class="bar-bar" :style="'width:'+bili+'%'"></div>
                    <span class="tiao">{{bili}}%</span>
                </div>
            </div>
        </div>
        <div class="shuliang"> 
            <div class="shuliang-item" style="border-right:0.1rem solid #dadada">
                <span class="shuliang-item-span1">{{mubiao}}</span>
                <span class="shuliang-item-span2">目标数量</span>
            </div>
            <div class="shuliang-item" style="border-right:0.1rem solid #dadada">
                <span class="shuliang-item-span1">{{yishou}}</span>
                <span class="shuliang-item-span2">一筹数量</span>
            </div>
            <div class="shuliang-item" >
                <span class="shuliang-item-span1">{{day}}天</span>
                <span class="shuliang-item-span2">剩余时间</span>
            </div>
        </div>
        <div class="bottom">立即支持({{crowdfunding_enable}}件)</div>
        <div class="heise"></div>
        <div>
            <div class="xuanze"><span>请选择</span><van-icon name="arrow" /></div>
            <div class="fahuo">
                <span>发货地</span>
                <span class="fahuo-span">{{sendAddress}}</span>
            </div>
        </div>
        <div class="heise"></div>
        <van-tabs v-model="activeName">
            <van-tab title="标签 1" name="a">
                <div>
                    <img v-for="(a,i) in descpt_match" :src="a" alt="" :key="i" class="descpt_match">
                </div>
                
            </van-tab>
            <van-tab title="标签 2" name="b">内容 2</van-tab>
            <van-tab title="标签 3" name="c">内容 3</van-tab>
        </van-tabs>
    </div>

</template>
<script>
export default {
    data(){
        return{
            data_name:"",
            pictures:"",
            yishou:"",
            mubiao:"",
            bili:"",
            day:"",
            crowdfunding_enable:"",
            sendAddress:"",
            activeName: 'a',
            descpt_match:""
        }
    },
    methods:{
        chang(i){
            console.log(i);
            
        },
        back(){
            history.back()
        }
    },
    mounted(){
        this.$store.commit("setIs",false)
        this.http.get("/hongyue/v1/goods/info?gshp_id=50005&is_group=2").then(data=>{
            this.data_name = data.data.data.name
            this.sendAddress = data.data.data.sendAddress
            this.pictures = data.data.data.pictures
            this.mubiao = data.data.data.crowdfunding.amount
            this.yishou = data.data.data.crowdfunding.satisfied_amount
            this.day = data.data.data.crowdfunding.end_time_format
            this.crowdfunding_enable = data.data.data.crowdfunding.enable
            this.descpt_match = data.data.data.descpt_match
            this.bili = this.yishou/this.mubiao
            this.bili = this.bili.toFixed(3)*100 
            
        })
    }

}
</script>
<style scoped>
    .descpt_match{
        width: 100%;
    }
    .van-tab__pane{
        padding: 0 1.5rem;
    }
    .fahuo-span{
        margin-left: 4rem;
    }
    .van-icon-arrow{
        position: relative;
        top: 0.2rem;
        z-index: 1;
    }
    .fahuo{
        padding: 1rem 1.5rem;
        color: rgb(62, 62, 62);
        font-size: 15px;
    }
    .xuanze{
        padding: 1rem 1.5rem;
        color: rgb(62, 62, 62);
        font-size: 15px;
        border-bottom: 0.1rem solid #f1f1f1;
    }
    .heise{
        width: 100%;
        height: 1rem;
        background-color: #f1f1f1;
        position: relative;
        
    }
    .bottom{
        width: 100%;
        height: 5rem;
        color: #fff;
        background-color: #ff7e00;
        font-size: 15px;
        line-height: 5rem;
        text-align: center;
        position: fixed;
        bottom: 0;
        z-index: 3;
    }
    .shuliang-item-span1{
        color: rgb(62, 62, 62);
        font-size: 15px;
        font-weight: 700;
        line-height: 2.4rem;
        height: 50%;
    }
    .shuliang-item-span2{
        color: rgb(138, 138, 138);
        font-size: 11px;
        font-weight: 100;
        line-height: 2.4rem;
        height: 50%;
    }
    .shuliang-item{
        width: 33%;
        text-align: center;
        display: flex;
        flex-direction: column;
        height: 4.8rem;
    }
    .shuliang{
        padding: 0 1.5rem;
        margin-top: 2rem;
        display: flex;
        /* margin-bottom: 1rem; */
        padding-bottom: 2.5rem;
        background-color: #fff;
    }
    .aaaa{
        /* position: absolute; */
        position: relative;
        top: -0.8rem;
    }
    .tiao{
        position: relative;
        /* left: 50%; */
        display: inline-block;
        transform: translate(-50%,0);
        background-color: #fff;
        color: #ff7e00;
        padding: 0 0.5rem;
        height: 2rem;
        line-height: 2rem;
        position: relative;
        top: 0.2rem;
        border: 0.1rem solid #ff7e00;
        border-radius: 1rem;
    }
    .bar-bar{
        height: 100%;
        background-image: repeating-linear-gradient(90deg,#fe8327,#ef2f5c );
        border-radius: 0.5rem;
        width: 50%;
        display: inline-block;
    }
    .bar{
        margin-top: 0.7rem;
        width: 100%;
        height: 1rem;
        border-radius: 0.5rem;
        background-color: #e1e1e1;
        position: relative;
    }
    .g_des-span1{
        padding: 0.4rem 0.9rem;
        background-color: #f65643;
        color: white;
        border-radius: 0.3rem;
        font-size: 1rem;
        height: 1.4rem;
        display: inline-block;
        line-height: 1.4rem;
    }
    .g_des{
        padding: 0 1.5rem;
        margin-top: 1rem;
        font-size: 1.5rem;
        font-weight: 800;
        line-height: 2.4rem;
        background-color: #fff;
    }
    .van-swipe__indicator--active{
        background-color: green !important;
    }
    .pimg{
        width: 100%;
    }
    .van-icon-arrow-left{
        display:inline-block;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translate(0 ,-50%);
        font-size: 2rem;
        margin-left: 1rem;
    }
    .middle2-header{
        height: 4.5rem;
        border-bottom: 0.1rem solid #f1f1f1;
        position: relative;
        line-height: 4.5rem;
        text-align: center;
        font-size: 1.3rem;
    }
    .middle2{
        overflow: hidden;
        /* background-color: #f1f1f1; */
        padding-bottom: 5rem;
    }
</style>