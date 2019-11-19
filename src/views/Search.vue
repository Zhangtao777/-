<template>
    <div class="search-root">
        <div class="search-header">
            <van-icon name="arrow-left" @click="back"/>
            <van-search
            v-model="value"
            placeholder="请输入搜索关键词"
            show-action
            shape="round"
            @search="onSearch"
            background="#eee"
            @focus="focu"
            >
            <div slot="action" @click="onSearch">搜索</div>
            </van-search>
        </div>
        <div class="search-box">
            
            <div  v-for="(z,i) in b" :key="i" :class="i>=5?'liang':'an'">{{z.s_name}}</div>
        </div>
        <div class="compon" v-if="a">
            <sousuo v-model="a"></sousuo>
        </div>
        <div class="search-dongxi" v-show="show">
            <div class="search-dongxi-tab">
                <div class="search-dongxi-tab-box">综合排序</div>
                <div class="search-dongxi-tab-box l">销量优先</div>
                <div class="search-dongxi-tab-box" @click="btnC"> <van-icon name="qr" /></div>
            </div>
            <div class="search-dongxi-bigB" v-show="d">
                <div class="search-dongxi-sm" v-for="(d,i) in data" :key="i">
                    <img class="search-dongxi-sm-img" :src="d.thumbnail" alt="">
                    <div class="search-dongxi-sm-data">
                        <p class="search-dongxi-sm-data-p">{{d.name}}</p>
                        <div class="search-dongxi-sm-data-specBox">
                            <div v-if="d.attr_arrs.pro" class="zt">
                                <div class="z" v-for="(m,i) in d.attr_arrs.pro" :key="i"  >
                                    <div class="t">
                                        <span class="zz">{{m.attr_value}}</span>
                                        <span class="zz">{{m.attr_name}}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="price">{{d.price}}</div>
                    </div>
                </div>
            </div>
            <div v-show="c" class="search-dongxi-bigB-2">
                <div class="search-dongxi-xiao-2" v-for="(d,i) in data" :key="i">
                    <img class="search-dongxi-img2" :src="d.img" alt="">
                    <p class="search-dongxi-sm-data-p p">{{d.name}}</p>
                    <p class="price2">{{d.price}}</p>
                </div>
            </div>
        </div>
    </div>
    
</template>
<script>
import sousuo from "../components/Sousuo"
export default {
    data(){
        return{
            value:"",
            a:false,
            b:"",
            page:1,
            data:"",
            show:false,
            c:false,
            d:true,
           
        }
    },
    components:{
        sousuo
    },
    mounted(){
        this.$store.commit("setIs",false)
        this.http.get("/hongyue/v1/search/hot").then(data=>{
            
            this.b = data.data.data
        })
    },
    methods:{
        back(){
            history.back()
        },
        btnC(){
            this.c= !this.c
            this.d= !this.d
        },
        focu(){
            this.a = true
        },
        onSearch(){
            if (this.value) {
                this.queryDa()
            }else{
                this.$toast('输入不能为空');
            }
            
        },
        queryDa(){
            this.http.get("/hongyue/v1/search/sou",{params:{
                keywords:this.value,
                sort:"sales",
                order:"DESC",
                page:this.page,
                limit:10
            }}).then(data=>{
                // this.page+=1
                this.show =true
                data.data.data.forEach(d => {
                    if (d.attr_arrs.pro.length>1 ) {
                        for(var a = d.attr_arrs.pro.length ; a > 3  ;a--){
                            d.attr_arrs.pro.pop() 
                        }
                        // console.log(d.attr_arrs.pro)
                    }
                });
                this.data = data.data.data 
            })
        }
    }

}
</script>
<style scoped>
    .price2{
        font-size: 1.6rem;
        color: #cc0000;
        margin-top: 0.5rem
    }
    .p{
        padding-left: 0.7rem;
        height: 3.8rem;

    }
    .search-dongxi-img2{
        width: 100%;
        height: 16.8rem;
    }
    .search-dongxi-xiao-2{
        width: 45%;
        margin-right: 1.5rem;
        border: 0.1rem solid #ebebeb;
        margin-bottom: 1.5rem;
    }
    .search-dongxi-bigB-2{
        padding: 0 0.75rem;
        margin-top: 1.5rem;
        display: flex;
        flex-wrap: wrap;
    }
    .price{
        position: absolute;
        bottom: 1rem;
        font-size: 1.6rem;
        color: #cc0000;
    }
    .zz{
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        text-align: center;
    }
    .t{
        display: flex;
        flex-direction: column;
        
    }
    .z{
       width: 33%;
    }
    .zt{
        display: flex;
    }
    .search-dongxi-sm-data-specBox{
        margin: 0.75rem 0 ;
        height: 3rem;
    }
    .search-dongxi-sm-data-p{
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;/*显示几行*/
        overflow: hidden; 
        font-size: 1.4rem;
        max-width: 21rem;
    }
    .search-dongxi-sm-data{
        display: flex;
        padding-left: 2rem;
        flex-direction: column;
        border-bottom: 0.1rem solid #eaeaea;
        position: relative;
    }
    .search-dongxi-sm-img{
        width: 12rem;
        height: 12rem;
    }
    .search-dongxi-sm{
        padding-left: 1.5rem;
        display: flex;
        margin-top: 2rem;
    }
    .search-dongxi-bigB{
        padding: 0 0.5rem;
    }
    .l{
       color:#ff7e00;
    }
    .van-icon-qr{
        font-size: 1.6rem;
        position: relative;
        top: 0.3rem
    }
    .search-dongxi-tab-box{
        width: 33%;
        text-align: center;
        height: 4.2rem;
        line-height: 4.2rem;
        border-bottom: 0.1rem solid #e5e5e5;
        font-size: 1.2rem;
    }
    .search-dongxi-tab{
        display: flex;
    }
    .search-dongxi{
        position: absolute;
        width: 100%;
        height: calc(100vh - 4.5rem) ;
        top: 4.5rem;
        background-color: white;
        z-index: 3;
    }
    .compon{
        position: absolute;
        width: 100%;
        height: calc(100vh - 4.5rem) ;
        top: 4.5rem;
        background-color: white;
        z-index: 2;
    }
    .search-box{
        display: flex;
        flex-wrap: wrap;
    }
    .liang{
        font-size: 1.2rem;
        margin: 0.2rem 1rem;
        padding:0.7rem 0.6rem;
        border: 0.1rem solid #ff7e00;
        color: #ff7e00;
        border-radius: 0.5rem;
    }
    .an{
        border: 0.1rem solid #f1f1f1;
        padding:0.7rem 0.6rem;
        font-size: 1.2rem;
        margin: 0.2rem 1rem;
        border-radius: 0.5rem;
    }
    .van-search{
        flex-grow: 1;
    }
    .search-header{
        width: 100%;
        height: 4.5rem;
        display: flex;
        background-color: #eee;
    }
    .van-icon-arrow-left{
        line-height: 4.5rem;
        width: 3rem;
        text-align: center;
        font-size: 2rem;
    }
    .search-root{
        height: 100vh;
        background-color: #fff;
        position: relative;
    }
</style>