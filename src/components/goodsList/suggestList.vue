<template>
  <div class="m-products-list">
    <h3>猜你喜欢</h3>
    <suggestItem
      v-for="(item, index) in suggestList"
      :key="index"
      :meta="item"
    />
  </div>
</template>

<script>
import suggestItem from "./suggestItem.vue";
import api from "@/api/index.js";
export default {
  data() {
    return {
      suggestList: [],
    };
  },
  created() {
    api.getRecommend().then((res) => {
      this.suggestList = res.data.data;
    });
  },
  components: {
    suggestItem,
  },
};
</script>