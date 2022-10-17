<template>
  <div class="page-product">
    <el-row class="m-crumbs">
      <crumbs />
    </el-row>
    <el-row>
      <el-col :span="19">
        <el-row>
          <category />
        </el-row>
        <el-row>
          <itemList />
        </el-row>
      </el-col>
      <el-col :span="5">
        <el-row>
          <suggestList />
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import crumbs from "../components/goodsList/crumbs.vue";
import category from "../components/goodsList/category.vue";
import itemList from "../components/goodsList/itemList.vue";
import suggestList from "../components/goodsList/suggestList.vue";
export default {
  components: {
    crumbs,
    category,
    itemList,
    suggestList,
  },
};
</script>

<style lang="scss">
@import "@/assets/css/products/index.scss";
</style>