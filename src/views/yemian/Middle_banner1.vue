<template>
    <div class="middle1-root">
        <img class="top_img" :src="top_img" alt="">
        <div class="zhuomian">
            <img class="img2" :src="img_url" alt="">
        </div>
        <div class="img_urlArr1">
            <img v-for="(m,i) in img_urlArr1" :src="m.img_url" alt="" :key="i" class="a">
        </div>
        <div class="img_urlArr1">
            <img v-for="(m,i) in img_urlArr2" :src="m.img_url" alt="" :key="i" class="a">
        </div>
        <div class="zhuomian">
            <img class="img2" :src="img_urlArr3" alt="">
        </div>
        <div class="img_urlArr1">
            <img v-for="(m,i) in img_urlArr4" :src="m.img_url" alt="" :key="i" class="img_urlArr4">
        </div>
        <div class="img_urlArr1">
            <img v-for="(m,i) in img_urlArr5" :src="m.img_url" alt="" :key="i" class="img_urlArr4">
        </div>
        <div class="img_urlArr1">
            <img v-for="(m,i) in img_urlArr6" :src="m.img_url" alt="" :key="i" class="img_urlArr4">
        </div>
        <div class="img_urlArr1">
            <img v-for="(m,i) in img_urlArr7" :src="m.img_url" alt="" :key="i" class="img_urlArr4">
        </div>
        <div class="img_urlArr1">
            <img v-for="(m,i) in img_urlArr8" :src="m.img_url" alt="" :key="i" class="img_urlArr4">
        </div>
        <div class="img_urlArr1">
            <img v-for="(m,i) in img_urlArr9" :src="m.img_url" alt="" :key="i" class="img_urlArr4">
        </div>
        <div class="img_urlArr1">
            <img v-for="(m,i) in img_urlArr10" :src="m.img_url" alt="" :key="i" class="img_urlArr4">
        </div>
        <div class="zhuomian">
            <img class="img2" :src="img_urlArr11" alt="">
        </div>
        <div class="img_urlArr1">
            <img v-for="(m,i) in img_urlArr12" :src="m.img_url" alt="" :key="i" class="img_urlArr4">
        </div>
        <div class="img_urlArr1">
            <img v-for="(m,i) in img_urlArr13" :src="m.img_url" alt="" :key="i" class="img_urlArr4">
        </div>
        <div class="zhuomian">
            <img class="img2" :src="img_urlArr14" alt="">
        </div>
        <div class="zhuomian">
            <img class="img2" :src="img_urlArr15" alt="">
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            // 最上面的图片
            top_img:"",
            // 全部数据
            data:"",
            // 1
            img_url:"",
            img_urlArr1:"",
            img_urlArr2:"",
            img_urlArr3:"",
            img_urlArr4:"",
            img_urlArr5:"",
            img_urlArr6:"",
            img_urlArr7:"",
            img_urlArr8:"",
            img_urlArr9:"",
            img_urlArr10:"",
            img_urlArr11:"",
            img_urlArr12:"",
            img_urlArr13:"",
            img_urlArr14:"",
            img_urlArr15:"",
        }
    },
    mounted(){
        this.$store.commit("setIs",false)
        this.http.get("/hongyue/v1/activity_father/lists?af_id=91").then(data=>{
            this.top_img= data.data.data.top_img
            console.log(data.data.data)
            this.data = data.data.data
            this.img_url =  data.data.data.child[0].content.img_url
            this.img_urlArr1 = data.data.data.child[1].content
            this.img_urlArr2 = data.data.data.child[2].content
            this.img_urlArr3 = data.data.data.child[3].content.img_url
            this.img_urlArr4 = data.data.data.child[4].content
            this.img_urlArr5 = data.data.data.child[5].content
            this.img_urlArr6 = data.data.data.child[6].content
            this.img_urlArr7 = data.data.data.child[7].content
            this.img_urlArr8 = data.data.data.child[8].content
            this.img_urlArr9 = data.data.data.child[9].content
            this.img_urlArr10= data.data.data.child[10].content
            this.img_urlArr11= data.data.data.child[11].content.img_url
            this.img_urlArr12= data.data.data.child[12].content
            this.img_urlArr13= data.data.data.child[13].content
            this.img_urlArr14 = data.data.data.child[14].content.img_url
            this.img_urlArr15 = data.data.data.child[15].content.img_url
        })
    }
}
</script>
<style scoped>
    .img_urlArr4{
        width: 48%;
        border-radius: 0.5rem;
    }
    .a{
        width: 30%;
        border-radius: 0.5rem;
    }
    .img_urlArr1{
        display: flex;
        /* padding: 0 1rem; */
        justify-content: space-between;
        width: 35.1rem;
        margin: 0 auto 1.5rem; 
    }
    .img2{
        height: 34rem;
        display: block;
        margin: 0 auto 1.5rem;
    }
    .zhuomian{
        margin-top: 2.9rem;
    }
    .middle1-root{
        width: 100%;
        /* height: 100vh; */
        background-color: #36a3de;
        /* padding-bottom: 5rem; */
        overflow: hidden;
    }
    .top_img{
        width: 100%;
        
    }
</style>