<template>
  <div class="m-product-category">
    <categoryItem title="分类" :list="classicList" />
    <categoryItem title="区域" :list="areaList" />
  </div>
</template>

<script>
import categoryItem from "./categoryItem.vue";
import api from "@/api/index.js";
export default {
  data() {
    return {
      classicList: [],
      areaList: [
        {
          title: '推荐商圈',
          subList: [
            {
              name: '望京',
              id: 120000
            },
            {
              name: '昌平',
              id: 12222
            }
          ]
        }
      ],
    };
  },
  created() {
    api.getClassify().then((res) => {
      this.classicList = res.data.data;
    });
    // api.getAreaList().then((res) => {
    //   this.areaList = res.data.data;
    // });
  },
  components: {
    categoryItem,
  },
};
</script>