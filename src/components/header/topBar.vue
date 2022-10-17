<template>
  <el-row class="m-header-topbar m-header">
    <el-col :span="10">
      <geoVue />
    </el-col>
    <el-col :span="14">
      <navVue />
    </el-col>
  </el-row>
</template>

<script>
import geoVue from "./geo.vue";
import navVue from "./nav.vue";
export default {
  components: {
    geoVue,
    navVue,
  },
};
</script>