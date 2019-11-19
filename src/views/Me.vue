<template>
 <div class="me-root">
    <div class="me-header">
        <div class="yi">
            <div class="avatar">
                <van-icon name="manager" v-if="!img" />
                <img :src="img" alt="" v-else>
            </div>
            <div class="vip">
                <span class="zi">{{vip}}<van-icon name="arrow" /></span>
            </div>
            <div class="setting">
                <van-icon name="setting-o" />
            </div>
        </div>
        <div class="er">
            <div class="er-child">
                <div class="on">{{free_point}}</div>
                <div class="tr">积分商城</div>
            </div>
            <div class="er-child">
                <div class="on">{{bonus_count}}</div>
                <div class="tr">优惠券</div>
            </div>
            <div class="er-child">
                <div class="on">{{user_money}}</div>
                <div class="tr">余额</div>
            </div>
        </div>
        <div class="san">
            <div class="san-1"><van-icon name="fire" />虹越黄金会员</div>
            <div class="san-2">专享9折会员<van-icon name="arrow" /></div>
        </div>

        
    </div>
    <div class="me-main">
        <div class="myorder">
            <div class="myorder-p">
                <div class="myorder-p-d1">我的订单</div>
                <div class="myorder-p-d2">全部订单<van-icon name="arrow" /></div>
            </div>
            <div class="myorder-p2">
                <div class="fz">
                    <van-icon name="card" />
                    <span>待付款</span>
                </div>
                <div class="fz">
                    <van-icon name="logistics" />
                    <span>待发货</span>
                </div>
                <div class="fz">
                    <van-icon name="exchange" />
                    <span>待收货</span>
                </div>
                <div class="fz">
                    <van-icon name="shop" />
                    <span>交易成功</span>
                </div>
                <div class="fz">
                    <van-icon name="gold-coin" />
                    <span>售后</span>
                </div>
                <div class="fz">
                    <van-icon name="chat-o" />
                    <span>部分发货</span>
                </div>
                <div class="fz">
                    <van-icon name="idcard" />
                    <span>定金商品</span>
                </div>
            </div>
        </div>
        <div class="myorder">
            <div class="myorder-p">
                <div class="myorder-p-d1">我的服务</div>
            </div>
            <div class="myorder-p2">
                <div class="fz">
                    <van-icon name="star-o" />
                    <span>收藏</span>
                </div>
                <div class="fz">
                    <van-icon name="location-o" />
                    <span>地址</span>
                </div>
                <div class="fz">
                    <van-icon name="service-o" />
                    <span>客服</span>
                </div>
            </div>
        </div>
    </div>
 </div>
</template>

