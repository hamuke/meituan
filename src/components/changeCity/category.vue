<template>
  <div class="category">
    <dl class="m-category">
      <dt>按拼音首字母选择：</dt>
      <dd v-for="(item, index) in list" :key="index + '-' + item">
        <a :href="'#city-' + item">{{ item }}</a>
      </dd>
    </dl>
    <dl
      class="m-category-section"
      v-for="(item, index) in cityList"
      :key="index + '-' + item"
      :id="'city-' + index"
    >
      <dt>{{ index }}</dt>
      <dd>
        <span v-for="city in item" :key="city.id" @click="changeCity(city)">
          {{ city.name }}
        </span>
      </dd>
    </dl>
  </div>
</template>

<script>
import jsonData from "@/json/province.json";
import compare from "@/utils/sort.js";
export default {
  data() {
    return {
      list: "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),
      cityList: [],
    };
  },
  created() {
    var obj = {};
    // 将json数据按照首字母排序
    var data = jsonData.sort(compare("firstChar"));
    // 遍历数据,将数据用首字母大写进行分组放入obj对象中,每一项都是一个数组
    data.forEach((item) => {
      if (!obj[item.firstChar.toUpperCase()]) {
        obj[item.firstChar.toUpperCase()] = [];
      }
      obj[item.firstChar.toUpperCase()].push(item);
    });
    this.cityList = obj;
  },
  methods: {
    changeCity(item) {
      this.$store.dispatch("setPosition", item);
      this.$router.push({ name: "index" });
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/css/changecity/category.scss";
</style>