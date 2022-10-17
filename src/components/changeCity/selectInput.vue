<template>
  <div
    :class="['choose-wrap', disabled ? 'disabled' : '']"
    @click="showList"
    v-documentClick="documentClick"
  >
    <!-- 给 :class传递一个对象来动态切换, 是否存在取决于数据属性的真假值 
      给 :class绑定一个数组来渲染多个 CSS class：,可以使用三元表达式-->
    <div class="choose">
      <span>{{ value }}</span>
      <i class="el-icon-caret-bottom"></i>
      <div :class="{ 'mt-content': true, active: isShow }">
        <h2>{{ title }}</h2>
        <div :class="['wrapper', className]">
          <div class="col" v-for="(dataList, index) in renderList" :key="index">
            <span
              :class="{ 'mt-item': true, active: item == value }"
              v-for="(item, index) in dataList"
              :key="index"
              @click="changeValue(item)"
            >
              {{ item.name }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["list", "title", "value", "isShow", "disabled", "className"],
  directives: {
    documentClick(el, binding) {
      // binding.value:传递给指令的(值):v-documentClick="documentClick"
      document.addEventListener("click", binding.value, false);
    },
  },
  computed: {
    renderList: function () {
      const col = Math.ceil(this.list.length / 12);
      const resultList = [];
      for (var i = 0; i < col; i++) {
        const data = this.list.slice(i * 12, i * 12 + 12);
        resultList.push(data);
      }
      return resultList;
    },
  },
  methods: {
    showList(e) {
      e.preventDefault();
      e.stopPropagation();
      // this.isShow = true;
      // 触发父组件的自定义事件并传递参数给回调函数
      this.$emit("changeActive", true);
    },
    documentClick() {
      // this.isShow = false;
      this.$emit("changeActive", false);
    },
    changeValue(item) {
      this.$emit("change", item);
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/css/changecity/select.scss";
</style>