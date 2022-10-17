<template>
  <div class="m-istyle">
    <dl @mouseover="mouseover" :class="nav.class">
      <dt>{{ nav.title }}</dt>
      <dd
        v-for="(item, index) in nav.list"
        :key="item + '-' + index"
        :data-type="item.tab"
        :class="{ active: kind == item.tab }"
      >
        {{ item.text }}
      </dd>
    </dl>
    <ul class="ibody">
      <li v-for="(item, index) in dataList[kind]" :key="item + '-' + index">
        <router-link to="/goodsList">
          <el-card shadow="never">
            <img :src="item.image" alt="" />
            <div class="cbody">
              <div class="title">{{ item.title }}</div>
              <div class="sub-title">{{ item.subTitle }}</div>
              <div class="price">
                <span class="price-symbol numfont">¥</span>
                <span class="current-price numfont">{{ item.price }}</span>
              </div>
            </div>
          </el-card>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import api from "@/api/index.js";
export default {
  data() {
    return {
      kind: "all",
      dataList: {},
    };
  },
  created() {
    api.getResultsByKeywords().then((res) => {
      this.dataList = res.data.data;
    });
  },
  props: ["nav"],
  methods: {
    mouseover(e) {
      const dom = e.target;
      const tagName = dom.tagName.toLowerCase();
      if (tagName !== "dd") {
        return false;
      }
      this.kind = dom.getAttribute("data-type");
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/css/index/artistic.scss";
</style>