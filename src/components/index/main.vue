<template>
  <div class="m-life">
    <el-row>
      <ul class="nav">
        <li>
          <router-link to="/goodsList" class="takeout">美团外卖</router-link>
        </li>
        <li>
          <router-link to="/goodsList" class="business">猫眼电影</router-link>
        </li>
        <li>
          <router-link to="/goodsList">美团酒店</router-link>
        </li>
        <li>
          <router-link to="/goodsList" class="apartment">民宿/公寓</router-link>
        </li>
        <li>
          <router-link to="/goodsList" class="business">商家入驻</router-link>
        </li>
        <li>
          <router-link to="/goodsList">美团公益</router-link>
        </li>
      </ul>
    </el-row>
    <el-row>
      <el-col :span="19">
        <slideVue />
      </el-col>
      <el-col :span="5">
        <div class="m-life-pic"></div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="10">
        <div class="m-life-hotel"></div>
      </el-col>
      <el-col :span="9">
        <div class="m-life-music"></div>
      </el-col>
      <el-col :span="5">
        <div class="m-life-coop"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import slideVue from "./slide.vue";
export default {
  components: {
    slideVue,
  },
};
</script>