<template>
    <div>
        <div class="z" v-for="(z,i) in c" :key="i">{{z.keyword}}</div>
        <div class="x"><van-icon name="delete" @click="d" /></div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            c:""
        }
    },
    props:["value"],
    methods:{
        d(){
            this.$emit("input",false)
        }
    },
    mounted(){
        this.http.get("/hongyue/v1/search/prompt").then(data=>{
            this.c = data.data.data
            
            
        })
    }
}
</script>
<style scoped>
    .x{
        text-align: center;
    }
    .van-icon-delete{
        color: #717171;
        font-size: 1.6rem;
        margin-top: 1rem
    }
    .z{
        height: 4rem;
        line-height: 4rem;
        color: rgb(62, 62, 62);
        font-size: 1.2rem;
        padding: 0 1rem;
    }
</style>