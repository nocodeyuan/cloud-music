<template>
  <div class="login-form">
    <div class="first-show" v-show="!cellphone">
      <button @click="changeRule">手机号登录</button>
      <button @click="goRegister">注册</button>
    </div>
    <div class="login-group" v-show="cellphone">
      <div class="input-group">
        <label for="nickname">用户：</label>
        <input type="text" id="nickname" v-model="phone" />
      </div>
      <div class="input-group">
        <label for="pwd">密码：</label>
        <input type="password" id="pwd" v-model="password" />
      </div>
      <div class="btn-group">
        <button @click="userLogin">登录</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'UserLogin',
  data() {
    return {
      cellphone: false,
      phone: '19814666836',
      password: 'yuyuyu123',
    }
  },
  methods: {
    ...mapActions('login', ['verifyLogin']),

    //切换登录方式
    changeRule() {
      this.cellphone = !this.cellphone
    },

    //进入注册
    goRegister() {
      this.$router.push('/register')
    },

    //用户登录
    userLogin() {
      console.log('登录中...')
      const data = {
        phone: this.phone,
        password: this.password,
        timestamp: Date.now(),
      }
      //$store -> dispatch
      this['verifyLogin'](data)
        .then((res) => {
          // console.log(this.$store.state.login.pro_file)
          console.log('登录成功')
          this.$router.replace('/home')
        })
        .catch((err) => {
          console.log(err)
        })
    },
  },
}
</script>

<style lang="scss" scoped>
.login-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  background: #fff;
  color: #111;
  .first-show {
    width: 50%;
    display: flex;
    flex-direction: column;
  }
  .input-group:nth-child(2) {
    margin-top: 20px;
    padding-bottom: 20px;
  }
  input {
    display: inline-block;
    padding: 0 16px;
    box-sizing: border-box;
    border-bottom: 1px solid #111;
  }
  button {
    height: 35px;
    width: 100%;
    background-color: #fff;
    border: 1px solid #d43c33;
    border-radius: 5px;
    outline: none;
    color: #d43c33;
    cursor: pointer;
  }
  .btn-group {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px auto 0;
  }
}
</style>
