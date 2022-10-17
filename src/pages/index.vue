<template>
  <div class="page-index">
    <el-row>
      <el-col :span="5">
        <menuVue />
      </el-col>
      <el-col :span="14">
        <mainVue />
      </el-col>
      <el-col :span="5">
        <infoVue />
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <containerVue :nav="titleList[0]" />
      </el-col>
      <el-col :span="24">
        <containerVue :nav="titleList[1]" />
      </el-col>
      <el-col :span="24">
        <containerVue :nav="titleList[2]" />
      </el-col>
      <el-col :span="24">
        <containerVue :nav="titleList[3]" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import menuVue from "../components/index/menu.vue";
import mainVue from "../components/index/main.vue";
import infoVue from "../components/index/info.vue";
import containerVue from "../components/index/container.vue";
import jsonData from "@/json/mainContent.json";
export default {
  data() {
    return {
      titleList: ['iStyle', 'youhui', 'mingsu', 'tuijian'],
    };
  },
  created() {
    this.titleList[0] = jsonData[0];
    this.titleList[1] = jsonData[1];
    this.titleList[2] = jsonData[2];
    this.titleList[3] = jsonData[3];
  },
  components: {
    menuVue,
    mainVue,
    infoVue,
    containerVue,
  },
};
</script>

<style lang="scss">
@import "@/assets/css/index/index.scss";
@import "@/assets/css/index/life.scss";
</style>
