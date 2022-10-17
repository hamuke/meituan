<template>
  <div class="m-geo">
    <div class="position">
      <i class="el-icon-location" />
      {{ $store.state.position.name }}
      <router-link :to="'/changeCity'" class="changeCity">切换城市</router-link>
      [
      <router-link
        class="detailAddr"
        :to="'/changeCity'"
        v-for="(item, index) in nearCity"
        :key="index"
        >{{ item.name }}</router-link
      >
      ]
    </div>
    <div class="m-user">
      <a href="#" class="login_a" v-if="$store.state.userName">{{ $store.state.userName }}</a>
      <router-link class="login" :to="{ name: 'login' }" v-else>
        立即登录
      </router-link>
      <a href="#" class="login_a" v-if="$store.state.userName" @click="logout">退出</a>
      <router-link class="register" :to="{ name: 'register' }" v-else>
        注册
      </router-link>
    </div>
  </div>
</template>

<script>
import api from "@/api/index.js";
export default {
  data() {
    return {
      nearCity: [],
      userName: "",
    };
  },
  watch: {
    "$store.state.position": function () {
      this.nearCity = this.$store.state.position.nearCity;
    },
    "$store.state.userName": function () {
      this.userName = this.$store.state.userName;
    },
  },
  created() {
    api.getPosition().then((res) => {
      this.$store.dispatch("setPosition", res.data.data);
      this.nearCity = res.data.data.nearCity;
    });
  },
  methods: {
    logout() {
      this.$store.commit("setUserName", "");
    },
  },
};
</script>