<template>
<div class="sui-navbar navbar-inverse">
  <div class="navbar-inner"><a href="#" class="sui-brand">PaaS</a>
    <ul class="sui-nav">
      <li class="active"><a href="#">服务市场</a></li>
      <li><a href="#">我发布的服务</a></li>
      <li><a href="#">我订购的服务</a></li>
      <li><a href="#">个人中心</a></li>

    </ul>
     <form class="sui-form sui-form pull-left">
      <input type="text" placeholder="宝贝/店铺名称...">
      <button class="sui-btn">搜索</button>
    </form>
    <ul class="sui-nav pull-right">
      <li @click="goTo('/loginorregister')"><a href="#" style="padding-right: 4px"><i class="iconfont icon-touxiang"></i></a></li>
      <li @click="goTo('/loginorregister')" v-show="!isLogined"><a>游客</a></li>
      <li v-show="isLogined"><a style="padding-left: 4px;">欢迎您,{{personName}}</a></li>
      <li @click="exit()"><a style="padding-left: 4px;">退了</a></li>
    </ul>
  </div>
</div>




</template>

<script type="text/ecmascript-6">
  import {getRequest} from '../../api/ajax'


export default {
  data() {
    return {
      isLogin:false,
      personName:null,
      isLogined:false
    }
  },
  components: {

  },

  mounted:function(){
    getRequest('/user/loginedperson',{}).then(resq=>{
      if(resq.data.isLogined){
        this.isLogined=true
        this.personName=resq.data.username;
      }else{
        this.isLogined=false
      }

    },resq=>{
      alert('系统繁忙,请稍后重试!')
    });

  },



  methods:{
    goTo(path){
      if(!this.isLogined){
        this.$router.replace(path)
      }
    },


    exit(){
      getRequest('/user/exit',{}).then(resq=>{
        alert("确定退出吗?")
        if(resq.data){
          window.location.reload()
        }else{
          alert('系统开了个小差,请重新退出')
        }
      },resq=>{
        alert('系统繁忙,请稍后重试')
      });
    }
  }



}
</script>

<style scoped>
  @import "../../res/css/global.css";
  @import "../../res/layui/css/layui.css";

</style>
