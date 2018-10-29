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
      <li @click="goTo('/loginorregister')"><a href="#">登录/注册</a></li>
    </ul>
  </div>
</div>




</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {

    }
  },
  components: {

  },

  methods:{
    goTo(path){
      this.$router.replace(path)
    }
  }



}
</script>

<style scoped>
</style>
