<template>
  <!-- <div>
     &lt;!&ndash; 注册 &ndash;&gt;
     <div class="registory" v-show="!isLogin">
       <form id="form-msg" class="sui-form form-horizontal sui-validate">
         <div class="control-group">
           <label for="name" class="control-label">姓名：</label>
           <div class="controls">
             <input type="text" id="name" placeholder="required" data-rules="required" name="name">
           </div>
         </div>
         <div class="control-group">
           <label for="email" class="control-label">邮箱：</label>
           <div class="controls">
             <input type="text" id="email" placeholder="email" data-rules="required|email" name="email">
           </div>
         </div>
         <div class="control-group">
           <label for="password" class="control-label">密码：</label>
           <div class="controls">
             <input type="password" id="password" placeholder="required" data-rules="required|minlength=8|maxlength=16"
                    name="password">
           </div>
         </div>
         <div class="control-group">
           <label for="repassword" class="control-label">重复密码：</label>
           <div class="controls">
             <input type="password" id="repassword" placeholder="match" data-rules="required|match=password"
                    name="repassword">
           </div>
         </div>
         <div class="control-group">
           <label for="date" class="control-label">出生年月日：</label>
           <div class="controls">
             <input type="text" id="date" placeholder="date" data-rules="required|date" name="date"
                    data-toggle="datepicker">
           </div>
         </div>
         <div class="control-group">
           <label for="age" class="control-label">年龄(选填)：</label>
           <div class="controls">
             <input type="text" id="age" placeholder="digits" data-rules="required|digits" name="age">
           </div>
         </div>
         <div class="control-group">
           <label for="url" class="control-label">个人网址(选填)：</label>
           <div class="controls">
             <input type="text" id="url" placeholder="url" data-rules="url" name="url">
           </div>
         </div>
         <div class="control-group">
           <label class="control-label"></label>
           <div class="controls">
             <button type="submit" class="sui-btn btn-primary btn-large">注册</button>
           </div>
         </div>
       </form>
     </div>

     &lt;!&ndash; 登录 &ndash;&gt;
     <div alass="login" v-show="isLogin">
       <form id="form-msg" class="sui-form form-horizontal" novalidate="novalidate">
         <div class="control-group">
           <label for="inputEmail" class="control-label">用户名：</label>
           <div class="controls">
             <input type="text" id="inputEmail" name="email" placeholder="邮箱" data-rules="required|email">
           </div>
         </div>
         <div class="control-group">
           <label for="inputPassword" class="control-label">密码：</label>
           <div class="controls">
             <input type="password" id="inputPassword" name="password" placeholder="密码" title="密码"
                    data-rules="required|minlength=6|maxlength=12">
           </div>
         </div>
         <div class="control-group">
           <label for="sanwei" class="control-label"></label>
           <div class="controls">
             <button type="submit" class="sui-btn btn-primary">登录</button>
           </div>
         </div>
       </form>
     </div>
   </div>-->

  <div class="layui-container fly-marginTop">
    <div class="fly-panel fly-panel-user" pad20>
      <div class="layui-tab layui-tab-brief" lay-filter="user">
        <ul class="layui-tab-title">
          <li v-bind:class="{'layui-this':isLogin}" @click="changeSta(true)">登入</li>
          <li v-bind:class="{'layui-this':!isLogin}" @click="changeSta(false)">注册</li>
        </ul>
        <!--login-->
        <div class="layui-form layui-tab-content" id="LAY_ucm" style="padding: 20px 0;" v-show="isLogin">
          <div class="layui-tab-item layui-show">
            <div class="layui-form layui-form-pane">
                <div class="layui-form-item">
                  <label for="L_username" class="layui-form-label">用户名</label>
                  <div class="layui-input-inline">
                    <input type="text" id="L_username" name="username" required lay-verify="required" autocomplete="off"
                           class="layui-input">
                  </div>
                </div>
                <div class="layui-form-item">
                  <label for="L_pass" class="layui-form-label">密码</label>
                  <div class="layui-input-inline">
                    <input type="password" id="L_pass" name="pass" required lay-verify="required" autocomplete="off"
                           class="layui-input">
                  </div>
                </div>
                <!--<div class="layui-form-item">
                  <label for="L_vercode" class="layui-form-label">人类验证</label>
                  <div class="layui-input-inline">
                    <input type="text" id="L_vercode" name="vercode" required lay-verify="required"
                           placeholder="请回答后面的问题" autocomplete="off" class="layui-input">
                  </div>
                  <div class="layui-form-mid">
                    <span style="color: #c00;"></span>
                  </div>
                </div>-->
                <div class="layui-form-item">
                  <button class="layui-btn" lay-filter="*" lay-submit @click="login()">立即登录</button>
                  <span style="padding-left:20px;">
                  <!--<a href="forget.html">忘记密码？</a>-->
                    <router-link to="/forget">忘记密码?</router-link>
                </span>
                </div>
                <!-- <div class="layui-form-item fly-form-app">
                   <span>或者使用社交账号登入</span>
                   <a href="" onclick="layer.msg('正在通过QQ登入', {icon:16, shade: 0.1, time:0})" class="iconfont icon-qq" title="QQ登入"></a>
                   <a href="" onclick="layer.msg('正在通过微博登入', {icon:16, shade: 0.1, time:0})" class="iconfont icon-weibo" title="微博登入"></a>
                 </div>-->
            </div>
          </div>
        </div>
        <!--register-->
        <div class="layui-form layui-tab-content" id="LAY_ucm" style="padding: 20px 0;" v-show="!isLogin">
          <div class="layui-tab-item layui-show">
            <div class="layui-form layui-form-pane">
              <!--<form method="post">-->
                <div class="layui-form-item">
                  <label for="R_email" class="layui-form-label"></label>
                  <div class="layui-input-inline">
                    <input type="text" id="R_email" name="email" required lay-verify="email" autocomplete="off"
                           class="layui-input">
                  </div>
                  <div class="layui-form-mid layui-word-aux">用户名将会成为您唯一的登入名</div>
                </div>
                <div class="layui-form-item">
                  <label for="R_username" class="layui-form-label">用户名</label>
                  <div class="layui-input-inline">
                    <input type="text" id="R_username" name="username" required lay-verify="required" autocomplete="off"
                           class="layui-input">
                  </div>
                </div>
                <div class="layui-form-item">
                  <label for="R_pass" class="layui-form-label">密码</label>
                  <div class="layui-input-inline">
                    <input type="password" id="R_pass" name="pass" required lay-verify="required" autocomplete="off"
                           class="layui-input">
                  </div>
                  <div class="layui-form-mid layui-word-aux">6到16个字符</div>
                </div>
                <div class="layui-form-item">
                  <label for="R_repass" class="layui-form-label">确认密码</label>
                  <div class="layui-input-inline">
                    <input type="password" id="R_repass" name="repass" required lay-verify="required" autocomplete="off"
                           class="layui-input">
                  </div>
                </div>
                <!--<div class="layui-form-item">
                  <label for="R_vercode" class="layui-form-label">人类验证</label>
                  <div class="layui-input-inline">
                    <input type="text" id="R_vercode" name="vercode" required lay-verify="required"
                           placeholder="请回答后面的问题" autocomplete="off" class="layui-input">
                  </div>
                  <div class="layui-form-mid">
                    <span style="color: #c00;"></span>
                  </div>
                </div>-->
                <div class="layui-form-item">
                  <button class="layui-btn" lay-filter="*" @click="register()">立即注册</button>
                </div>
                <!--<div class="layui-form-item fly-form-app">
                  <span>或者直接使用社交账号快捷注册</span>
                  <a href="" onclick="layer.msg('正在通过QQ登入', {icon:16, shade: 0.1, time:0})" class="iconfont icon-qq" title="QQ登入"></a>
                  <a href="" onclick="layer.msg('正在通过微博登入', {icon:16, shade: 0.1, time:0})" class="iconfont icon-weibo" title="微博登入"></a>
                </div>-->
              <!--</form>-->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import $ from 'jquery';
  import ajax from '../../api/ajax'
  import {postRequest} from "../../api/ajax";

  export default {
    data() {
      return {
        isLogin: true
      };
    },
    components: {},
    methods: {

      /**
       * 改变是否是登录/注册 状态
       * @param flag
       */
      changeSta(flag) {
        this.isLogin = flag;
      },

      /**
       * 路由跳转
       * @param path
       */
      goTo(path) {
        this.$router.push(path)
      },

      /**
       * 向后台发送你注册信息
       */
      register() {
        let name = $('#R_username').val()
        let email = $('#R_email').val()
        let password = $('#R_pass').val()

        postRequest('/user/register',
          {
            name: name,
            email: email,
            password: password
          }).then(resp => {
          if (resp.data.success == true) {
            alert("注册成功,点击确定进入登录页面!")
            this.isLogin=true
            this.$router.push("/loginorregister")
          }
        }, resp => {
          alert("注册失败,请重试")
          this.isLogin=false
          this.$router.push("/loginorregister")
        })
      },

      /**
       * 用户登录,失败重新打扫登陆页面,成功到服务市场首页,同时导航菜单显示用户名
       */
      login(){
        let name = $('#L_username').val()
        let password = $('#L_pass').val()

        postRequest('/user/login',{name:name,password:password}).then(
          resp=>{
            if(resp.data.success == true){
              this.$router.push('/servicesmarketing')
              window.location.reload()
            }else{
              alert("用户名或者密码错误,请重试!")
              this.$router.push('/loginorregister')
            }
          },resp=>{
            alert('系统繁忙,请重试!')
            this.$router.push('/loginorregister')
          }
        )
      }

    }


  };
</script>

<style scoped>
  @import "../../res/css/global.css";
  @import "../../res/layui/css/layui.css";

</style>
