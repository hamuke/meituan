<template>
  <div class="m-life">
    <el-row>
      <div class="m-life-login">
        <h4>
          <img
            :src="
              $store.state.userName
                ? 'https://img.meituan.net/avatar/e7aec991d0da1450c59cb1ae4f34754738537.jpg'
                : '//s0.meituan.net/bs/fe-web-meituan/2d05c2b/img/avatar.jpg'
            "
            alt="avatar"
          />
        </h4>
        <p class="m-life-login-name">
          Hi! {{ $store.state.userName ? $store.state.userName : " 你好！" }}
        </p>
        <p>
          <router-link :to="{ name: 'login' }" v-if="!$store.state.userName">
            <el-button round>立即登录</el-button>
          </router-link>
          <router-link :to="{ name: '' }" v-else>
            <el-button round>我的订单</el-button>
          </router-link>
        </p>
        <p>
          <router-link :to="{ name: 'register' }" v-if="!$store.state.userName">
            <el-button round>注册</el-button>
          </router-link>
          <router-link :to="{ name: '' }" v-else>
            <el-button round>我的收藏</el-button>
          </router-link>
        </p>
      </div>
    </el-row>
    <el-row>
      <div class="m-life-downapp">
        <img
          src="//s1.meituan.net/bs/fe-web-meituan/60ac9a0/img/download-qr.png"
          alt="下载APP"
        />
        <p>美团APP手机版</p>
        <p class="last-p">
          <span class="red"> 1元起 </span>
          吃喝玩乐
        </p>
      </div>
    </el-row>
  </div>
</template>

<script>
export default {};
</script>