<template>
  <div class="m-iselect">
    <span class="name">按省份选择:</span>
    <selectInput
      class="province"
      :list="provinceList"
      title="省份"
      :value="province"
      :isShow="provinceShow"
      @changeActive="changeProvinceActive"
      @change="changeProvince"
    />
    <selectInput
      class="city"
      :list="cityList"
      title="城市"
      :value="city"
      :isShow="cityShow"
      @changeActive="changeCityActive"
      @change="changeCity"
      :disabled="isDisabled"
    />
    <span class="search">直接搜索:</span>
    <el-select
      v-model="searchWord"
      filterable
      remote
      reserve-keyword
      placeholder="请输入城市中文或拼音"
      :loading="loading"
      :remote-method="remoteMethod"
    >
      <el-option
        v-for="(item, index) in searchList"
        :key="index"
        :label="item.name"
        :value="item.name"
      >
      </el-option>
    </el-select>
  </div>
</template>

<script>
import selectInput from "./selectInput.vue";
import api from "@/api/index.js";
export default {
  data() {
    return {
      // 省份和城市列表数据
      provinceList: [],
      cityList: [],
      // 选择列表的标题
      province: "省份",
      city: "城市",
      // 显示哪个选择列表
      provinceShow: false,
      cityShow: false,
      // 城市选择列表是否显示为不可操作
      isDisabled: true,

      // 搜索框信息
      loading: false,
      searchWord: "",
      searchList: [],
    };
  },
  created() {
    api.getProvince().then((res) => {
      this.provinceList = res.data.data.map((item) => {
        item.name = item.provinceName;
        return item;
      });
    });
  },
  components: {
    selectInput,
  },
  methods: {
    // 判断显示省份或者城市选择列表
    changeProvinceActive(flag) {
      this.provinceShow = flag;
      if (flag) {
        this.cityShow = false;
      }
    },
    changeCityActive(flag) {
      this.cityShow = flag;
      if (flag) {
        this.provinceShow = false;
      }
    },
    changeProvince(item) {
      this.province = item.name;
      this.cityList = item.cityInfoList;
      this.isDisabled = false;
    },
    changeCity(item) {
      this.city = item.name;
      this.$store.dispatch("setPosition", item);
      this.$router.push({ name: "index" });
    },
    remoteMethod() {
      // 携带搜索框的值请求后端接口
      const val = this.searchWord;
      api.getCity().then((res) => {
        this.searchList = res.data.data.filter((item) => {
          return item.name.indexOf(val) > -1;
        });
      });
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/css/changecity/iselect.scss";
</style>