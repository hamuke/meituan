<template>
  <div class="search-panel">
    <el-row class="m-header-searchbar">
      <el-col :span="3" class="left">
        <router-link :to="'/index'">
          <img
            src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/logo.png"
            alt="美团"
          />
        </router-link>
      </el-col>
      <el-col :span="15" class="center">
        <div class="wrapper">
          <el-input
            v-model="searchWord"
            placeholder="搜索商家或地点"
            @focus="focusInput"
            @blur="blurInput"
            @input="input"
          ></el-input>
          <el-button type="primary" icon="el-icon-search"></el-button>
          <dl class="hotPlace" v-if="isHotPlace">
            <dt>热门搜索</dt>
            <dd v-for="(item, index) in hotPlaceList" :key="item + '_' + index">
              <router-link :to="{ name: 'goodsList', params: { name: item } }">
                {{ item }}
              </router-link>
            </dd>
          </dl>
          <dl class="searchList" v-if="isSearchList">
            <dd v-for="(item, index) in searchList" :key="item + '-' + index">
              <router-link :to="{ name: 'goodsList', params: { name: item } }">
                {{ item }}
              </router-link>
            </dd>
          </dl>
        </div>
        <p class="suggest">
          <router-link
            v-for="(item, index) in suggestList"
            :key="item + '~' + index"
            :to="{ name: 'goodsList', params: { name: item } }"
            >{{ item }}</router-link
          >
        </p>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import api from "@/api/index.js";
export default {
  data() {
    return {
      searchWord: "",
      isFocus: false,
      searchList: [],
      hotPlaceList: [],
      suggestList: [],
    };
  },
  created() {
    api.getSearchHotWords().then((res) => {
      this.suggestList = res.data.data;
      this.hotPlaceList = res.data.data;
    });
  },
  computed: {
    isHotPlace() {
      return this.isFocus && !this.searchWord;
    },
    isSearchList() {
      return this.isFocus && this.searchWord;
    },
  },
  methods: {
    focusInput() {
      this.isFocus = true;
    },
    blurInput() {
      this.isFocus = false;
    },
    input() {
      const val = this.searchWord;
      api.getSearchList().then((res) => {
        this.searchList = res.data.data.list.filter((item) => {
          return item.indexOf(val) > -1;
        });
      });
    },
  },
};
</script>