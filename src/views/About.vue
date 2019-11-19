<template>
    <div class="about-root">   
        <div class="about-header">
            <router-link to="/search">
                <div class="about-search">
                    <van-icon name="point-gift-o" />
                    <span class="about-search-span">实时热搜花卉</span>
                </div>
            </router-link>
        </div>
        <div class="about-main">
            <div class="about-left">
                <div class="about-left-item" v-for="(f,i) in father_list" :key="i" @click="aa(f.cat_id,f.banner.img_url)">
                    <router-link  to="/about/child/" class="about-left-item-box">
                        {{f.cat_name}}
                        <!-- {{f.banner.img_url}} -->
                    </router-link>
                </div>
            </div>
            <div class="about-router-view">
                <router-view></router-view>
            </div>
            
        </div>
        
    </div>
</template>

<script>
export default {
    data(){
        return{
            heightLight:0,
            father_list:[],
        }
    },
    methods:{
        aa(i,v){
            // console.log(v);
            sessionStorage.setItem("id",i)
            sessionStorage.setItem("img",v)
            this.queryFatherList(i)
            this.$store.commit("setImg",v)
        },
        queryFatherList(id){
            this.http.get("/hongyue/v2/category/father_list?father_id="+id).then(data=>{
                this.$store.commit("setshuju",data.data.data)
                // console.log(this.$store.state.shuju);
                
            })
        }
    },
    mounted(){
        this.http.get("/hongyue/v2/category/father_list").then(data=>{
            this.father_list = data.data.data
            // console.log(data.data.data)
            sessionStorage.setItem("img",this.father_list[0].banner.img_url)
            sessionStorage.setItem("id",this.father_list[0].cat_id)
        })
        this.queryFatherList(532)
    },
   
}
</script>
<style scoped>
    .about-router-view{
        flex-grow: 1;
        height:calc(100vh - 10rem);
        overflow-y: scroll;
    }
    .about-left-item-box{
        display: inline-block;
        width: 100%;
        height: 100%;
        color: rgb(62, 62, 62);
    }
    .about-left-item{
        
        width: 100%;
        height: 4.4rem;
        text-align: center;
        line-height: 4.4rem;
        font-size: 1.2rem;
        
    }
    .about-left{
        width: 8.3rem;
        height:calc(100vh - 10rem) ;
        overflow-y: scroll;
    }
    .about-main{
        display: flex;
    }
    .about-header{
        padding: 0.5rem 1rem;
        border-bottom: 0.1rem solid #f5f5f5;        
    }
    .van-icon-point-gift-o{
        position: relative;
        top: 0.4rem;
        margin-right: 0.7rem;
        margin-left: 0.5rem;
    }
    .about-search-span{
        font-size: 1.6rem;
        
    }
    .about-search{
        width: 100%;
        height: 4rem;
        background-color: #f5f5f5;
        line-height: 4rem;
        font-size: 2rem;
        color: #666666;
        
    }
    .about-root{
        height: calc(100vh - 5rem);
        padding-bottom: 5rem ;
        overflow: hidden;
    }
</style>
