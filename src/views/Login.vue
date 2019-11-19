<template>
    <div>
        <div class="login-header">
            <div><van-icon name="arrow-left" /></div>
            <div class="tit">密码登录</div>
            <div class="zhanweizhi"></div>
        </div>
        <div class="z" style="height:12.5rem">
            <img class="login-img" src="/index.png" alt="">
        </div>
        <div class="userpsw">
            <input type="text" placeholder="用户名/手机号" v-model="phone"> 
            <input ref="a" type="password" placeholder="密码" v-model="psw">
            <van-icon  name="browsing-history-o" @click="chang"/>
        </div>
        <div class="register">
            <span>点我注册</span>
            <span>找回密码</span>
        </div>
        <div class="login" @click="login">登录</div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            phone:"",
            psw:""
        }
    },
    methods:{
        login(){
            // console.log(this.phone);
            var reg1 = /^1[3456789]\d{9}$/ 
            if (!this.phone) {
                this.$toast('请输入账号');
                return
            }
            // if (!reg1.test(this)) {
            //     this.$toast('请输入正确的账号');
            //     return
            // }
            if (!this.psw) {
                this.$toast('请输入密码');
                return
            }
            this.http.post("/hongyue/v1/auth/signin",{
                city_name:null,
                login_type:1,
                mobile:this.phone,
                password:this.psw,
            }).then(data=>{
                if (data.data.code == 2002) {
                    this.$toast(data.data.msg);
                    return
                }
                if (data.data.code == 200) {
                    this.$toast(data.data.msg);
                    localStorage.setItem("key",data.data.data.key)
                    // console.log(data.data.data.info)
                    this.$store.commit("setInfo",data.data.data.info)
                    this.$router.push("/me")
                }
                
            })
        },
        chang(){
            if (this.$refs.a.getAttribute("type") == "password") {
                this.$refs.a.setAttribute("type","text")
            }else{
                this.$refs.a.setAttribute("type","password")
            }  
        }
    },
    mounted(){
        this.$store.commit("setIs",false)
        
    }
}
</script>
<style scoped>
    .login{
        width: 30rem;
        height: 5rem;
        line-height: 5rem;
        margin: 0 auto;
        font-size: 1.5rem;
        color: white;
        background-color: #ff7e00;
        text-align: center;
        border-radius: 0.5rem;
    }
    .register{
        width: 30rem;
        height: 5rem;
        margin: 0 auto;
        line-height: 5rem;
        display: flex;
        color: rgb(102, 102, 102);
        font-size: 1.1rem;
        justify-content: space-between;
    }
    .van-icon-browsing-history-o{
        position: absolute;
        top: 69%;
        right: 15%;
        font-size: 1.7rem;
    }
    input{
        width: 30rem;
        height: 4.9rem;
        margin: 0 auto;
        font-size: 1.5rem;
        border: none;
        border-bottom: 0.1rem solid #f1f1f1;
    }
    .userpsw{
        display: flex;
        flex-direction: column;
        position: relative;
    }
    .z{
        position: relative;
        /* background-color: red; */
    }
    .login-img{
        height: 6rem;
        display: block;
        /* margin: auto; */
        position: absolute;
        /* top: calc(50% - 3rem); */
        top: 50%;
        transform: translate(-50%,-50%);
        left: 50%;
    }
    .tit{
        flex-grow: 1;
        line-height: 4.4rem;
        text-align: center;
        font-size: 1.6rem;
        font-weight: 700;
    }
    .zhanweizhi{
        width: 3.5rem;
    }
    .van-icon-arrow-left{
        width: 3.5rem;
        text-align: center;
        line-height: 4.4rem;
        font-size: 2rem;
    }
    .login-header{
        height: 4.4rem;
        border-bottom: 0.1rem solid #f1f1f1;
        display: flex;
    }
</style>