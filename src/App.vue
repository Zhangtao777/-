<template>
  <div id="app">
    <router-view/>
      <van-tabbar v-model="active" v-show="isShow">
        <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
        <van-tabbar-item icon="apps-o" to="/about">分类</van-tabbar-item>
        <van-tabbar-item icon="shopping-cart-o" to="/cart">购物车</van-tabbar-item>
        <van-tabbar-item icon="manager-o" to="/me">我的</van-tabbar-item>
      </van-tabbar>
  </div>
</template>

<script>
import {mapState} from "vuex"
export default {
  data(){
    return{
      active:0,
      isShow:true
    }
  },
  mounted(){
    this.$store.commit("setIs",true)
  },
  components:{
    
  },
  computed:{
    ...mapState(["is"])
  },
  watch:{
    is(n){
      this.isShow = n
    }
  }

}
</script>
<style>
*{
  margin: 0;
  padding: 0;
}

</style>
