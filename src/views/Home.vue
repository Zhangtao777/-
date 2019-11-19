<template>
 <div class="home-root"  ref="root" @scroll="scrol">
    <div class="fixed">
        <div class="home-header">
            <router-link to="/search">
                <div class="search">
                    <van-icon name="search" />
                    <span class="search-huahui">实时热搜花卉</span>
                </div>
            </router-link>
        </div>
        <div class="nav">
            <div class="nav-ul">
                <div class="jingxuan"><span style="">精选</span> </div>
                <div class="nav-ul-li" v-for="(dn,i) in da.nav" :key="i">{{dn.n_name}}</div>
            </div>
        </div>
        <van-swipe  indicator-color="white">
            <van-swipe-item v-for="(dn,i) in da.carousel" :key="i"><router-link :to="dn"><img :src="dn.img_url" alt=""></router-link></van-swipe-item>
        </van-swipe>
        <div class="toutiao">
            <div class="budong"><span>虹越头条</span></div>
        </div>
        <div class="middle_banner">
            <div class="middle_banner-ch" v-for="(dn,i) in da.middle_banner" :key="i"><img :src="dn.img_url" alt="" @click="aa(i)"></div>
        </div>
        <div class="theme">
            <div class="item" v-for="(d,i) in da.theme" :key="i">
                <div class="theme_header"><span class="theme_header-span">{{d.theme_name}}</span> </div>
                <img class="i1" :src="d.theme_banner" alt="">
                <div class="children_goods">
                    <div class="children_goods-box" v-for="(a,ii) in d.children_goods" :key="ii">
                        <img class="i2" :src="a.thumbnail" alt="">
                        <p class="p1"><span class="dingjing">【定金】</span>{{a.name}}</p>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
    
 </div>
</template>

<script>
// import { log } from 'util'
export default {
    data(){
        return{
            da:"",
            page:1,
            one:true,
            root:1
        }
    },
    methods:{
        query(){
            if (this.one) {
                // console.log(this.page)
                this.one = false
                 this.$toast.loading({
                    message: '加载中...',
                    forbidClick: true,
                    duration:0
                });
                this.$store.dispatch("queryData",this.page).then(data=>{    
                    this.$toast.clear()
                    if (this.page==1) {
                        this.da = data.data.data
                        console.log(this.da)
                    }else{
                        // console.log(this.da.theme.concat(this.da.theme,data.data.data.theme))
                        this.da.theme = this.da.theme.concat(data.data.data.theme)
                        // console.log(this.da.theme);
                        
                    }
                    this.page+=1
                    this.one = true
                    
                })
            }
            
        },
        scrol(){
            if ( this.root.scrollHeight - this.root.clientHeight - this.root.scrollTop <=0) {
                // console.log(1);
                this.query()
            }
            
        },
        aa(v){
            switch (v) {
                case 0:
                    this.$router.push("/middle1")
                    break;
                case 1:
                    this.$router.push("/middle2")
                    break;
                case 2:
                    this.$router.push("/middle3")
                    break;
                case 3:
                    console.log(v);
                    break;
                
                case 4:
                    console.log(v);
                    break;
            }
        }
    },
    beforeMount(){
        
    },
    mounted(){
        this.$store.commit("setIs",true)
        this.query()
        this.root = this.$refs.root
    },
    watch:{
        
    }
}
</script>
<style scoped>
    .jingxuan{
        display:inline-block;
        margin-right: 1.5rem;
        color: rgb(255, 126, 0);
        text-decoration: underline;
        text-decoration-color: rgb(255, 126, 0);
    }
    .p1{
        padding: 0 1rem;
        color: rgb(102, 102, 102);
        font-size: 1.34rem;
    /*  */
    /*  */
    /*  */
    /*  */
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;/*显示几行*/
        overflow: hidden; 
    }
    .dingjing{
        color: #ff0000;
        font-size: 1.34rem;
    }
    .i2{
        width: 100%;
    }
    .children_goods-box{
        width: 49%;
        /* height: 6rem; */
        
    }
    .children_goods{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between
    }
    .i1{
        width: 100%;
        height: 15rem;
    }
    .theme{
        
    }
    .theme_header{
        width: 100%;
        height: 4rem;
        line-height: 4rem;
        text-align: center;
 border-top: 0.7rem solid rgb(238, 238, 238);
    }
    .theme_header-span::after{
        content: "";
        background-color: #eee;
        display: inline-block;
        width: 3rem;
        height: 0.1rem;
        position: relative;
        top: -0.4rem;
        left: 1rem;
    }
    .theme_header-span::before{
        content: "";
        background-color: #eee;
        display: inline-block;
        width: 3rem;
        height: 0.1rem;
        position: relative;
        top: -0.4rem;
        right: 1rem;
    }
    .theme_header-span{
        font-size: 1.4rem;
        color: rgb(51, 51, 51);
        position: relative;
    }
    .middle_banner-ch{
        width: 49%;
    }
    .middle_banner img{
       width: 100%;
    }
    .middle_banner{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around
    }
    .budong{
        font-size: 1.7rem;
        color: rgb(255, 126, 0);
        position: relative;
        margin-left: 0.5rem
    }
    .budong::after{
        content: "";
        display: inline-block;
        width: 0.2rem;
        height: 2rem;
        background-color: rgb(255, 126, 0);
        position: relative;
        top: 0.4rem;
        left: 0.5rem;
    }
    .toutiao{
        width: 100%;
        height: 4rem;
        display: flex;
        line-height: 4rem
    }
.van-swipe-item{
    height: 14.5rem !important;
    width: 100%;
    overflow: hidden;
}
    .van-swipe-item img{
        width: 37.5rem !important;
        height: 17rem !important;
    }
    .home-header{
        width: 100%;
        height: 5rem;
        background-color: #f5f5f5;
        padding:0.7rem 0.75rem;
        box-sizing: border-box;
        
    }
    .search{
        width: 30rem;
        height: 3.5rem;
        /* background-color:red; */
        line-height: 3.5rem;
        border: 0.1rem solid #e5e5e5;
    }
    .van-icon-search{
        font-size: 2rem;
        line-height: 3.5rem;
        margin-left: 0.5rem;
        margin-right: 1.2rem;
        color: #dadce3
    }
    .search-huahui{
        font-size: 1.6rem;
        line-height: 2rem;
        /* vertical-align:auto */
        position: relative;
        top: -0.4rem;
        color:#999999;
    }
    .nav-ul{
        height: 5rem;
        line-height: 5rem;
        font-size: 1.5rem;
        white-space: nowrap;
        overflow: scroll;
        margin-left: 0.5rem;
    }
    .nav-ul-li{
        display: inline-block;
        margin-right: 1.5rem;

    }
    .home-root{
        /* padding-bottom: 5.5rem; */
        /* box-sizing: border-box; */
        height: calc(100vh - 5.5rem)  ;
        overflow: scroll;
    }
</style>
