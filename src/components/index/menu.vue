<template>
  <div class="m-menu">
    <dl class="nav" @mouseleave="menuLeave">
      <dt>全部分类</dt>
      <dd
        v-for="(item, index) in menuList"
        :key="index + '-' + item"
        @mouseenter="menuEnter(item)"
      >
        <i :class="item.type"></i>
        {{ item.name }}
        <span class="arrow"></span>
      </dd>
    </dl>
    <div
      v-if="showDetail"
      class="detail"
      @mouseenter="detailEnter"
      @mouseleave="detailLeave"
    >
      <div v-for="(item, index) in showDetail.items" :key="index + '-' + item">
        <h4>
          {{ item.title }}
          <span>更多></span>
        </h4>
        <span v-for="(v, i) in item.items" :key="v + '-' + i">{{ v }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/api/index.js";
export default {
  data() {
    return {
      showDetail: null,
      menuList: [],
    };
  },
  created() {
    api.getNavList().then((res) => {
      this.menuList = res.data.data;
    });
  },
  methods: {
    menuEnter(item) {
      this.showDetail = item;
    },
    menuLeave() {
      var self = this;
      this.timer = setTimeout(function () {
        self.showDetail = null;
      }, 100);
    },
    detailEnter() {
      clearTimeout(this.timer);
    },
    detailLeave() {
      this.showDetail = null;
    },
  },
};
</script>