<script>
export default {
    data(){
        return{
            // 个人信息
            info:"",
            // 头像
            img:"",
            // 会员等级
            vip:"",
            // 积分商场
            free_point:"",
            // 优惠券
            bonus_count:"",
            // 余额
            user_money:""
        }
    },
    mounted(){
        // console.log(this.$store.state.info);
        if (!localStorage.getItem("key")) {
            this.$router.push("/login")
            this.$toast('请先登录');
            return
        }
        this.http.get("/hongyue/v1/user/info?key="+localStorage.getItem("key")).then(data=>{
            console.log(data.data.data);
            this.$store.commit("setInfo",data.data.data)
            this.info = this.$store.state.info
            this.img = data.data.data.info.avatar
            if (!data.data.data.info.u_grade) {
                this.vip = "普通会员"
            }else{
                this.vip = "超级会员"
            }
           this.free_point =  data.data.data.point_info.free_point
           this.bonus_count = data.data.data.bonus_count
           this.user_money = data.data.data.info.user_money
        })
        
    }
}
</script>
<style scoped>
    .fz .van-icon{
        font-size: 2.5rem;
        height: 3.5rem;
        color: #f97417;
    }
    .fz{
        width: 25%;
        height: 6rem;
        padding-bottom: 0.75rem;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        text-align: center;
        color: rgb(102, 102, 102);
        font-size: 1.1rem;
        margin-bottom: 0.3rem;
    }
    .myorder-p2{
        width: 91.31%;
        /* height: 5rem; */
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
    }
    .myorder-p-d1{
        color: rgb(51, 51, 51);
        font-size: 1.4rem;
        font-weight: 700;
    }
    .myorder-p-d2 .van-icon-arrow{
        margin-left: 0.2rem;
    }
    .myorder-p-d2{
        color: rgb(136, 136, 136);
        font-size: 1.3rem;
    }
    .myorder-p{
        padding: 0 1.5rem;
        display: flex;
        height: 4.4rem;
        line-height: 4.4rem;
        justify-content: space-between;
    }
    .myorder{
        width: 92%;
        /* height: 5rem; */
        /* background-color: red; */
        margin: 1.6rem auto;
        background-color: #fff;
        border-radius: 1.5rem;
    }
    .me-main{
        height:calc(100vh - 5rem - 17.8rem) ;
        background-color: #f4f4f4;
        overflow: hidden;
    }
    .san-1{
        font-size: 1.3rem;
        vertical-align: middle
    }
    .san-2{
        font-size: 1.2rem;
    }
    .san{
        width: 34.1rem;
        background-color: black;
        height: 4.2rem;
        position: absolute;
        bottom: 0;
        overflow: hidden;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: rgb(255, 210, 142);
        padding: 0 1.2rem;
        box-sizing: border-box;
        /* position: relative; */
        border-top-left-radius:1rem;
        border-top-right-radius:1rem;
    }
    .van-icon-fire{
        font-size: 2rem;
        vertical-align: middle;
        position: relative;
        top: -0.2rem;
        margin-right: 0.5rem;
    }
    .on{
        height: 2.4rem;
        text-align: center;
        line-height: 2.4rem;
        font-size: 1.8rem;
        font-weight: 700;
    }
    .tr{
        height: 2.4rem;
        text-align: center;
        line-height: 2.4rem;
        font-size: 1.2rem;
    }
    .er-child{
        width: 33%;
        display: flex;
        flex-direction: column;
        
    }
    .er{
        width: 100%;
        height: 4.8rem;
        /* background-color: red; */
        margin-top: 1.4rem;
        display: flex;
        color: white;
    }
    .setting{
        display: inline-block;
        position: absolute;
        top: 0;
        width: 3.9rem;
        height: 3.14rem;
        line-height: 3.14rem;
        right: 0;
        color: rgb(255, 255, 255);
        font-size: 1.9rem;
        text-align: right;
    }
    .van-icon-arrow{
        position: relative;
        top: 0.1rem
    }
    .zi{
        background-color: rgb(246, 93, 23);
        color: rgb(255, 255, 255);
        font-size: 10px;
        display: inline-block;
        height: 1.7rem;
        line-height: 1.7rem;
        padding: 0 0.5rem;
        vertical-align: bottom;
        position: absolute;
        bottom: 0;
        border-radius: 0.73rem;
    }
    .vip{
        vertical-align: top;
        display: inline-block;
        width: 20rem;
        height: 2.4rem;
        /* line-height: .34rem; */
        position: relative;
        margin-left: 0.7rem;
        
    }
    .yi{
        vertical-align: top;
        position: relative;
    }
    .van-icon-manager{
        position: relative;
        top: 0.3rem;
        color: white;
    }
    .avatar img{
        width: 100%;
        height: 100%;
    }
    .avatar{
        width: 5.6rem;
        height: 5.6rem;
        border: 0.1rem solid white;
        border-radius: 50%;
        background-color: #e5cc63;
        line-height: 5.6rem;
        text-align: center;
        font-size: 3.5rem;
        overflow: hidden;
        display: inline-block;
    }
    .me-header{
        width: 100%;
        height: 17.8rem;
        padding: 0.9rem 1.7rem 0;
        box-sizing: border-box;
        background-image: url("/2.png");
        background-size: 100% 100%;
        position: relative;
    }
</style>