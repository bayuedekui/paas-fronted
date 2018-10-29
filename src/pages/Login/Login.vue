<template>
  <div>
    <!-- 注册 -->
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
          <label for="age" class="control-label">年龄：</label>
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

    <!-- 登录 -->
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
  </div>


</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        isLogin:false
      };
    },
    components: {},


  };
</script>

<style scoped>
</style>
