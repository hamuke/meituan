<template>
  <div class="page-changeCity">
    <el-row>
      <selectCity />
    </el-row>
    <el-row>
      <hotCity title="热门城市:" :list="hotList" />
    </el-row>
    <el-row>
      <hotCity title="最近访问:" :list="recentList" />
    </el-row>
    <el-row>
      <category />
    </el-row>
  </div>
</template>

<script>
import selectCity from "../components/changeCity/selectCity.vue";
import hotCity from "../components/changeCity/hotCity.vue";
import category from "../components/changeCity/category.vue";
import api from "@/api/index.js";
export default {
  data() {
    return {
      hotList: [],
      recentList: [],
    };
  },
  created() {
    api.getHotCity().then((res) => {
      this.hotList = res.data.data;
    });
    api.getRecentCity().then((res) => {
      this.recentList = res.data.data;
    });
  },
  components: {
    selectCity,
    hotCity,
    category,
  },
};
</script>