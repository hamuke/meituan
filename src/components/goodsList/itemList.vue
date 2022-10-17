<template>
  <div class="m-products-list">
    <ul>
      <li v-for="item in navList" :key="item.key">
        {{ item.name }}
      </li>
    </ul>
    <el-row>
      <itemVue
        v-for="(item, index) in productList"
        :key="index + '`'"
        :meta="item"
      />
      <itemVue
        v-for="(item, index) in productList"
        :key="index + '-a'"
        :meta="item"
      />
      <itemVue
        v-for="(item, index) in productList"
        :key="index + '='"
        :meta="item"
      />
      <itemVue
        v-for="(item, index) in productList"
        :key="index + '+'"
        :meta="item"
      />
      <itemVue
        v-for="(item, index) in productList"
        :key="index + '-b'"
        :meta="item"
      />
    </el-row>
  </div>
</template>

<script>
import itemVue from "./item.vue";
import api from "@/api/index.js";
export default {
  data() {
    return {
      navList: [
        {
          key: "s-default",
          name: "智能排序",
          active: true,
        },
        {
          key: "s-price",
          name: "价格排序",
          active: false,
        },
        {
          key: "s-score",
          name: "人气最高",
          active: false,
        },
        {
          key: "s-comment",
          name: "评价最高",
          active: false,
        },
      ],
      productList: [],
    };
  },
  created() {
    api.getGoodsList().then((res) => {
      this.productList = res.data.data;
    });
  },
  components: {
    itemVue,
  },
};
</script>