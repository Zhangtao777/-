<template>
 <div>
    <div class="child-header">
        <img class="child-img" :src="image" alt="">
        <div class="" v-for="(s,i) in this.$store.state.shuju" :key="i">
            <div class="area">
               <span class="area-span">{{s.cat_name}}</span> 
               <div class="area-box">
                   <div class="area-box-sm" v-for="(a,q) in s.child" :key="q">
                        <img class="child-img2" :src="a.mobile_icon" alt="">
                        <p class="child-p">{{a.cat_name}}</p>
                   </div>
               </div>
            </div>
            
        </div>

    </div>
    
 </div>
</template>

<script>
import {mapState} from "vuex"
export default {
    data(){
        return{
            image:sessionStorage.getItem("img")
        }
    },
    beforeMount(){
       
    },
    mounted(){
        this.$store.commit("setIs",true)
        
    },
    computed:{
        ...mapState(["img"])
    },
    watch:{
        img(n){
            this.image = n
            // console.log(this.image);
            
        }
    }
}
</script>
<style scoped>
    .child-p{
        color: rgb(62, 62, 62);
        font-size: 1.2rem;
    }
    .child-img2{
        width: 6rem;
        height: 6rem;
        display: block;
        margin: 0 auto;
    }
    .area-box-sm{
        width: 33%;
        display: flex;
        flex-direction: column;
        /* background-color: red; */
    }
    .area-box{
        display: flex;
        flex-wrap: wrap;
        width: 100%;
    }
    .area-span::before{
        content: "";

    }
    .area{
        text-align: center;
        /* height: 4rem; */
        line-height: 4rem;
        font-size: 1.3rem;
        
    }
    .child-header{
        width: 29rem;
    }
    .child-img{
        width: 22rem;
        display: block;
        margin: 0 auto;
    }
</style>
